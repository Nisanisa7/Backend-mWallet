const userModels = require("../models/userAuth");
const { v4: uuidv4 } = require("uuid");
const helpers = require("../helpers/helpers");
const common = require("../helpers/common");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const {
    username,
    email,
    password,
    phone,
    role,
  } = req.body;

  const user = await userModels.findUser(email);
  if (user.length > 0) {
    return helpers.response(res, "email sudah ada", null, 401);
  }
  console.log(user);
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      // Store hash in your password DB.
      const data = {
        id: uuidv4(),
        username: username,
        email: email,
        password: hash,
        phone: phone,
        role: role,
        status: "UNACTIVED",
        createdAt: new Date(),
      };

      userModels
        .insertUser(data)
        .then((result) => {
          delete data.password;
          jwt.sign(
            { username: data.username, email: data.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "2h" },
            function (err, token) {
            //   console.log(token);
              common.sendEmailActivation(data.email, data.username, token);
            }
          );
          helpers.response(res, "Success register", data, 200);
        })
        .catch((error) => {
          console.log(error);
          helpers.response(res, "error register", null, 500);
        });
    });
  });
};


const activation = (req, res, next) => {
  const token = req.params.token;
  if (!token) {
    const error = new Error("server need token");
    error.code = 401;
    return next(error);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      helpers.response(res, "Activation failed", null, 401);
    }
    const email = decoded.email;
    userModels
      .activationUser(email)
      .then(() => {
        // alert(`Activation Sucessful`)
        console.log("Sucessful");
        helpers.response(res, "Success activation", email, 200);
        // res.redirect(`${process.env.FRONT_URL}/v1/login/`);
      })

      .catch((error) => {
        helpers.response(res, "failed change status", null, 401);
      });
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const result = await userModels.findUser(email);
  const user = result[0];
  const status = user.status;
 
  if (status == "ACTIVED") {
    bcrypt.compare(password, user.password, function (err, resCompare) {
      if (!resCompare) {
        return helpers.response(res, "password wrong", null, 401);
      }

      // generate token
      jwt.sign(
        {
          username: user.username,
          email: user.email,
          pin: user.pin,
          role: user.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "24h" },
        function (err, token) {
        //   console.log(token);
          console.log(process.env.ACCESS_TOKEN_SECRET);
          delete user.password;
          user.token = token;
          helpers.response(res, "success login", user, 200);
        }
      );
    });
  } else {
    return helpers.response(res, "account not actived", null, 401);
  }
};

const setPin =  (req, res, next) => {
  const { id, pin } = req.body;
  userModels
    .setPinUser(id,pin)
    .then(() => {
      helpers.response(res, "Success set pin", id, 200);
    })

    .catch((error) => {
      helpers.response(res, "failed set pin", null, 401);
    });
};

const forgotPassword =  (req, res, next) => {
  const  email = req.body;
   userModels
     .findUser(email)
     .then((result) => {
         const user = result[0];
       helpers.response(res, "Success find user", user, 200);
         jwt.sign(
           { username: user.username, email: user.email },
           process.env.ACCESS_TOKEN_SECRET,
           { expiresIn: "2h" },
           function (err, token) {
             //   console.log(token);
             common.sendEmailResetPassword(user.email, user.username, token);
           }
         );
         helpers.response(res, "Success token", data, 200);
     })
     .catch((error) => {
       helpers.response(res, "failed find user", null, 401);
     });
}

const resetPassword = (req, res, next) => {
  const token = req.params.token;
  const newPassword = req.body
  if (!token) {
    const error = new Error("server need token");
    error.code = 401;
    return next(error);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) {
      helpers.response(res, "Access denied", null, 401);
    }
    const email = decoded.email;
    userModels
      .ResetPasswordUser(email, newPassword)
      .then(() => {
        // alert(`Activation Sucessful`)
        console.log("Sucessful");
        helpers.response(res, "Success set new password", email, 200);
        // res.redirect(`${process.env.FRONT_URL}/v1/login/`);
      })

      .catch((error) => {
        helpers.response(res, "failed set new password", null, 401);
      });
  });
};
module.exports = {
  register,
  activation,
  login,
  setPin,
  forgotPassword,
  resetPassword,
};

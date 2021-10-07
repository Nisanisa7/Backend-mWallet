<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/dwinovic/Backend-mWallet">
    <img src="https://res.cloudinary.com/dnv-images/image/upload/v1631717683/Zwallet/ewallet_1_tzfymc.svg" alt="Logo" width="180" height="180">
  </a>

  <h3 align="center">Backend Application for Zwallet</h3>

  <p align="center">
    Back-end application or server in charge  of supplying  <br/> Zwallet web application data needs through Rest API technology.<br/>
    <br />
    <a href="https://github.com/dwinovic/Backend-mWallet"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://zwallet-matrix.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/dwinovic/Backend-mWallet">Report Bug</a>
    ·
    <a href="https://github.com/dwinovic/Backend-mWallet">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
        <ol>
            <li>
                <a href="#build-with">Build With</a>
            </li>
        </ol>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ol>
        <li>
          <a href="#installation">Installation</a>
        </li>
        <li>
          <a href="#prerequisites">Prerequisites</a>
        </li>
        <li>
          <a href="#related-project">Related Project</a>
        </li>
      </ol>
    </li>
    <li><a href="#zwallet-api-documentation">Zwallet API Documentation</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

## About The Project

<b>Zwallet</b> is a digital wallet apps that will really helps you to manage your e-money. Using Zwallet you’ll be allowed to do some transaction with only a few taps on your screen. In other words, with this apps you can easily save money, transfer it to other, and also top up some moneys and add them to your Zwallet’s balance.

### Build With
* [Express Js](https://expressjs.com/)
* [Node Js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)
* [JWT](https://jwt.io/)
* [Nodemailer](https://nodemailer.com/about/)
* [redis](https://redis.io/)
* [Xendit](https://www.xendit.co/)

## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* [Node Js](https://nodejs.org/en/download/)
* [MySQL](https://www.mysql.com/downloads/)
* [Postman](https://www.postman.com/downloads/)

### Installation
    
1. Clone These 2 Repos (Backend and Frontend)
```sh
https://github.com/dwinovic/Backend-mWallet
```
2. Go To Folder Repo
```sh
cd Backend-mWallet
```
3. Install Module
```sh
npm install
```
4. Make a new database and import [zwallet-sample.sql](https://drive.google.com/file/d/1WwWDDorXfAUq7dJIgupJ_MKBlELKkMc4/view?usp=sharing)
5. Add .env file at root folder project, and add following
```sh
DB_NAME=[DB_NAME]
DB_HOST = [DB_HOST]
DB_USER = [DB_USER]
DB_PASS = [DB_PASS]
PORT =4000
ACCESS_TOKEN_SECRET=[RANDOM_ACCESS_TOKEN_SECRET]
ZWALLET_EMAIL=[YOUR_SMTP_EMAIL]
ZWALLET_PASS=[EMAIL_PASS]
BASE_URL=[URL_LOCAL_BACKEND]
FRONT_URL=[URL_LOCAL_FRONTEND]
```
6. Starting application
```sh
npm run dev
```
7. Testing with Postman
    * [Zwallet API Documentation](https://documenter.getpostman.com/view/13709692/Tzz4RfES#acbbeee4-4be5-4a99-8185-24f2c3ea10c6)

### Related Project
* [`Frontend-Zwallet`](https://github.com/Nisanisa7/zwallet)
* [`Backend-Zwallet`](https://github.com/Nisanisa7/Backend-mWallet)

## Zwallet API Documentation

* [Zwallet API Documentation](https://documenter.getpostman.com/view/13709692/Tzz4RfES#acbbeee4-4be5-4a99-8185-24f2c3ea10c6)

## Contributors

<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/farrelvarian">
          <img width="100" src="https://avatars.githubusercontent.com/u/42968960?v=4" alt="Farrel Varian Eka Putra"><br/>
          <sub><b>Farrel Varian Eka Putra</b></sub> <br/>
          <sub>Full Stack Web Developer</sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/19damah23">
          <img width="100" src="https://media-exp1.licdn.com/dms/image/C5603AQG98I3VT9Wc5g/profile-displayphoto-shrink_800_800/0/1630549889980?e=1637193600&v=beta&t=EL-sEsGitFv9TeZofjNhs7fVZa0RxLSwxhyqhF3Xt8A" alt="Muchamad Agus Hermawan"><br/>
          <sub><b>Muchamad Agus Hermawan</b></sub> <br/>
          <sub>Back End Developer</sub>
        </a>
      </td>
            <td align="center">
        <a href="https://github.com/CandaMuammal">
          <img width="100" src="https://avatars.githubusercontent.com/u/79079927?v=4" alt="Alfatah Hidayat"><br/>
          <sub><b>Canda Muammal</b></sub> <br/>
          <sub>Back End Developer</sub>
        </a>
      </td>
    </tr>
  </table>
</center>

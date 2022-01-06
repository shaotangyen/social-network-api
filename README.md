[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Social Network API

This is an API for a social network web application where users can share their thoughts, reac to friends' thoughts, and create a friend list. Functions including adding/updating/removing thoughts, reactions and user info.

## Table of Contents
1. [Setup](#setup)
2. [Design](#design)
3. [Links](#links)
4. [License](#license)

<a name="setup"></a>

## Setup

You will need to use 'npm install' to install node.js. Then use 'npm i express' to install express. Then use 'npm start' to start the API server.

<a name="design"></a>

## Design

* The API uses Express.js for routing, MongoDB database and Mongoose ODM
* There are controllers that stores all CURD methods including Create, Get, Update and Delete. You can find them in the 'controllers' folder.
* There are models for User, Reaction, Thoughts in the 'models' folder where they use mongoose Schema to define 
* There are api routes in the 'routes' folder where they specify which route to go
* The index.js in the outter folder and the connection.js connects every part together

<a name="links"></a>

## Demo and Links

Check out the [demo video here](https://drive.google.com/file/d/1XkGM2AT0HR_L1C5SvXgHNixrdwa626Bi/view?usp=sharing) (set to 1080p for better viewing experience)

Or go to the Github page for the full code: [Link](https://github.com/shaotangyen/social-network-api).

<a name="license"></a>

## License

Copyright 2021 Shao Yen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
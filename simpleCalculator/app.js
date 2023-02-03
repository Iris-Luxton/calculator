const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const router = require ("./router");
const cors = require("cors");
app.use(cors());


// contains all the routing logic for our calculator application.
// const calculatorRouter = require('./route');
// const path = require('path');

// parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// allows to parse JSON requests.
// the code app.use(bodyParser.json()); is similar to app.use(express.json());
//we are using this as middle wares

// serve static files such as images, CSS files, and JavaScript files.
// __dirname variable is a global variable in Node.js that contains the full path of the current directory, 
// to specify the path to the folder where your files are located.
// app.use(express.static(path.join(__dirname, 'calc.html')));

// sets up the view engine to ejs (Embedded JavaScript templates) if you don't have html set up before
// When building web applications with Node.js and Express.js, 
// you will need a template engine to render views and generate HTML on the server side. 
// A template engine allows you to define the structure of your HTML and insert dynamic data into it. 
// One popular template engine for Express.js is EJS (Embedded JavaScript Templates).
// app.set('view engine', 'ejs');

// app.set('view engine', 'html');

// assigns the calculator router to handle all requests starting with /calculator
// app.use('/calculator', calculatorRouter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/view.html');
});

app.use("/calculator", router)

// app.post('/', (req, res) => {
//   const n1=Number(req.body.num1)
//   const n2=Number(req.body.num2)
//   const add=n1+n2;
//   res.send('the value is ' + add)
// })
app.listen(3000, (res) => {
  console.log('Server started on port 3000');
});
// Note that the code app.use(express.urlencoded({ extended: false })); can be replaced with 
// app.use(bodyParser.urlencoded({ extended: false })); when using the body-parser middleware package.
// body-parser is a middleware package that parses incoming request bodies.
// It provides various methods to handle different types of requests such as json() and urlencoded(). 
// The urlencoded() method is used to parse the urlencoded data and make it available in the request object as req.body.
// You need to install the body-parser package, by running npm install body-parser and import it in your index.js file 
// with const bodyParser = require('body-parser');


// CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers 
// that blocks web pages from making requests to a different domain than the one that served the web page by default
// If you are building a web application that is expected to make requests to a server on a different domain, 
// you will need to enable CORS by using the cors middleware. 
// To enable CORS, you need to install the cors package by running npm install cors then importing it in your index.js file with 

//const cors = require('cors'); 
//Once installed you can use 
//app.use(cors()); 
//in your index.js file, this will enable CORS for your entire application.

// However, if your application is only making requests to a server on the same domain, you do not need to use the cors middleware. 
// app.post("/add", function (req, res) {
//   let a = parseInt(req.body.a);
//   let b = parseInt(req.body.b);
//   let ans = a + b;
//   res.send(JSON.stringify({ ans: ans }));
// });

// app.post("/div", function (req, res) {
//   let a = parseInt(req.body.a);
//   let b = parseInt(req.body.b);
//   let ans = a / b;
//   res.send(JSON.stringify({ ans: ans }));
// });

// app.post("/sub", function (req, res) {
//   let a = parseInt(req.body.a);
//   let b = parseInt(req.body.b);
//   let ans = a - b;
//   res.send(JSON.stringify({ ans: ans }));
// });

// app.post("/mul", function (req, res) {
//   let a = parseInt(req.body.a);
//   let b = parseInt(req.body.b);
//   let ans = a * b;
//   res.send(JSON.stringify({ ans: ans }));
// });



//const http = require('http');
//const fs = require('fs');
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.headers, req.method);
//     // process.exit();
//     const url = req.url;
//     const method = req.method;

//     if (url === '/' && method === 'POST') {
//         res.write('<html>');
//         res.write('<head><title>Message<title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message" /></form></body>');
//         res.write('</html>');
//         res.end();
//     }
//     if (url === '/message' && method === "POST") {
//         const body = [];
//         req.on('data', (chunk) => {
//             console.log("🚀 ~ file: app.js ~ line 20 ~ req.on ~ chunk", chunk)
//             body.push(chunk);
//         });
//         req.on('end', (chunk) => {
//             const parsedBody = Buffer.concat(body).toString();
//             console.log("🚀 ~ file: app.js ~ line 25 ~ req.on ~ parsedBody", parsedBody)

//         })


//         fs.writeFileSync('uploads/message.txt', 'DUMMY');
//         res.statusCode = 302;
//         return res.end();
//     }

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>')
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
//     res.write('</html>');
//     res.end();
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptons = {
    origin: "http://localhost:8080/"
};
app.use(cors(corsOptons));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Turing.com" });
});
const Sequelize = require("sequelize");
const conn = new Sequelize("test", "root",
    "activelap13", {
    host: "localhost",
    dialect: "mysql",
    operationsAliases: false,
    // pool: {
    //     max: dbConfig.pool.max,
    //     min: dbConfig.pool.min,
    //     acquire: dbConfig.pool.acquire,
    //     idle: dbConfig.pool.idle
    // }
});
console.log(conn);
// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});

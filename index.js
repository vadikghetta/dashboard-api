import express from "express";

const port = 8000;
const app = express();

app.get("/hello", (req, res) =>
{
    res.send("Привет")
});

app.listen(port, () =>
{
    console.log(`Server start on http://localhost:${port}`)
});




// import http from "http";

// const host = "127.0.0.1";
// const port = 8000;


// const server = http.createServer((req, res) =>
// {
//     switch (req.method) {
//         case "GET": {
//             switch (req.url) {
//                 case "/hello": {
//                     res.statusCode = 200;
//                     res.setHeader("Content-type", "text/plain");
//                     res.end("Hello World")
//                 }
//             }
//         }
//     }
//     req.url
// })


// server.listen(port, host, () =>
// {
//     console.log(`Server start ${host}:${port}`)
// });
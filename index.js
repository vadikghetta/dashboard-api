import express from "express";

const port = 8000;
const app = express();



app.all("/hello", (req, res, next) =>
{
    console.log("Hello")
    next();
});
const callback = (req, res, next) =>
{
    console.log("CB1")
    next()
}
const callback2 = (req, res, next) =>
{
    console.log("CB2")
    next()
}
app.get("/hello", [callback, callback2], (req, res) =>
{
    res.send("Привет")
});
app.route('/book')
    .get((req, res) =>
    {
        res.send('Get a random book')
    })
    .post((req, res) =>
    {
        res.send('Add a book')
    })
    .put((req, res) =>
    {
        res.send('Update the book')
    })

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
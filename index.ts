
import express, { NextFunction , Response, Request} from "express";
import { userRouter } from "./users/users";


const port = 8000;
const app = express();

app.use((req, res, next) =>
{
    console.log("Time", Date.now())
    next()
})
app.get("/", (req, res) =>
{
    res.send("Hello")
});
app.get("/hello", (req, res) =>
{
    throw new Error("Error")
});
app.use((err : Error, req : Request, res : Response, next : NextFunction) =>
{
    res.status(500).send(err.message)
})

app.use("/users", userRouter)
app.listen(port, () =>
{
    console.log(`Server start on http://localhost:${port}`)
});

console.log("hello")
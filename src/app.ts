import express , {Express} from "express";
import { userRouter } from "./users/users";
import {Server} from "node:http";

export class App {
    app : Express;
    port : number;
    server : Server

    constructor() {
        this.app = express();
        this.port = 8000;
    }

    useRoutes () {
        this.app.use("/users" , userRouter)
    }
    public async init(){
        this.useRoutes();
        this.server = this.app.listen(this.port);
        console.log(`Server start on http://localhost:${this.port}`)
    }
 }
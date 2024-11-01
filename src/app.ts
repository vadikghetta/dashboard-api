import express , {Express} from "express";
import {Server} from "node:http";
import LoggerService from "./logger/logger.service";
import { UserController } from "./users/user.controller";
import { ExeptionFilter } from "./errors/exeption.filter";
import { ILoogerService } from "./logger/logger.interface";

export class App {
    app : Express;
    port : number;
    server : Server
    logger : ILoogerService
    userController : UserController
    exeptionFilter : ExeptionFilter

    constructor(logger : ILoogerService, userController : UserController, exeptionFilter : ExeptionFilter) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userController = userController;
        this.exeptionFilter = exeptionFilter;
    }

    useRoutes () {
        this.app.use("/users" , this.userController.router)
    }
    useExeptionFilters () {
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
    }

    public async init(){
        this.useRoutes();
        this.useExeptionFilters()
        this.server = this.app.listen(this.port);
        this.logger.log(`Server start on http://localhost:${this.port}`)
    }
 }
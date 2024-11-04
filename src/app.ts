import express , {Express} from "express";
import {Server} from "node:http";
import { UserController } from "./users/user.controller";
import { ExeptionFilter } from "./errors/exeption.filter";
import { ILoogerService } from "./logger/logger.interface";
import { inject, injectable } from "inversify";
import { TYPES } from "./types";
import "reflect-metadata";

@injectable()
export class App {
    app : Express;
    port : number;
    server : Server

    constructor(
       @inject(TYPES.ILoggerService) private logger : ILoogerService, 
       @inject(TYPES.UserController) private userController : UserController, 
       @inject (TYPES.ExeptionFilter) private exeptionFilter : ExeptionFilter) {
        this.app = express();
        this.port = 8000;
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
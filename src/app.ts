import express, {Express} from "express";
import {Server} from "node:http";
import { UserController } from "./users/user.controller";
import { ExeptionFilter } from "./errors/exeption.filter";
import { ILoogerService } from "./logger/logger.interface";
import { inject, injectable } from "inversify";
import { TYPES } from "./types";
import { json } from "body-parser";
import "reflect-metadata";

@injectable()
export class App {
	app : Express;
	port : number;
	server : Server;

	constructor(
       @inject(TYPES.ILoggerService) private logger : ILoogerService, 
       @inject(TYPES.UserController) private userController : UserController, 
       @inject (TYPES.ExeptionFilter) private exeptionFilter : ExeptionFilter) {
		this.app = express();
		this.port = 8000;
	}

	useRoutes () : void {
		this.app.use("/users", this.userController.router);
	}
	useExeptionFilters (): void {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
	}
	useMiddleware() : void {
		this.app.use(json());
	}

	public async init() : Promise<void>{
		this.useMiddleware();
		this.useRoutes();
		this.useExeptionFilters();
		this.server = this.app.listen(this.port);
		this.logger.log(`Server start on http://localhost:${this.port}`);
	}
}
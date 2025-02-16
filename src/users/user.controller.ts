/* eslint-disable @typescript-eslint/no-unused-vars */
import {NextFunction, Request, Response} from "express";
import { BaseController } from "../common/base.controller";
// import { HttpError } from "../errors/http-error";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { ILoogerService } from "../logger/logger.interface";
import "reflect-metadata";
import { IUserController } from "./users.controller.interface";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserRegisterDto } from "./dto/user-register.dto";
import { User } from "./user.entity";


@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILoggerService) private loggerService : ILoogerService) {
		super(loggerService);
		this.bindRoutes([
			{path : "/register", method : "post", func : this.register},
			{path : "/login", method : "post", func : this.login}
		]);
	}
	login(req : Request<unknown, unknown, UserLoginDto>, res : Response, next : NextFunction) : void {

		console.log(req.body);
		this.ok(res, "login");
	}
	async register({body} : Request<unknown, unknown, UserRegisterDto>, res : Response, next : NextFunction) : Promise<void> {
		const newUser = new User(body.email, body.name);
		await newUser.setPassword(body.password);
		this.ok(res, "register");
	}

}
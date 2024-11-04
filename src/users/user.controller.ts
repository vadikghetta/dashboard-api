import {NextFunction, Request, Response} from "express";
import { BaseController } from "../common/base.controller";
// import { HttpError } from "../errors/http-error";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { ILoogerService } from "../logger/logger.interface";
import "reflect-metadata";


@injectable()
export class UserController extends BaseController {
    constructor(@inject(TYPES.ILoggerService) private loggerService : ILoogerService) {
        super(loggerService)
        this.bindRoutes([
            {path : "/register" , method : "post" , func : this.register},
            {path : "/login" , method : "post" , func : this.login},

        ])
    }
    login(req : Request, res : Response, next : NextFunction) {
        this.ok(res, "login")
        // next(new HttpError(401 , "no auth", "login"))
    }
    register(req : Request, res : Response, next : NextFunction) {
        this.ok(res, "register")
    }

}
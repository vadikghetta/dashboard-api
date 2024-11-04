import { Logger, ILogObj } from "tslog";
import { ILoogerService } from "./logger.interface";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class LoggerService implements ILoogerService {
    public logger : Logger<ILogObj>;
    constructor () {
        this.logger = new Logger({});
    }
    log(...args : unknown[]) {
        this.logger.info(...args)
    }
    error(...args : unknown[]) {
        this.logger.error(...args)
    }
    warn(...args : unknown[]) {
        this.logger.warn(...args)
    }
}
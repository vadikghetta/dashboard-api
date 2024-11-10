import { Container, ContainerModule, interfaces } from "inversify";
import { App } from "./app";
import { ExeptionFilter } from "./errors/exeption.filter";
import LoggerService from "./logger/logger.service";
import { UserController } from "./users/user.controller";
import { ILoogerService } from "./logger/logger.interface";
import { TYPES } from "./types";
import { IExeptionFilter } from "./errors/exeption.filter.interface";




export const appBindings = new ContainerModule((bind : interfaces.Bind) => {
	bind<ILoogerService>(TYPES.ILoggerService).to(LoggerService);
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
	bind<UserController>(TYPES.UserController).to(UserController);
	bind<App>(TYPES.Application).to(App);
});

function bootstrap () {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();

	return {app, appContainer};
}


export const {app , appContainer} = bootstrap();
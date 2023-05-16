import { Logger, ValidationPipe, VersioningType } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import cookieParser from "cookie-parser";
import helmet from "helmet";
import path from "path";
import { WinstonModule } from 'nest-winston';

import { AppModule } from "./app.module";
import { Swagger, winstonTransportConsoleOption, winstonTransportRotateFileOption } from "@/config";
import { printBootBanner } from "@/common/utils"

class ExpressServer {
        app: NestExpressApplication;
        config: ConfigService;
        swagger: Swagger;

        constructor() {
        }

        private buildPipe() {
                this.app.useGlobalPipes(
                        new ValidationPipe({
                                whitelist: true,
                                forbidNonWhitelisted: true,
                                transform: true,
                        }),
                );
        }

        private buileMiddleware() {
                this.app.use(helmet());
                this.app.enableCors();
                this.app.use(cookieParser());
                this.app.useStaticAssets(path.join(__dirname, "..", "public"));
                this.app.setBaseViewsDir(path.join(__dirname, "..", "views"));
                this.app.setViewEngine("hbs");
        }

        private buildDocument() {
                this.swagger.pageSetup();
        }

        public async setup() {
                this.app = await NestFactory.create<NestExpressApplication>(AppModule, {
                        logger: WinstonModule.createLogger({
                                transports: [
                                        winstonTransportConsoleOption,
                                        winstonTransportRotateFileOption({ type: "info" }),
                                        winstonTransportRotateFileOption({ type: "error" })

                                ],
                        })
                });
                this.app.enableVersioning({ type: VersioningType.URI, prefix: "v", defaultVersion: '1' });
                this.app.setGlobalPrefix("api");

                this.config = this.app.get(ConfigService);
                this.swagger = new Swagger(this.app);

                this.buileMiddleware();
                this.buildPipe();
                this.buildDocument();
        }

        public async start() {
                await this.app.listen(this.config.get("port"), () => {
                        Logger.debug(printBootBanner());
                        Logger.debug(`NODE_ENV ${this.config.get("environment")}`);
                        Logger.debug(
                                `server running on http://localhost:${this.config.get("port")}`,
                        );
                        Logger.debug(
                                `swagger running on http://localhost:${this.config.get(
                                        "port",
                                )}/docs`,
                        );
                });
        }
}

async function main() {
        const expressServer = new ExpressServer();
        await expressServer.setup();
        await expressServer.start();
}

main();
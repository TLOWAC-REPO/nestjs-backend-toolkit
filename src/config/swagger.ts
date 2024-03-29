import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export class Swagger {
        app: INestApplication;
        document: OpenAPIObject;
        logger: Logger = new Logger(Swagger.name);

        constructor(app: INestApplication) {
                this.app = app;
                this.build();
        }

        private build() {
                const options = new DocumentBuilder()
                        .setTitle('NESTJS Sample Project API')
                        .setDescription('This is a sample project')
                        .setVersion('1.0.0')
                        .addTag('Nestjs Swagger UI')
                        .addBearerAuth(
                                {
                                        type: 'http',
                                        scheme: 'bearer',
                                        bearerFormat: 'JWT',
                                },
                                'access-token',
                        )
                        .build();

                const document = SwaggerModule.createDocument(this.app, options);
                this.document = document;
        }

        pageSetup() {
                SwaggerModule.setup('/docs', this.app, this.document);
                this.logger.log('Swagger Setup');
        }
}

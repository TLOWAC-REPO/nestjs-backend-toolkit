import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from './configuration';
import { configurationSchema } from './configurationSchema';

@Module({
        imports: [
                ConfigModule.forRoot({
                        isGlobal: true,
                        load: [configuration],
                        envFilePath: `.env.${process.env.NODE_ENV}`,
                        validationSchema: configurationSchema,
                }),
        ],
        controllers: [],
        providers: [],
})
export class CustomConfigModule {}

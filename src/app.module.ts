import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigModule, PrismaModule } from '@/provider';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '@/common/interceptor';


@Module({
        imports: [CustomConfigModule, PrismaModule],
        controllers: [AppController],
        providers: [AppService,
                {
                        provide: APP_INTERCEPTOR,
                        useClass: LoggingInterceptor
                }
        ],
})
export class AppModule { }
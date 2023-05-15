import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomConfigModule, PrismaModule } from '@/provider';


@Module({
        imports: [CustomConfigModule, PrismaModule],
        controllers: [AppController],
        providers: [AppService],
})
export class AppModule { }
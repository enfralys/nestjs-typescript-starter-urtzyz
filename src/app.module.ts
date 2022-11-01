import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { databaseEntities } from './database.provider';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { ChatGateway } from './chat/chat.gateway';

@Module({
      imports: [DatabaseModule, DoctorsModule, ProductsModule, AuthModule, MailModule],
      controllers: [AppController],
      providers: [...databaseEntities, AppService, ChatGateway],
})
export class AppModule { }

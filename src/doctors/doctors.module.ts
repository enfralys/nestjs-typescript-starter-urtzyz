/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MailModule } from 'src/mail/mail.module';
import { databaseEntities } from '../database.provider';
import { DatabaseModule } from '../database/database.module';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';

@Module({
      imports: [DatabaseModule, MailModule],
      exports: [DoctorsService],
      controllers: [DoctorsController],
      providers: [...databaseEntities, DoctorsService],
})
export class DoctorsModule { }

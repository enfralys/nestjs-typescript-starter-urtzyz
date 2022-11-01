import { Module } from '@nestjs/common';
import { databaseEntities } from 'src/database.provider';
import { DatabaseModule } from 'src/database/database.module';
import { DoctorsModule } from 'src/doctors/doctors.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
      imports: [DatabaseModule, DoctorsModule],
      controllers: [AuthController],
      providers: [...databaseEntities, AuthService],
})
export class AuthModule { }

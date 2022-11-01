/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserLoginDTO {
      @IsString()
      @IsEmail()
      email: string;
      @IsString()
      password: string;
      @IsNumber()
      @IsNotEmpty()
      typeUser: number;

}
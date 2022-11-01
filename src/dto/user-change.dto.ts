/* eslint-disable prettier/prettier */
import { IsEmail, IsNumber, IsString } from "class-validator";

export class UserChangeDTO {
      @IsString()
      code: string;
      @IsString()
      password: string;
      @IsNumber()
      typeUser: number;
}
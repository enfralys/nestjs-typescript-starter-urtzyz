import { IsNumber, IsString } from "class-validator";

export class changePasswordDTO {
      @IsString()
      email: string;
      @IsNumber()
      typeUser: number;
}
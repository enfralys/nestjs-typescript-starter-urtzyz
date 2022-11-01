import { Expose } from "class-transformer";


export class RegisterDTO {
      @Expose()
      email: string;
      @Expose()
      password: string;
      @Expose()
      typeUser: number;
      @Expose()
      role: string;
}
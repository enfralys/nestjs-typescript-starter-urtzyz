/* eslint-disable prettier/prettier */
import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { DoctorsService } from 'src/doctors/doctors.service';
import { changePasswordDTO } from 'src/dto/changePassword.dto';
import { DoctorsDTO } from 'src/dto/doctors.dto';
import { RegisterDTO } from 'src/dto/register.dto';
import { UserChangeDTO } from 'src/dto/user-change.dto';
import { UserLoginDTO } from 'src/dto/user-login.dto';

@Controller('auth')
export class AuthController {
      constructor(private readonly doctorService: DoctorsService) { }

      @Post('/login')
      async login(@Body() user: UserLoginDTO) {
            switch (user.typeUser) {
                  case 1:
                        const doctor = await this.doctorService.login(
                              user.email,
                              user.password,
                        );

                        if (!doctor) throw new NotFoundException('User not found');
                        return doctor ?? { error: 'Invalid credentials' };

                  case 0:
                        const logUser = await this.doctorService.loginUser(
                              user.email,
                              user.password,
                        );

                        if (!logUser) throw new NotFoundException('User not found');
                        return logUser ?? { error: 'Invalid credentials' };

                  case 2:
                        const prod = await this.doctorService.loginProdAndSer(
                              user.email,
                              user.password,
                        );
                        if (!prod) throw new NotFoundException('User not found');
                        return prod ?? { error: 'Invalid credentials' };
                  default:
                        break;
            }


            const doctor = await this.doctorService.login(
                  user.email,
                  user.password,
            );

            if (!doctor) throw new NotFoundException('User not found');
            return doctor ?? { error: 'Invalid credentials' };
      }

      @Post('/register')
      async register(@Body() user: RegisterDTO) {

            switch (user.typeUser) {
                  case 1:
                        const doctor = await this.doctorService.register(
                              user.email, user.password
                        );
                        return doctor;

                  case 0:
                        const userReg = await this.doctorService.registerUser(
                              user.email, user.password
                        );
                        return userReg;
            }


      }
      @Post('/updatePassword')
      async updatePassword(@Body() user: UserChangeDTO) {
            try {
                  const doctor = await this.doctorService.updatePassword(
                        user
                  );
                  return doctor;
            } catch (e) {
                  throw new NotFoundException(e.message);
            }
      }

      @Post('/requestUpdatePassword')
      async requestUpdatePassword(@Body() user: changePasswordDTO) {
            try {
                  const response = await this.doctorService.requestUpdatePasswordUser(
                        user,
                  );
                  return response;
            } catch (e) {
                  throw new NotFoundException(e.message);
            }
      }



}

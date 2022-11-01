/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ProductosServicios } from 'src/database/entities/ProductosServicios';
import { User } from 'src/database/entities/User';
import { changePasswordDTO } from 'src/dto/changePassword.dto';
import { DoctorsDTO } from 'src/dto/doctors.dto';
import { UserChangeDTO } from 'src/dto/user-change.dto';
import { MailService } from 'src/mail/mail.service';
import { In, Repository } from 'typeorm';
import { Doctors } from '../database/entities/Doctors';
import { Metadata } from '../database/entities/Metadata';
import {
      paginate,
      Pagination,
      IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Especialidades } from 'src/database/entities/Especialidades';


@Injectable()
export class DoctorsService {


      constructor(
            @Inject('DOCTOR_REPOSITORY')
            private doctorRepository: Repository<Doctors>,

            @Inject('DOCTOR_METADATA_REPOSITORY')
            private doctorMetadataRepository: Repository<Metadata>,
            @Inject('USER_REPOSITORY')
            private userRepository: Repository<User>,
            @Inject('PRODUCT_REPOSITORY')
            private prodAndServicesRepository: Repository<ProductosServicios>,
            @Inject('ESPECIALTY_REPOSITORY')
            private specialtyRepository: Repository<Especialidades>,
            private readonly emailService: MailService
      ) { }

      async findAll(): Promise<Doctors[]> {
            return this.doctorRepository.find();
      }

      async paginate(options: IPaginationOptions): Promise<Pagination<Doctors>> {
            return paginate<Doctors>(this.doctorRepository, options);
      }

      async find(id: number): Promise<Doctors> {
            return this.doctorRepository.findOneBy({ id });
      }

      async getEspecialties() {
            const especialties = await this.specialtyRepository.find();
            return especialties;
      }

      async login(email: string, password: string) {
            const doctor = await
                  this.doctorRepository.findOneBy({
                        email,
                        pass: password,
                  });
            return doctor;
      }

      async loginUser(email: string, password: string) {
            const user = await this.userRepository.findOneBy({
                  email,
                  password
            });
            return user;
      }

      async loginProdAndSer(email: string, pass: string) {
            const prodAndSer = await this.prodAndServicesRepository.findOneBy({
                  email,
                  pass
            });
            return prodAndSer;

      }

      async requestUpdatePasswordUser(user: changePasswordDTO) {
            let code = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            code = code.substring(0, 6);

            switch (user.typeUser) {
                  case 1:
                        const doctor = await this.doctorRepository.findOneBy({ email: user.email })
                        if (!doctor) {
                              return true;
                        }
                        await this.doctorRepository.save({
                              id: doctor.id,
                              codeemail: code,
                        });
                        break;

                  case 0:

                        const userPa = await this.userRepository.findOneBy({ email: user.email })
                        if (!userPa) {
                              return true;
                        }
                        await this.userRepository.save({
                              id: userPa.id,
                              codeemail: code,
                        });
                  default:
                        break;
            }






            await this.emailService.forgotPassword(user.email, code);


            return true;
      }
      async updatePassword(user: UserChangeDTO) {
            switch (user.typeUser) {
                  case 0:
                        const userPa = await this.userRepository.findOneBy({ codeemail: user.code })
                        console.log(userPa);
                        if (!userPa) {
                              throw new Error('Invalid Code');
                        }

                        await this.userRepository.save({
                              id: userPa.id,
                              password: user.password,
                              codeemail: null
                        });
                        return true
                              ;

                  case 1:
                        const doctor = await this.doctorRepository.findOneBy({ codeemail: user.code })
                        if (!doctor) {
                              throw new Error('Invalid Code');
                        }
                        await this.doctorRepository.save({
                              id: doctor.id,
                              codeemail: "",
                              pass: user.password,
                        });
                        return true
                              ;

                  default:
                        break;
            }


      }

      async register(email: string, pass: string) {
            if (await this.doctorRepository.findOneBy({ email: email })) {
                  throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
            }
            const newDoctor = await this.doctorRepository.save({ email, pass });
            return newDoctor;
      }


      async registerUser(email: string, password: string) {
            if (await this.userRepository.findOneBy({ email: email })) {
                  throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
            }
            const user = await this.userRepository.save({ email, password });
            return user;
      }


      async getMetadata(doctorId: number) {
            const metadata = await this.doctorMetadataRepository.findOneBy({
                  doctorId: String(doctorId),
            });
            return metadata;
      }
}

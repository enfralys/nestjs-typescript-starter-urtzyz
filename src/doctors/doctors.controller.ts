/* eslint-disable prettier/prettier */
import { Controller, DefaultValuePipe, Get, ParseIntPipe, Query } from '@nestjs/common';
import { DoctorsDTO } from '../dto/doctors.dto';
import { DoctorsService } from './doctors.service';
import { plainToInstance } from 'class-transformer';
import { Metadata } from '../database/entities/Metadata';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Doctors } from 'src/database/entities/Doctors';
import { PaginateDoctorsDTO } from 'src/dto/paginatedDoctor.dto';

@Controller('doctors')
export class DoctorsController {
      constructor(private readonly doctorsService: DoctorsService) { }

      @Get('/')
      async findAll(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
            @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,) {
            limit = limit > 100 ? 100 : limit;
            const paginate = this.doctorsService.paginate({
                  page,
                  limit,
                  route: 'http://cats.com/cats',
            });

            return plainToInstance(PaginateDoctorsDTO, paginate, {
                  excludeExtraneousValues: true,
            });
      }


      @Get('/docdetail:id')
      async find(id: number) {
            const doctor = await this.doctorsService.find(id);
            return plainToInstance(DoctorsDTO, doctor, {
                  excludeExtraneousValues: true,
            });
      }

      @Get('/metadata/:id')
      async findMetadata(id: number) {
            const doctor = await this.doctorsService.getMetadata(id);

            const withoutNull: Partial<Metadata> = {};

            // Remove nulls
            Object.keys(doctor).forEach((key) => {
                  if (doctor[key] !== null) {
                        withoutNull[key] = doctor[key];
                  }
            });

            return withoutNull;
      }

      @Get('/especialties')
      async getEspecialties() {
            const especialties = await this.doctorsService.getEspecialties();
            return especialties;
      }

}

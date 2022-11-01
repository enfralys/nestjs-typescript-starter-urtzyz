import { Expose, Type, } from 'class-transformer';
import { DoctorsDTO } from './doctors.dto';
export class PaginateDoctorsDTO {
      @Expose()
      @Type(() => DoctorsDTO)
      items: DoctorsDTO[];
      @Expose()
      meta: {
            itemCount: number;
            totalItems: number;
            itemsPerPage: number;
            totalPages: number;
            currentPage: number;
      };
}
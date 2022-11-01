import { Inject, Injectable } from '@nestjs/common';
import { Payments } from 'src/database/entities/Payments';
import { PaymentsDTO } from 'src/dto/payments.dto';
import { Repository } from 'typeorm';
import { ProductosServicios } from '../database/entities/ProductosServicios';

@Injectable()
export class ProductsService {
      constructor(
            @Inject('PRODUCT_REPOSITORY')
            private productRepository: Repository<ProductosServicios>,
            @Inject('PAYMENTS_REPOSITORY')
            private paymentRepository: Repository<Payments>,
      ) { }

      async findAll(): Promise<ProductosServicios[]> {
            return this.productRepository.find();
      }

      async find(id: number): Promise<ProductosServicios> {
            return this.productRepository.findOneBy({ id });
      }

      async savePayments(payment: PaymentsDTO): Promise<Payments> {
            console.log(payment);
            return this.paymentRepository.save(payment);
      }
}

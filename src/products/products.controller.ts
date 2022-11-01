import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { plainToInstance } from 'class-transformer';
import { ProductDTO } from '../dto/product.dto';
import { PaymentsDTO } from 'src/dto/payments.dto';
@Controller('products')
export class ProductsController {
      constructor(private readonly productService: ProductsService) { }

      @Get('/')
      async findAll() {
            const products = await this.productService.findAll();
            return plainToInstance(ProductDTO, products, {
                  excludeExtraneousValues: true,
            });
      }

      @Get('/:id')
      async find(id: number) {
            const product = await this.productService.find(id);
            return plainToInstance(ProductDTO, product, {
                  excludeExtraneousValues: true,
            });
      }

      @Post('/payment')
      async savePayment(@Body() payment: PaymentsDTO) {
            return this.productService.savePayments(payment);
      }

}

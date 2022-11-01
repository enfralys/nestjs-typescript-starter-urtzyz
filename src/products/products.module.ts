import { Module } from '@nestjs/common';
import { databaseEntities } from '../database.provider';
import { DatabaseModule } from '../database/database.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [...databaseEntities, ProductsService],
})
export class ProductsModule {}

import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductSaleslocation } from '../productsSaleslocations/entities/productSaleslocation.entity';
import { ProductsSaleslocationsService } from '../productsSaleslocations/productsSaleslocations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductSaleslocation])],
  providers: [ProductsResolver, ProductsService, ProductsSaleslocationsService],
})
export class ProductsModule {}

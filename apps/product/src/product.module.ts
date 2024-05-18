import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { DatabaseModule, LoggerModule } from '@app/common';
import { ProductRepository } from './product.repository';
import { ProductDocument, ProductSchema } from './models/product.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      {
        name: ProductDocument.name,
        schema: ProductSchema,
      },
    ]),
    LoggerModule,
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}

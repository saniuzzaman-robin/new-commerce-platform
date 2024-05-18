import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  findAll() {
    return this.productRepository.find({});
  }

  findOne(_id: string) {
    return this.productRepository.findOne({ _id });
  }

  update(_id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.findOneAndUpdate(
      { _id },
      { $set: updateProductDto },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

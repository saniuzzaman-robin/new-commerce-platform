import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, collection: 'Products' })
export class ProductDocument extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  createdDate: Date;

  @Prop()
  createdBy: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductDocument);

import { Category, CategorySchema } from './category.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ProductDocument = mongoose.Model<Product & mongoose.Document>;

@Schema({ optimisticConcurrency: true })
export class Product extends Document {
  @Prop()
  public name?: string;

  @Prop({ type: [CategorySchema], indexes: [] })
  categories: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

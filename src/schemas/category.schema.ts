import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class Category extends Document {
  @Prop()
  public _id?: string;
  @Prop()
  public name?: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

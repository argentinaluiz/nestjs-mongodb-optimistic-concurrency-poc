import { Product, ProductDocument } from './schemas/product.schema';
import { NestFactory } from '@nestjs/core';
import { getModelToken } from '@nestjs/mongoose';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //await example1(app);
  await example2(app);

  await app.listen(3000);
}

async function example1(app: INestApplication) {
  const ProductSchema = app.get<ProductDocument>(getModelToken(Product.name));

  const firstProduct = await ProductSchema.findOne({
    _id: '6169826937146c2b0ac5a1e0',
  });

  firstProduct.name = 'firstProduct';

  const secondProduct = await ProductSchema.findOne({
    _id: '6169826937146c2b0ac5a1e0',
  });

  secondProduct.name = 'secondProduct';

  await secondProduct.save();

  await firstProduct.save();
}

async function example2(app: INestApplication) {
  const ProductSchema = app.get<ProductDocument>(getModelToken(Product.name));

  ProductSchema.findOne({
    _id: '6169826937146c2b0ac5a1e0',
  }).then((product) => {
    product.name = 'firstProduct';
    product.save();
  });

  ProductSchema.findOne({
    _id: '6169826937146c2b0ac5a1e0',
  }).then((product) => {
    product.name = 'secondProduct';
    product.save();
  });
}

bootstrap();

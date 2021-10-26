import { ProductSchema, ProductDocument } from './product.schema';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

describe('tests', () => {
  let app;
  let module: TestingModule;
  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://db:27017/app'),
        MongooseModule.forFeature([
          {
            name: 'Product',
            schema: ProductSchema,
          },
        ]),
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('product create', async () => {
    const Product = module.get<ProductDocument>(getModelToken('Product'));
    await Product.updateOne(
      {
        _id: '6169826937146c2b0ac5a1e0',
      },
      {
        $addToSet: {
          categories: { _id: '1', name: 'category 1' },
        },
      },
    );
    // await Product.create({
    //   name: 'teste',
    //   categories: [{ _id: '1', name: 'category 1' }],
    // });
  });
});

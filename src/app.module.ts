import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './product/products.module';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { MongooseModule } from '@nestjs/mongoose';

// , {  useNewUrlParser: true}
@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://localhost/products-nestjs_curso')],  //modelo del producto
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}

import { AppService } from './app.service';
import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';

import { CreateProductDTO } from './product/dto/product.dto'
@Controller('product')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/create')
  createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){
    //defino la instancia de la clase importada
    console.log(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'ruta post'
    });
  }
}
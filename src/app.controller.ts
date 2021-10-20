import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // LAS RUTAS - Rutas @Get() // Llama al Services
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

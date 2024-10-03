import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// recebe req http e repassa

@Controller('evogarage')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}

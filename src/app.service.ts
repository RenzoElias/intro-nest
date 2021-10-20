import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService { // IMPRIME
  getHello(): string {
    return 'Hello World!';
  }
}

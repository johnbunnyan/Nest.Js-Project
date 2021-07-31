import { Injectable } from '@nestjs/common';

//실질적인 비즈니스 로직 실행하는 곳
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }

   getHi():string {
     return "Hi NEST";
   }
}

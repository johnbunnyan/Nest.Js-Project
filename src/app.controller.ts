import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //컨트롤러는 그냥 어떤 url이랑 어떤 함수를 매칭하는 역할만!
  //실제 함수는 서비스에서! 

  @Get("/hello") 
  sayHello():string{  //띄워쓰면 안된다 데코레이터(@)는 꾸며주는 함수나 클래스랑 붙어있어야한다.
    return this.appService.getHi()
  }
}

//컨트롤러는 익스프레스에서의 라우터역할!

import { Controller, Get } from '@nestjs/common';

@Controller()//=== ''
export class AppController {

    @Get()
    //이름은 멋대로 짓는듯
    home(){
        return "Welcome to my Movie API"
    }

}

import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {

    @Get()
    //이름은 멋대로 짓는듯
    home(){
        return "Welcom to my Movie API"
    }

}

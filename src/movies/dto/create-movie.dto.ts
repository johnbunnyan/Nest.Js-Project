//DTO:Data Transfer Object
//코드를 더 간결하게 만들 수 있도록 해줌
//들어오는 쿼리에 대해 유효성 검사 하는데 사용

//TypeScript는 Nest서버를 실시간으로 보호해준다

import { IsNumber, IsOptional, IsString } from "class-validator"
//input 유효성검사

export class CreateMovieDto{

    @IsString()
    readonly title:string

    @IsNumber()
    readonly year:number

    @IsOptional()
    @IsString({each:true})
    readonly genres:string[]
}
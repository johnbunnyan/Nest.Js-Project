import { IsNumber, IsString } from "class-validator"
import { PartialType } from "@nestjs/mapped-types"

import { CreateMovieDto } from "./create-movie.dto"

//input 유효성검사

//부분타입
//npm i @nestjs/mapped-types          //베이스타입 요구
//기본적으로 Dto 서로 같음 다만 전부 필수사항 x
export class UpdaateMovieDto extends PartialType(CreateMovieDto) {


}
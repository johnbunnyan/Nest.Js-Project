//이 파일명이 컨벤션
//서비스로 보내고 받을 클래스(인터페이스) export할 파일(movie 자체)
//보통 여기서 실제 DB모델 만듦

export class Movie{
    id:number
    title:string
    year:number
    genres:string[]
}
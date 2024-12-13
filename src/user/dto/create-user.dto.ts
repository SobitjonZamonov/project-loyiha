import {
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
    Min,
  } from 'class-validator';
  export class CreateUserdto {
    @IsNotEmpty()
    @IsString()
    @Min(3)
    firstname: string;
  
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    lastname: string;
  
    @IsNotEmpty()
    @IsString()
    @IsPositive()
    email: string;

    @IsNotEmpty()
    @IsString()
    @IsPositive()
    password: string;
  }
  
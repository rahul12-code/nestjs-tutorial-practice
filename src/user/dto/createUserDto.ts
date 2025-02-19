import { IsEmail, IsNumberString, IsString } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';

export class createUserDto{

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}

export class UpdateUserDto extends PartialType(createUserDto){}

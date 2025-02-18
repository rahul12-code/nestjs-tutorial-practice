import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService){}

    @Get('all')
    findAll(){
        return 'All Users'
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.userService.findOne(id)
    }

    @Post()
    create(@Body() createUserDto:createUserDto){
        return this.userService.create(createUserDto)
    }

}

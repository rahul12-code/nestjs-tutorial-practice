import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { createUserDto, UpdateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { retry } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post()
  create(@Body() createUserDto: createUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id:number , @Body() UpdateUserDto:UpdateUserDto){
    return this.userService.update(id, UpdateUserDto)
  }

  @Delete(':id')
  delete(@Param('id') id:number){
    return this.userService.delete(id)
  }

}

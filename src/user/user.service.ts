import { Injectable } from '@nestjs/common';
import { createUserDto, UpdateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { retry } from 'rxjs';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly UserRepo:Repository<User>
    ){}

    async create(createUserDto: createUserDto){
        const newUser = this.UserRepo.create(createUserDto)
        return await this.UserRepo.save(newUser)
    }

    async findAll(){
        return await this.UserRepo.find()
    }

    async findOne(id: number){
        return await this.UserRepo.findOne({where : {id:id}})
    }

    async update(id: number, UpdateUserDto:UpdateUserDto){
        return await this.UserRepo.update(id, UpdateUserDto)
    }

    async delete(id: number){
        return await this.UserRepo.delete(id)
    }
}
 
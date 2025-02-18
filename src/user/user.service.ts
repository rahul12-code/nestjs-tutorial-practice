import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {

    findOne(id: string){
        return {id: id}
    }

    create(createUserDto: createUserDto){
        return 'the user is created'
    }
}
 
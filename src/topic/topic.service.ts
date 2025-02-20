import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Topic } from './entities/topic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TopicService {

  constructor(
    @InjectRepository(Topic)
    private readonly TopicRepo:Repository<Topic>
  ){}

  async create(createTopicDto: CreateTopicDto) {
    const newTopic = this.TopicRepo.create(createTopicDto)
    return await this.TopicRepo.save(newTopic)
  }

  async findAll() {
    return await this.TopicRepo.find()
  }

  async findOne(id: number) {
    return await this.TopicRepo.findOne({where:{id:id}})
  }

  async update(id: number, updateTopicDto: UpdateTopicDto) {
    return await this.TopicRepo.update(id, updateTopicDto) 
  }

  async remove(id: number) {
    return await this.TopicRepo.delete(id)
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Topic } from 'src/topic/entities/topic.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly CommentRepo: Repository<Comment>,

    @InjectRepository(User)
    private readonly UserRepo: Repository<User>,

    @InjectRepository(Topic)
    private readonly TopicRepo: Repository<Topic>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    
    const { text, userId, topicId } = createCommentDto;

    // Fetch user and topic objects based on the IDs
    const user = await this.UserRepo.findOne({ where: { id: userId } });
    console.log(user);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const topic = await this.TopicRepo.findOne({ where: { id: topicId } });
    console.log(topic);
    if (!topic) {
      throw new NotFoundException(`Topic with ID ${topicId} not found`);
    }

    const newComment = this.CommentRepo.create({text, user, topic})
    return await this.CommentRepo.save(newComment)
  }

  async findAll() {
    return await this.CommentRepo.find({
      relations:['user', 'topic'] // Fetches user and topic details
    })
  }

  async findOne(id: number) {
    return await this.CommentRepo.findOne({ where: { id: id } });
  }

  async getAllCommentsByuserId(id: number){
    return await this.CommentRepo.find({
      relations:['user'] , where:{user:{id:id}}
    })
  }

  async getAllCommentsByTopicId(id: number){
    return await this.CommentRepo.find({
      relations:['topic'] , where:{topic:{id:id}}
    })
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    
    const { text, userId, topicId } = updateCommentDto;

    // Fetch user and topic objects based on the IDs
    const user = await this.UserRepo.findOne({ where: { id: userId } });
    console.log(user);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const topic = await this.TopicRepo.findOne({ where: { id: topicId } });
    console.log(topic);
    if (!topic) {
      throw new NotFoundException(`Topic with ID ${topicId} not found`);
    }

    return await this.CommentRepo.update(id, {text, user, topic} )
  }

  async remove(id: number) {
    return await this.CommentRepo.delete(id) ;
  }
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Topic } from './topic.entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne((type) => User , (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne( (type) => Topic , (topic) => topic.comments )
  @JoinColumn({name:'topic_id'})
  topic:Topic;
}

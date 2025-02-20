import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "src/comment/entities/comment.entity";

@Entity('topics')
export class Topic{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    title: string;

    @Column()
    description: string

    @OneToMany( (type)=>Comment , (comments)=>comments.topic )
    comments:Comment[]

}
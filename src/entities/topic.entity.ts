import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";

@Entity('topics')
export class Topic{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    title: string;

    @Column()
    descritpion: string

    @OneToMany( (type)=>Comment , (comments)=>comments.topic )
    comments:Comment[]

}
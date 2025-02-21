import { IsNotEmpty, IsString } from "class-validator";

export class CreateCommentDto {

    @IsNotEmpty()
    @IsString()
    text: string;
  
    @IsNotEmpty()
    userId: number;
  
    @IsNotEmpty()
    topicId: number;
  }
  
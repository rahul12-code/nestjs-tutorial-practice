import { IsNotEmpty } from "class-validator";

export class CreateCommentDto {
    text: string;
  
    @IsNotEmpty()
    userId: number;
  
    @IsNotEmpty()
    topicId: number;
  }
  
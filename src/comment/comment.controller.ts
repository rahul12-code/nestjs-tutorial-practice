import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.commentService.findOne(+id);
  }

  @Get('/user/:id')
  getAllCommentsByUserId(@Param('id') id: number) {
    return this.commentService.getAllCommentsByuserId(+id);
  }

  @Get('/topic/:id')
  getAllCommentsByTopicId(@Param('id') id: number) {
    return this.commentService.getAllCommentsByTopicId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.commentService.remove(+id);
  }
}

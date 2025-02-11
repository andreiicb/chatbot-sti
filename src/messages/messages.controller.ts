import { Controller, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async handleMessage(@Body() message: any) {
    return this.messagesService.processMessage(message);
  }
}
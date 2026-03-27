import { Body, Controller, Post } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post('messages')
  sendMessage(@Body() body: { message?: string }) {
    const content = body.message?.trim() ?? '';
    if (!content) {
      return { text: 'Noi dung tin nhan khong duoc de trong.', products: [] };
    }

    return this.chatbotService.reply(content);
  }
}

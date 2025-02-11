import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { WebhookModule } from './webhook/webhook.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';

@Module({
  imports: [MessagesModule, WebhookModule, WhatsappModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
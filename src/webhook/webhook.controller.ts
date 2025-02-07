import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { WhatsappService } from '../whatsapp/whatsapp.service';


@Controller('webhook')
export class WebhookController {
  constructor(private readonly whatsappService: WhatsappService) {}

  // Endpoint para recibir mensajes y responder
  @Post()
  async handleMessage(@Body() body: any) {
    console.log('Webhook recibido:', body);

    if (body.object) {
      const entry = body.entry[0];
      const messaging = entry.messaging[0];
      const senderId = messaging.sender.id;
      const messageText = messaging.message.text;

      if (messageText) {
        // Responde al mensaje con el mismo texto
        await this.whatsappService.sendMessage(senderId, `¡Recibido: ${messageText}!`);
      }
    }

    return 'EVENT_RECEIVED';
  }

  // Endpoint para la verificación del Webhook
  @Get()
  async verifyWebhook(@Query('hub.mode') mode: string, @Query('hub.verify_token') token: string, @Query('hub.challenge') challenge: string) {
    const VERIFY_TOKEN = '<YOUR_VERIFY_TOKEN>'; // Define tu token de verificación

    if (mode && token) {
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('Webhook verificado');
        return challenge;
      } else {
        return 'Forbidden';
      }
    }
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {
  async processWebhook(webhookData: any) {
    // Lógica para procesar el webhook
    console.log('Webhook recibido:', webhookData);
    return { status: 'Webhook procesado' };
  }
}
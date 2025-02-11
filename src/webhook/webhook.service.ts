import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {
  async processWebhook(body: any): Promise<any> {
    // Lógica para procesar el webhook
    return { success: true };
  }
}

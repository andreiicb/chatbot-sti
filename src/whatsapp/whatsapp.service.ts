import { Injectable } from '@nestjs/common';
import { appConfig } from '../../config/app.config';
import axios from 'axios';

@Injectable()
export class WhatsappService {
  async sendWhatsappMessage(message: any) {
    const url = `${appConfig.gupshupApiUrl}/messages`;
    const response = await axios.post(url, message, {
      headers: {
        'Content-Type': 'application/json',
        'apikey': appConfig.apiKey,
      },
    });
    return response.data;
  }
}
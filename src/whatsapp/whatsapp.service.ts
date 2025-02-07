import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WhatsappService {
  private readonly accessToken = '<YOUR_ACCESS_TOKEN>';  // Reemplaza con tu token
  
  // Función para enviar el mensaje a través de la API de WhatsApp
  async sendMessage(recipientId: string, messageText: string) {
    const url = `https://graph.facebook.com/v21.0/me/messages?access_token=${this.accessToken}`;
    
    const messageData = {
      messaging_product: "whatsapp",
      to: recipientId,
      text: { body: messageText },
    };

    try {
      const response = await axios.post(url, messageData);
      console.log('Mensaje enviado:', response.data);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  }
}

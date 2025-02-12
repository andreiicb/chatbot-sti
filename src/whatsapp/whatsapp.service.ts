import { Injectable } from '@nestjs/common';
import { appConfig } from '../../config/app.config';
import axios from 'axios';

@Injectable()
export class WhatsappService {
  /**
   * Envía un mensaje de WhatsApp a través de la API de Meta.
   * @param to Número de teléfono del destinatario.
   * @param text Contenido del mensaje.
   */
  async sendWhatsappMessage(to: string, text: string) {
    const url = `${appConfig.metaApiUrl}/${appConfig.metaPhoneNumberId}/messages`;

    const payload = {
      messaging_product: 'whatsapp',
      to: to,
      text: { body: text },
    };

    try {
      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${appConfig.metaAccessToken}`,
        },
      });

      console.log('Mensaje enviado correctamente:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error al enviar el mensaje:', error.response?.data || error.message);
      throw error;
    }
  }
}
import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhookService {
  /**
   * Procesa un mensaje entrante.
   * @param from Número de teléfono del remitente.
   * @param text Contenido del mensaje.
   */
  async processMessage(from: string, text: string) {
    console.log(`Procesando mensaje de ${from}: ${text}`);

    // Aquí puedes agregar la lógica para responder al mensaje
    if (text.toLowerCase() === 'hola') {
      console.log('Enviando respuesta automática...');
      // Llama a la API de Meta para enviar una respuesta
      await this.sendWhatsAppMessage(from, '¡Hola! ¿En qué puedo ayudarte?');
    }
  }

  /**
   * Envía un mensaje de WhatsApp a través de la API de Meta.
   * @param to Número de teléfono del destinatario.
   * @param text Contenido del mensaje.
   */
  async sendWhatsAppMessage(to: string, text: string) {
    const url = 'https://graph.facebook.com/v18.0/123456789/messages'; // Reemplaza con tu Phone Number ID
    const token = 'TU_TOKEN_DE_ACCESO'; // Reemplaza con tu token de acceso de Meta

    const payload = {
      messaging_product: 'whatsapp',
      to: to,
      text: { body: text },
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('Respuesta de la API de Meta:', data);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  }
}
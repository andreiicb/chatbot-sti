import { Injectable } from '@nestjs/common';
import { appConfig } from '../../config/app.config';

@Injectable()
export class MessagesService {
  async processMessage(message: any) {
    // Lógica para procesar el mensaje
    console.log('Mensaje recibido:', message);
    // Aquí puedes llamar a la API de Gupshup para enviar una respuesta
    return { status: 'Mensaje procesado' };
  }
}
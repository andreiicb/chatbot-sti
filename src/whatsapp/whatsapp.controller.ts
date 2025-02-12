import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';

@Controller('whatsapp')
export class WhatsappController {
  constructor(private readonly whatsappService: WhatsappService) {}

  @Post('send')
  async sendMessage(@Body() body: any) {
    // Verifica que el cuerpo de la solicitud no sea undefined
    if (!body) {
      throw new BadRequestException('El cuerpo de la solicitud no puede estar vacío');
    }

    // Extrae el número de teléfono y el texto del cuerpo de la solicitud
    const { to, text } = body;

    // Verifica que los campos 'to' y 'text' estén presentes
    if (!to || !text) {
      throw new BadRequestException('Los campos "to" y "text" son obligatorios');
    }

    // Llama al servicio para enviar el mensaje
    return this.whatsappService.sendWhatsappMessage(to, text);
  }
}
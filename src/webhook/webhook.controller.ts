import { Controller, Get, Post, Query, Body, Res } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook') // Define la ruta base del webhook
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  /**
   * Maneja la solicitud GET para verificar el webhook.
   * Meta envía un token de verificación que debes validar.
   */
  @Get()
  verifyWebhook(@Query() query: any, @Res() res: any) {
    const mode = query['hub.mode']; // Modo de verificación (debe ser "subscribe")
    const token = query['hub.verify_token']; // Token de verificación
    const challenge = query['hub.challenge']; // Desafío que debes devolver

    // Verifica el token y el modo
    if (mode && token) {
      if (mode === 'subscribe' && token === process.env.META_VERIFY_TOKEN) {
        console.log('Webhook verificado correctamente');
        return res.status(200).send(challenge); // Responde con el desafío
      } else {
        console.log('Token de verificación incorrecto');
        return res.status(403).send('Token de verificación incorrecto');
      }
    }

    console.log('Faltan parámetros en la solicitud');
    return res.status(400).send('Faltan parámetros');
  }

  /**
   * Maneja la solicitud POST para recibir mensajes entrantes.
   * Meta envía los datos del mensaje en el cuerpo de la solicitud.
   */
  @Post()
  handleWebhook(@Body() body: any) {
    console.log('Webhook recibido:', JSON.stringify(body, null, 2));

    // Verifica si el objeto es de WhatsApp Business
    if (body.object === 'whatsapp_business_account') {
      body.entry.forEach((entry) => {
        entry.changes.forEach((change) => {
          if (change.field === 'messages') {
            const message = change.value.messages[0];
            const from = message.from; // Número de teléfono del remitente
            const text = message.text.body; // Contenido del mensaje

            console.log(`Mensaje recibido de ${from}: ${text}`);

            // Llama al servicio para procesar el mensaje
            this.webhookService.processMessage(from, text);
          }
        });
      });
    }

    // Responde con un código 200 para confirmar la recepción
    return { status: 'ok' };
  }
}
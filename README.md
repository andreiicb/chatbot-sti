Funcionalidades actuales
Manejo de mensajes:

El controlador MessagesController está configurado para recibir mensajes entrantes a través de una solicitud POST en la ruta /messages.

El servicio MessagesService procesa el mensaje recibido (por ahora solo lo imprime en la consola).

Manejo de webhooks:

El controlador WebhookController está configurado para recibir datos de webhook a través de una solicitud POST en la ruta /webhook.

El servicio WebhookService procesa los datos del webhook (por ahora solo los imprime en la consola).

Envío de mensajes de WhatsApp:

El controlador WhatsappController está configurado para enviar mensajes de WhatsApp a través de una solicitud POST en la ruta /whatsapp/send.

El servicio WhatsappService utiliza la API de Gupshup para enviar mensajes de WhatsApp.

Ruta principal:

El controlador AppController tiene una ruta GET en la raíz (/) que devuelve un mensaje simple: "Chatbot WhatsApp API".

Cómo ejecutar y probar la aplicación
Instala las dependencias:

Asegúrate de tener todas las dependencias instaladas. Ejecuta:

bash
Copy
npm install
Inicia el servidor:

Ejecuta el servidor con el siguiente comando:

bash
Copy
npm run start
Esto iniciará la aplicación en http://localhost:3000.

Prueba las rutas:

Usa una herramienta como Postman o curl para probar las rutas:

GET en http://localhost:3000/ para ver el mensaje de bienvenida.

POST en http://localhost:3000/messages para simular un mensaje entrante.

POST en http://localhost:3000/webhook para simular un webhook.

POST en http://localhost:3000/whatsapp/send para enviar un mensaje de WhatsApp.

Configura el webhook en Gupshup:

Ve a la configuración de tu bot en Gupshup y establece el webhook para que apunte a tu servidor (por ejemplo, https://tudominio.com/webhook).
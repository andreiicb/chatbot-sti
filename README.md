# 📌 Chatbot WhatsApp API

Este proyecto es una API para manejar mensajes de WhatsApp utilizando la plataforma Gupshup. Permite recibir mensajes entrantes, procesar webhooks y enviar mensajes de WhatsApp.

---

## 🚀 Funcionalidades

### ✉️ Manejo de Mensajes
- 📥 **Recepción de Mensajes:**
  - El `MessagesController` maneja solicitudes `POST` en la ruta `/messages`.
  - El `MessagesService` procesa los mensajes recibidos (actualmente solo los imprime en la consola).

### 🔔 Manejo de Webhooks
- 📡 **Recepción de Webhooks:**
  - El `WebhookController` maneja solicitudes `POST` en la ruta `/webhook`.
  - El `WebhookService` procesa los datos recibidos (actualmente solo los imprime en la consola).

### 📲 Envío de Mensajes de WhatsApp
- 💬 **Envío de Mensajes:**
  - El `WhatsappController` maneja solicitudes `POST` en la ruta `/whatsapp/send`.
  - El `WhatsappService` utiliza la API de Gupshup para enviar mensajes de WhatsApp.

### 🏠 Ruta Principal
- 🌍 **Bienvenida:**
  - El `AppController` tiene una ruta `GET /` que devuelve el mensaje: **"Chatbot WhatsApp API"**.

---

## 🛠️ Cómo ejecutar y probar la aplicación

### 1️⃣ Instalar dependencias
Asegúrate de tener Node.js instalado y ejecuta el siguiente comando:
```bash
npm install
npm install dotenv
```

### 2️⃣ Iniciar el servidor
Ejecuta el siguiente comando para iniciar la aplicación:
```bash
npm run start
```
🔹 Esto iniciará el servidor en `http://localhost:3000`.

### 3️⃣ Probar las rutas
Usa Postman, cURL o cualquier herramienta similar para probar las siguientes rutas:

- **Ver mensaje de bienvenida**
  ```bash
  GET http://localhost:3000/
  ```

- **Simular un mensaje entrante**
  ```bash
  POST http://localhost:3000/messages
  ```

- **Simular un webhook**
  ```bash
  POST http://localhost:3000/webhook
  ```

- **Enviar un mensaje de WhatsApp**
  ```bash
  POST http://localhost:3000/whatsapp/send
  ```

### 4️⃣ Configurar el Webhook en Gupshup
Para recibir mensajes entrantes en tu servidor:
1. Accede a la configuración de tu bot en **Gupshup**.
2. Establece el webhook apuntando a tu servidor, por ejemplo:
   ```
   https://tudominio.com/webhook
   ```

---

## 🎯 Contribución
Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes hacer un fork y enviar un pull request con mejoras.

📌 **¡Feliz desarrollo! 🚀**

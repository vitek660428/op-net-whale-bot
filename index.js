const express = require("express");
const bodyParser = require("body-parser");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
app.use(bodyParser.json());

const TOKEN = "8708847568:AAHDWpHlmdq0a5esexO80HRpdJWtU54u8YE"; // <-- сюда твой токен от @BotFather
const bot = new TelegramBot(TOKEN);

// Настройка Webhook на Vercel
const WEBHOOK_URL = "https://your-vercel-domain.vercel.app/api/bot";
bot.setWebHook(WEBHOOK_URL);

// Endpoint для Telegram
app.post("/api/bot", (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Команды бота
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🚀 OP_NET Whale Scanner запущен!");
});

bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(msg.chat.id, "🏓 pong");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
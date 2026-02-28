const TelegramBot = require("node-telegram-bot-api");

// Токен бота от @BotFather
const TOKEN = "8708847568:AAHDWpHlmdq0a5esexO80HRpdJWtU54u8YE"; // <-- сюда твой токен

const bot = new TelegramBot(TOKEN);
bot.setWebHook(`https://${process.env.VERCEL_URL}/api/bot`);

// Команды бота
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🚀 OP_NET Whale Scanner запущен!");
});

bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(msg.chat.id, "🏓 pong");
});

// Vercel Function handler
module.exports = (req, res) => {
  bot.processUpdate(req.body);
  res.status(200).send("ok");
};
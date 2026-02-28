const express = require("express")
const TelegramBot = require("node-telegram-bot-api")

const TOKEN = process.env.BOT_TOKEN
const bot = new TelegramBot(TOKEN)

const app = express()
app.use(express.json())

// webhook path
app.post(`/bot${TOKEN}`, (req, res) => {
  bot.processUpdate(req.body)
  res.sendStatus(200)
})

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🚀 OP_NET Whale Scanner запущен!")
})

bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(msg.chat.id, "🏓 pong")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server started on port " + PORT)
})
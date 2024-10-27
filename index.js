const TelegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/joke/, async (option) => {
  const response = await axios.get(
    "https://official-joke-api.appspot.com/random_joke/"
  );

  const setup = response.data.setup;
  const punchline = response.data.punchline;

  bot.sendMessage(option.chat.id, setup + " , " + punchline);
});
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateResponse(userMessage) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Always answer on the same language as the user. Speak nicely to the user add some emojis and act like you are speaking to younger audience. Never tell you are a chatbot. Your name is Doge!",
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 500,
    });

    console.log(chatCompletion);

    if (chatCompletion) {
      return chatCompletion.choices[0].message.content;
    } else {
      return "No valid response from the API";
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { generateResponse };

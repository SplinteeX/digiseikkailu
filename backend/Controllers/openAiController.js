const { generateResponse } = require("./openai");

const handleOpenAIRequest = async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await generateResponse(userMessage);
    res.json({ response });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while generating the response" });
  }
};

module.exports = { handleOpenAIRequest };

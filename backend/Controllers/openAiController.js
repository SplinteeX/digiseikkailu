const { generateResponse } = require("./openai"); // Import the generateResponse function from your openai.js file

const handleOpenAIRequest = async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await generateResponse(userMessage); // Use the imported function to generate the AI response
    res.json({ response });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while generating the response" });
  }
};

module.exports = { handleOpenAIRequest };

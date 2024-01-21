const { generateResponse } = require("./openai");
const ResponseModel = require("../Models/ResponseModel");

const saveResponse = async (question, username, role, response) => {
  const newResponse = new ResponseModel({
    question: question,
    user: username,
    role: role,
    response: response,
  });

  await newResponse.save();
};

const handleOpenAIRequest = async (req, res) => {
  const userMessage = req.body.message;
  const username = req.body.username;
  const role = req.body.role;

  try {
    const response = await generateResponse(userMessage);
    await saveResponse(userMessage, username, role, response);

    res.json({ response: response });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { handleOpenAIRequest };

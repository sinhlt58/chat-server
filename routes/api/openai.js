const router = require("express").Router();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post("/chat", async (req, res, next) => {
  const { text } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: text,
    temperature: 0.5,
    max_tokens: 1000,
  });

  // get best choice
  const choices = response.data.choices || [];
  let responseText = "No response";
  if (choices.length > 0) {
    responseText = choices[choices.length - 1].text;
  }

  res.json({
    text: responseText,
  });
});

module.exports = router;

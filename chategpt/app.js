const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function start() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "nodejs in login api",
        temperature: 0,
        max_tokens: 1000,
    })
    console.log(response.data.choices[0].text)
};

start();
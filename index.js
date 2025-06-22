import { Configuration, OpenAIApi } from "openai";

export class AiCodeExplainer {
  constructor(apiKey) {
    if (!apiKey) throw new Error("OpenAI API key is required");
    const configuration = new Configuration({ apiKey });
    this.openai = new OpenAIApi(configuration);
  }

  async explain(codeSnippet, language = "") {
    if (!codeSnippet) throw new Error("codeSnippet is required");

    const prompt = `
You are an expert software engineer.
Explain the following ${language || "code"} snippet in simple, clear English for someone learning programming:

${codeSnippet}

Explanation:
`;

    const response = await this.openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 300,
      temperature: 0.3,
    });

    return response.data.choices[0].text.trim();
  }
}

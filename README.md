# ai-code-explainer
ai-code-explainer is a lightweight Node.js package that uses the OpenAI API to provide plain-English explanations of code snippets. Perfect for learners, educators, and developers looking to understand code quickly.

# Features
  - Explain any code in plain English using AI. 
  - Supports multiple programming languages.
  - Simple, clean API.

## Installation
npm install ai-code-explainer

## Usage
1. Import and initialize the explainer
  const AiCodeExplainer = require("ai-code-explainer");
  // Pass your OpenAI API key
  const explainer = new AiCodeExplainer(process.env.OPENAI_API_KEY);

2. Provide a code snippet to explain
  const code = `
  function add(a, b) {
    return a + b;
  }
  `;

  explainer.explain(code, "JavaScript")
    .then((explanation) => {
      console.log("Explanation:\n", explanation);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });

💡 You must have an OpenAI API key set in process.env.OPENAI_API_KEY.


## API Reference
### new AiCodeExplainer(apiKey)
Creates a new instance.
- apiKey (string): Your OpenAI API key.

### explainer.explain(codeSnippet, language)
Explains the given code snippet.
Generates a plain-English explanation for a given code snippet.
- codeSnippet (string): The code you want explained.
- language (string, optional): Programming language name for context.
Returns a Promise<string> with the explanation.

## Notes
  - This package uses OpenAI's text-davinci-003 model.
  - Explanations are limited to around 300 tokens by default.
  - You must have a valid OpenAI API key to use this package.

## License
MIT License – use it freely!


# ai-code-explainer
A lightweight npm package to get AI-generated plain English explanations of code snippets using the OpenAI API.

## Installation
npm install ai-code-explainer

## Usage
const AiCodeExplainer = require("ai-code-explainer");
const explainer = new AiCodeExplainer(process.env.OPENAI_API_KEY);
const code = `
function add(a, b) {
  return a + b;
}
`;
explainer.explain(code, "JavaScript")
  .then(console.log)
  .catch(console.error);

## API
### new AiCodeExplainer(apiKey)
Creates a new instance.
- apiKey (string): Your OpenAI API key.

### explainer.explain(codeSnippet, language)
Explains the given code snippet.
- codeSnippet (string): The code you want explained.
- language (string, optional): Programming language name for context.
Returns a Promise<string> with the explanation.

## Notes
- Requires an OpenAI API key.
- Uses the text-davinci-003 model for explanation.
- Max explanation length is limited by token count (default 300).

## License
MIT

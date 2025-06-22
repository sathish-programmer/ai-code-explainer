import dotenv from "dotenv";
dotenv.config();

import { AiCodeExplainer } from "./index.js";

const explainer = new AiCodeExplainer(process.env.OPENAI_API_KEY);

const code = `
function multiply(x, y) {
  return x * y;
}
`;

explainer.explain(code, "JavaScript")
  .then(result => console.log("Explanation:\n", result))
  .catch(err => console.error("Error:", err.message));

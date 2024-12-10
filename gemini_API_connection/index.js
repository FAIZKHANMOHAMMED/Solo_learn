require('dotenv').config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const readline = require("readline");

  const geminiAPIKey = "AIzaSyAZE-RhnBsclM_s1B8IQVWzromBaglLpHM"; 
if (!geminiAPIKey) {
  console.error("Error: GEMINI_API_KEY is not set in the .env file.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(geminiAPIKey);

async function interactWithGemini(prompt) {
  try {
    console.log("Sending Prompt to Gemini:", prompt);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);

    const candidates = result?.response?.candidates;
    if (candidates && candidates.length > 0) {
      const text = candidates[0]?.content?.parts[0]?.text;
      if (text) {
        console.log("\nGemini's Response:");
        console.log(text.trim());
        return;
      }
    }

    console.error("Unexpected Response Structure:", JSON.stringify(result, null, 2));
    throw new Error("No response text found in Gemini API response.");
  } catch (error) {
    console.error("Error interacting with Gemini:", error.message);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the Google Gemini CLI!");
rl.question("Enter your prompt: ", async (userPrompt) => {
  if (userPrompt.trim()) {
    console.log("\nSending your prompt to Google Gemini...");
    await interactWithGemini(userPrompt);
  } else {
    console.error("Error: Empty prompt. Please provide a valid prompt.");
  }

  rl.close();
});

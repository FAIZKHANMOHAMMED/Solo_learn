require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const geminiAPIKey = "AIzaSyAZE-RhnBsclM_s1B8IQVWzromBaglLpHM";
if (!geminiAPIKey) {
  console.error("Error: GEMINI_API_KEY is not set in the .env file.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(geminiAPIKey);

async function interactWithGemini(prompts) {
  let conversationContext = ""; // Maintain the chat context
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    for (const prompt of prompts) {
      // Combine context with the current prompt
      const fullPrompt = conversationContext
        ? `${conversationContext}\nYou: ${prompt}`
        : `You: ${prompt}`;
      console.log(`\nSending Chat Prompt to Gemini:\n${fullPrompt}\n`);

      const result = await model.generateContent(fullPrompt);

      const candidates = result?.response?.candidates;
      if (candidates && candidates.length > 0) {
        const responseText = candidates[0]?.content?.parts[0]?.text;
        if (responseText) {
          conversationContext += `\nGemini: ${responseText.trim()}`; // Append response to context
          console.log(`Gemini's Response:`);
          console.log(responseText.trim());
          continue;
        }
      }

      console.error("Unexpected Response Structure:", JSON.stringify(result, null, 2));
      throw new Error("No response text found in Gemini API response.");
    }
  } catch (error) {
    console.error("Error interacting with Gemini:", error.message);
  }

  console.log("\nFinal Chat Context:");
  console.log(conversationContext.trim());
}

(async () => {
  const prompts = [
    "You should tutor the student ",
    "______________ is the primary function of a jet engine a) provide thrust b) generate lift c)to control aircraft pitch d) to steer the aircraft ",
    "what if i had answered b or c or d",
  ]; // Array of interlinked prompts

  await interactWithGemini(prompts);
})();

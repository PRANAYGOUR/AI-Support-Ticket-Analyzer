//we are importing the new google sdk for gemini apo
const { GoogleGenAI } = require("@google/genai");

//creating the ai client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

//passing issue as parameter
const analyzeTicket = async (issue) => {
  const prompt = `
You are an AI support assistant.

Analyze the support ticket below.

Return ONLY a JSON object.

Example:
{
  "category": "Billing",
  "priority": "High",
  "summary": "Customer was charged twice and is requesting a refund."
}

Support Ticket:
${issue}
`;

  try {
    //getting gemini's response
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let text = response.text;

    console.log("Original Response:");
    console.log(text);

    // Remove markdown if Gemini adds it
    text = text
      .replace(/```json\s*/gi, "")
      .replace(/```\s*/g, "")
      .trim();

    console.log("Cleaned Response:");
    console.log(text);

    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};

module.exports = {
  analyzeTicket,
};
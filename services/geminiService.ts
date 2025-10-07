import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

let ai: GoogleGenAI | null = null;
const API_KEY = process.env.API_KEY;

if (API_KEY) {
  try {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
    ai = null;
  }
} else {
  console.warn("Gemini API key not found. Please set the API_KEY environment variable in your Vercel project settings. The chat feature will be disabled.");
}

const systemInstruction = `You are a friendly and helpful AI assistant for Ajith Kumar's personal portfolio website. Your goal is to answer questions about Ajith, his skills, projects, and experience based on the context of a software developer portfolio. Be professional, concise, and encourage users to get in touch with Ajith via the contact form for more detailed inquiries. Do not make up information that is not typically found in a portfolio. Keep your answers conversational and brief.`;


export const generateChatResponse = async (prompt: string): Promise<string> => {
  if (!ai) {
    return "The AI chat is currently disabled because the API key is not configured on the server. Please contact the site owner.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 1,
        topK: 1,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating response from Gemini API:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
};
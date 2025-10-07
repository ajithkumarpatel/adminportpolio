import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// IMPORTANT: Ensure your API key is set in your environment variables.
// In a real frontend project, this key should be handled securely, typically
// by making requests through a backend proxy to avoid exposing the key in client-side code.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `You are a friendly and helpful AI assistant for Ajith Kumar's personal portfolio website. Your goal is to answer questions about Ajith, his skills, projects, and experience based on the context of a software developer portfolio. Be professional, concise, and encourage users to get in touch with Ajith via the contact form for more detailed inquiries. Do not make up information that is not typically found in a portfolio. Keep your answers conversational and brief.`;


export const generateChatResponse = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    // Return a mock response if API key is not available
    return new Promise((resolve) =>
      setTimeout(() => resolve("This is a mock response because the Gemini API key is not configured. Please set it in your environment variables to get live responses."), 1000)
    );
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
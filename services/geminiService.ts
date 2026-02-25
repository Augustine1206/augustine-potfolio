import { GoogleGenAI } from "@google/genai";
import { USER_INFO, EXPERIENCE, SKILLS } from '../constants';

// Declaration to prevent "Cannot find name 'process'" error in VSCode frontend projects
declare const process: any;

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${USER_INFO.name}'s portfolio website.
Here is some context about the user:
Name: ${USER_INFO.name}
Role: ${USER_INFO.role}
Description: ${USER_INFO.description}
Location: ${USER_INFO.location}
Skills: ${SKILLS.map(s => s.name).join(', ')}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}

Your goal is to answer visitor questions about ${USER_INFO.name} professionally and concisely.
If a question is unrelated to the portfolio or the user's professional life, politely steer the conversation back to the portfolio.
Keep answers short (under 50 words) unless detailed explanation is asked.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "Demo mode: API Key not configured. (Please set process.env.API_KEY)";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: message,
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    // Extract text from response - response.candidates[0].content.parts[0].text
    const textContent = response.candidates?.[0]?.content?.parts?.[0]?.text;
    return textContent || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while contacting the AI assistant.";
  }
};

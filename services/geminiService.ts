
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat | null = null;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async startChat() {
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.chat) {
      await this.startChat();
    }
    
    try {
      const response: GenerateContentResponse = await this.chat!.sendMessage({ message });
      return response.text || "Connection lost in the static...";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Critical system error. Re-syncing...";
    }
  }

  async sendMessageStream(message: string, onChunk: (chunk: string) => void) {
    if (!this.chat) {
      await this.startChat();
    }

    try {
      const response = await this.chat!.sendMessageStream({ message });
      for await (const chunk of response) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          onChunk(c.text);
        }
      }
    } catch (error) {
      console.error("Gemini Stream Error:", error);
      onChunk("Error in transmission...");
    }
  }
}

export const geminiService = new GeminiService();

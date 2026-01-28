
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants.tsx";

class GeminiService {
  private ai: GoogleGenAI | null = null;
  private chat: Chat | null = null;

  constructor() {
    // Safely check for process existence
    const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : '';
    if (apiKey) {
      this.ai = new GoogleGenAI({ apiKey });
    }
  }

  async startChat() {
    if (!this.ai) {
      const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : '';
      if (!apiKey) {
          console.warn("API Key missing. Chat features disabled.");
          return;
      }
      this.ai = new GoogleGenAI({ apiKey });
    }
    
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
    
    if (!this.chat) return "AI services are currently offline.";
    
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

    if (!this.chat) {
        onChunk("AI features require an API Key to function.");
        return;
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

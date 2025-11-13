
import { GoogleGenAI, Type } from "@google/genai";
import { DeckAnalysisResult } from "../types";

const fileToGenerativePart = async (file: File) => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result.split(',')[1]);
      } else {
        resolve(''); // Or handle error appropriately
      }
    };
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
};

const analysisSchema = {
  type: Type.OBJECT,
  properties: {
    overallScore: {
      type: Type.NUMBER,
      description: "An overall score for the entire pitch deck, from 0 to 100.",
    },
    overallSummary: {
      type: Type.STRING,
      description: "A concise, 2-3 sentence summary of the deck's main strengths and weaknesses.",
    },
    slideBySlideAnalysis: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          slideNumber: { type: Type.NUMBER, description: "The slide number being analyzed." },
          title: { type: Type.STRING, description: "A concise title for the slide's content (e.g., 'Problem', 'Solution', 'Market Size')." },
          score: { type: Type.NUMBER, description: "A score for this specific slide, from 0 to 10." },
          positivePoints: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 2-3 specific strengths of this slide.",
          },
          improvementAreas: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 2-3 actionable areas for improvement for this slide.",
          },
        },
        required: ["slideNumber", "title", "score", "positivePoints", "improvementAreas"]
      },
    },
  },
  required: ["overallScore", "overallSummary", "slideBySlideAnalysis"],
};

export const analyzeDeck = async (deckFile: File): Promise<DeckAnalysisResult> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const filePart = await fileToGenerativePart(deckFile);
  const prompt = `Analyze the attached pitch deck PDF. You are an experienced venture capital analyst at a top-tier firm like Sequoia Capital or Andreessen Horowitz. Your feedback should be critical, insightful, and actionable for a founder looking to raise a seed or Series A round.

Provide the following:
1.  An overall score for the deck out of 100.
2.  A brief summary highlighting its core strengths and most critical weaknesses.
3.  A detailed, slide-by-slide analysis. For each slide, identify its purpose (e.g., Problem, Solution, Team), give it a score out of 10, and list its key strengths and areas for improvement.

Your entire response must be a single JSON object that conforms to the provided schema. Do not include any text outside of the JSON object.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: {
        parts: [
          { text: prompt },
          filePart
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
        temperature: 0.2,
      },
    });

    const resultText = response.text.trim();
    // In some cases, the response might be wrapped in markdown backticks
    const cleanedJsonText = resultText.replace(/^```json\s*|```$/g, '');
    const parsedResult = JSON.parse(cleanedJsonText) as DeckAnalysisResult;
    return parsedResult;

  } catch (error) {
    console.error("Error analyzing deck with Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to get analysis from AI. Reason: ${error.message}`);
    }
    throw new Error("An unknown error occurred during AI analysis.");
  }
};
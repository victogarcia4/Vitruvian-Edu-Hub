import { GoogleGenAI } from "@google/genai";

// Refactored to comply with latest @google/genai guidelines.
// Always use new GoogleGenAI({apiKey: process.env.API_KEY}) directly.
export const simplifyMedicalText = async (complexText: string): Promise<string> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        // Use 'gemini-3-flash-preview' for basic text simplification tasks.
        const modelId = 'gemini-3-flash-preview';
        
        const prompt = `
        You are "Vitruvian", an expert Anatomy and Physiology tutor. 
        Your task is to act as a "Medical Jargon Converter".
        Convert the following complex medical text or concept into simple, easy-to-understand language suitable for a first-year student.
        Use analogies where appropriate. Keep it concise but accurate.

        Input Text: "${complexText}"
        `;

        const response = await ai.models.generateContent({
            model: modelId,
            contents: prompt,
        });

        // The response.text property directly returns the generated string.
        return response.text || "I couldn't process that text. Please try again.";
    } catch (error) {
        console.error("Error converting text:", error);
        return "An error occurred while connecting to Vitruvian. Please check your connection.";
    }
};
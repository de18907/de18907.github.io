import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export const generateFinanceReport = async (prompt: string, dataContext: any) => {
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    You are a financial data analyst for a Data Warehouse (DWH).
    You have access to the user's financial data: transactions, accounts, and budgets.
    
    Data Context:
    ${JSON.stringify(dataContext, null, 2)}
    
    Your task is to:
    1. Answer questions about the data.
    2. Suggest visualizations if appropriate.
    3. Provide insights on spending habits or budget status.
    
    If the user asks for a report or summary, provide it in Markdown.
    If you suggest a chart, describe the data points clearly so the UI can render them.
    
    Always be professional and helpful.
  `;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      systemInstruction,
    },
  });

  return response.text;
};

export const queryDataWithAI = async (prompt: string, dataContext: any) => {
  const model = "gemini-3-flash-preview";
  
  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      systemInstruction: `
        You are a SQL/NoSQL expert. Translate the user's natural language query into a structured insight.
        Data Context: ${JSON.stringify(dataContext)}
        
        Provide a concise answer based on the data.
      `,
    },
  });

  return response.text;
};

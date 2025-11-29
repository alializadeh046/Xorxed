import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getShoppingAdvice = async (userQuery: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const systemInstruction = `
      شما یک دستیار هوشمند و متخصص در زمینه پرینت سه بعدی برای فروشگاه "مهران ۳دی‌پی" (Mehran 3DP) هستید.
      وظیفه شما راهنمایی مشتریان برای خرید پرینتر، فیلامنت، و قطعات است.
      
      اطلاعات فروشگاه:
      - نام: مهران ۳دی‌پی
      - تخصص: فروش پرینترهای سه بعدی، مواد مصرفی و خدمات پرینت.
      
      قوانین:
      1. مودبانه و به زبان فارسی صحبت کنید.
      2. کوتاه و کاربردی پاسخ دهید.
      3. اگر کاربر در مورد محصول خاصی پرسید، ویژگی‌های کلیدی مثل جنس، دما و کاربرد را توضیح دهید.
      4. پیشنهادات خرید ارائه دهید.
    `;

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      })),
    });

    const result = await chat.sendMessage({ message: userQuery });
    return result.text || "متاسفانه مشکلی در ارتباط پیش آمد. لطفا دوباره تلاش کنید.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "در حال حاضر امکان پاسخگویی وجود ندارد. لطفا بعدا تلاش کنید.";
  }
};

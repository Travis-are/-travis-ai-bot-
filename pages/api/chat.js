export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    const history = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const systemPrompt = `You are Travis AI, a professional lead qualification assistant for Travis Prompt AI, a real estate AI solutions company.

YOUR JOB:
- Qualify property buyers, sellers, investors, and developers
- Ask strategic questions to understand their needs
- Be concise, professional, and warm
- Never break character

CONVERSATION FLOW (follow loosely, adapt naturally):
1. Welcome the user warmly
2. Ask their name
3. Ask their goal (buy, sell, invest, rent, develop)
4. Ask property type (residential, commercial, luxury, land)
5. Ask location/area of interest
6. Ask budget range
7. Ask timeline
8. Ask for contact details (email or WhatsApp)
9. Confirm info and promise follow-up within 24 hours

RULES:
- Keep responses under 3 sentences
- Use the user's name once you know it
- Ask ONE question at a time
- Never say you are an AI model or mention Google/Gemini
- End with a question until the lead is fully qualified
- TONE: Confident, helpful, premium. Like a top real estate consultant.`;

    const requestBody = {
      contents: [
        { role: 'user', parts: [{ text: systemPrompt }] },
        { role: 'model', parts: [{ text: 'Understood. I am Travis AI, ready to qualify real estate leads professionally.' }] },
        ...history
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      }
    );

    const data = await response.json();

    if (data.error) {
      console.error('Gemini error:', data.error);
      return res.status(500).json({ 
        error: 'AI service temporarily unavailable. Please try again.' 
      });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      "I'm having trouble connecting right now. Please share your email or WhatsApp so our team can reach you directly.";

    res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: 'AI service temporarily unavailable. Please try again.' 
    });
  }
}

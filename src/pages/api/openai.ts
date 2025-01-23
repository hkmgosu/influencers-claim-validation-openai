// pages/api/openai.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";
import { generatePrompt } from '../../utils/generatePrompt';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { influencer, claim } = req.body;
    console.log('claim?', claim);
    const prompt = generatePrompt(influencer, claim);

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 500, // Adjust as necessary
      });
      const theResponse = completion.choices[0].message;
      console.log(theResponse);
      return res.status(200).json({ output: theResponse });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return res.status(500).json({ error: "Error fetching data from OpenAI" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

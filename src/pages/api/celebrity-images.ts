import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchCelebrityImages } from '../../utils/gettingImages';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { searchTerm } = req.query;

    if (!searchTerm || Array.isArray(searchTerm)) {
      return res.status(400).json({ error: 'Invalid search term' });
    }

    try {
      const data = await fetchCelebrityImages(searchTerm);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching data', description: error });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
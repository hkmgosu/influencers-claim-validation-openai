import type { NextApiRequest, NextApiResponse } from 'next';
import { getFlickrImages } from '../../utils/flickrService';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query } = req;

    if (req.method === 'GET' && query.term) {
        try {
            const images = await getFlickrImages(query.term as string);
            res.status(200).json(images);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching images' });
        }
    } else {
        res.status(400).json({ message: 'Invalid request' });
    }
};

export default handler;
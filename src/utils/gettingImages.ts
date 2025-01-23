import axios from 'axios';

const BASE_URL = 'https://api.gettyimages.com/v3/images';
const API_KEY = process.env.GETTY_API_KEY;

export const fetchCelebrityImages = async (searchTerm: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        'Api-Key': API_KEY || '',
      },
      params: {
        phrase: searchTerm,
        page_size: 10, // Change this as needed
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images from Getty:', error);
    throw error;
  }
};
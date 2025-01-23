import axios from 'axios';

const FLICKR_API_KEY = process.env.FLICKR_API_KEY; // Ensure to use environment variables
const FLICKR_API_URL = 'https://www.flickr.com/services/rest/';

export const getFlickrImages = async (searchTerm: string) => {
    console.log('flick calling ...')
    try {
        const response = await axios.get(FLICKR_API_URL, {
            params: {
                method: 'flickr.photos.search',
                api_key: FLICKR_API_KEY,
                text: searchTerm,
                format: 'json',
                nojsoncallback: 1,
                per_page: 3, // Number of images to retrieve
            },
        });

        return response.data.photos.photo;
    } catch (error) {
        console.error('Error fetching images from Flickr:', error);
        throw new Error('Could not fetch images');
    }
};
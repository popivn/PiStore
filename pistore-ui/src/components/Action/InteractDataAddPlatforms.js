import axios from 'axios';
import rootURL from './index.js';
const interactDataAddPlatformss = async (platformsData) => {
    try {
        const apiUrl = `${rootURL}/api/Platforms/AddPlatforms.php`;
        const response = await axios.post(apiUrl, platformsData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to interact with the API:', error);
    }
};

export default interactDataAddPlatformss;

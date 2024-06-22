import axios from 'axios';
import rootURL from './index.js';

const interactDataGetAllPlatforms = (callback) => {
    axios
        .get(`${rootURL}/api/platforms/GetAllPlatforms.php`)
        .then((response) => {
            const platformsData = response.data;
            callback(platformsData);
        })
        .catch((error) => {
            console.error('Error fetching games data:', error);
            callback(null, error);
        });
};

export default interactDataGetAllPlatforms;

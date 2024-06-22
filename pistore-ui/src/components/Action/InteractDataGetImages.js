import axios from 'axios';
import rootURL from './index.js';
const getImages = (gameID, callback) => {
    const params = new URLSearchParams();
    params.append('gameID', gameID);
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    axios
        .post(`${rootURL}/api/GameImages/GetImages.php`, params.toString(), config)
        .then((response) => {
            const imageData = response.data;
            callback(imageData);
        })
        .catch((error) => {
            console.error('Error fetching images data:', error);
            callback(null, error);
        });
};

export default getImages;

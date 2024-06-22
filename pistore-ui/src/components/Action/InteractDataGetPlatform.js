import axios from 'axios';
import rootURL from './index.js';
function interactDataGetPlatForms(gameID, callback) {
    const params = new URLSearchParams();
    params.append('gameID', gameID);

    // Tạo config cho request
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Đặt header là 'application/x-www-form-urlencoded'
        },
    };

    // Gửi request bằng axios
    axios
        .post(`${rootURL}/api/Platforms/GetPlatforms.php`, params.toString(), config)
        .then((response) => {
            const platformData = response.data;
            callback(platformData);
        })
        .catch((error) => {
            console.error('Error fetching game data:', error);
            callback(null, error);
        });
}

export default interactDataGetPlatForms;

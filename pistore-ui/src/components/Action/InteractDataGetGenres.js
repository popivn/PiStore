import axios from 'axios';
import rootURL from './index.js';
const InteractDataGetGenres = (gameID, callback) => {
    // Tạo params để gửi gameID đến server
    const params = new URLSearchParams();
    params.append('gameID', gameID);
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    axios
        .post(`${rootURL}/api/Genres/GetGenres.php`, params.toString(), config)
        .then((response) => {
            const genresData = response.data;
            callback(genresData);
        })
        .catch((error) => {
            console.error('Error fetching genres data:', error);
            callback(null, error);
        });
};

export default InteractDataGetGenres;

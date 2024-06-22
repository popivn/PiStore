import axios from 'axios';
import rootURL from './index.js';

const interactDataGetAllGame = (callback) => {
    axios
        .get(`${rootURL}/api/game/GetAllGame.php`)
        .then((response) => {
            const gamesData = response.data;
            callback(gamesData);
        })
        .catch((error) => {
            console.error('Error fetching games data:', error);
            callback(null, error);
        });
};

export default interactDataGetAllGame;

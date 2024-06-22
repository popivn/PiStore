import axios from 'axios';
import rootURL from './index.js';
const interactDataRemoveGame = (gameID, callback) => {
    const params = new URLSearchParams();
    params.append('gameID', gameID);
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    axios
        .post(`${rootURL}/api/game/RemoveGame.php`, params.toString(), config)
        .then((response) => {
            const responseData = response.data;
            callback(responseData);
        })
        .catch((error) => {
            console.error('Error removing game:', error);
            callback(null, error);
        });
};

export default interactDataRemoveGame;

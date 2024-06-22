import axios from 'axios';
import rootURL from '.';

const interactDataGetGame = (gameID, callback) => {
    // Lấy gameID từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('gameID');

    if (!id) {
        id = gameID;
    }

    // Mã hóa dữ liệu sử dụng URLSearchParams
    const params = new URLSearchParams();
    params.append('gameID', id);

    // Tạo config cho request
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Đặt header là 'application/x-www-form-urlencoded'
        },
    };

    // Gửi request bằng axios
    axios
        .post(`${rootURL}/api/game/GetGame.php`, params.toString(), config)
        .then((response) => {
            const gameData = response.data;
            callback(gameData);
        })
        .catch((error) => {
            console.error('Error fetching game data:', error);
            callback(null, error);
        });
};

export default interactDataGetGame;

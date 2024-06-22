import axios from 'axios';
import rootURL from './index.js';
const interactDataGetGamebyName = (Name, callback) => {
    // Mã hóa dữ liệu sử dụng URLSearchParams
    const params = new URLSearchParams();
    params.append('Name', Name);

    // Tạo config cho request
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Đặt header là 'application/x-www-form-urlencoded'
        },
    };

    // Gửi request bằng axios
    axios
        .post(`${rootURL}/api/game/GetGamebyName.php`, params.toString(), config)
        .then((response) => {
            const gameData = response.data;
            callback(gameData);
        })
        .catch((error) => {
            console.error('Error fetching game data:', error);
            callback(null, error);
        });
};

export default interactDataGetGamebyName;

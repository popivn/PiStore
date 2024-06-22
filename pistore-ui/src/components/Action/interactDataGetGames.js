import axios from 'axios';
import rootURL from './index.js';
const InteractDataGetGames = async () => {
    try {
        const response = await axios.post(
            `${rootURL}/api/games.php`, // Thay your_domain bằng domain của bạn
            null, // Dữ liệu gửi đi, ở đây là null vì không có dữ liệu cần gửi
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching games:', error);
        throw error; // Chuyển tiếp lỗi để xử lý ở phía gọi hàm
    }
};

export default InteractDataGetGames;

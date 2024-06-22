import axios from 'axios';
import rootURL from './index.js';

const interactDataUserExist = async (inputEmail, setExists) => {
    try {
        const apiUrl = `${rootURL}/api/user/isUserExist.php`; // Sử dụng dấu nháy đơn hoặc dấu nháy kép để kết hợp chuỗi
        const response = await axios.post(
            apiUrl,
            { email: inputEmail },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
        );
        setExists(response.data.exists);
    } catch (error) {
        alert('Error checking user');
    }
};

export default interactDataUserExist;

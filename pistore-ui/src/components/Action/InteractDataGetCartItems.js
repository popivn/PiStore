import axios from 'axios';
import rootURL from './index.js';

const InteractionDataGetCartItems = (userID, callback) => {
    const params = new URLSearchParams();
    params.append('userID', userID);
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Đặt header là 'application/x-www-form-urlencoded'
        },
    };
    axios
        .post(`${rootURL}/api/Mycart/GetCart.php`, params.toString(), config) // Sử dụng dấu backtick (\`\`) và ký tự đặc biệt ${} để chèn biến 'rootURL' vào URL.
        .then((response) => {
            const cartItems = response.data;
            callback(cartItems);
        })
        .catch((error) => {
            console.error('Error fetching cart items data:', error);
            callback(null, error);
        });
};

export default InteractionDataGetCartItems;

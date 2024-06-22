import axios from 'axios';
import rootURL from './index.js';

const InteractionDataGetCartID = (userID, callback) => {
    const params = new URLSearchParams();
    params.append('userID', userID);
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Đặt header là 'application/x-www-form-urlencoded'
        },
    };
    axios
        .post(`${rootURL}/api/Mycart/GetCartID.php`, params.toString(), config)
        .then((response) => {
            const cartID = response.data;
            callback(cartID);
        })
        .catch((error) => {
            console.error('Error fetching cart items data:', error);
            callback(null, error);
        });
};

export default InteractionDataGetCartID;

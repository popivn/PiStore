import axios from 'axios';
import queryString from 'query-string';
import rootURL from './index.js';
const interactDataAddtoCart = async (cartData) => {
    try {
        const encodedData = queryString.stringify(cartData);
        const apiUrl = `${rootURL}/api/Mycart/AddtoCart.php`;
        const response = await axios.post(apiUrl, encodedData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to interact with the API:', error);
    }
};

export default interactDataAddtoCart;

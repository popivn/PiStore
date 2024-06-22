import axios from 'axios';
import queryString from 'query-string';
import rootURL from './index.js';
const interactDataAddUser = async (userData) => {
    try {
        const encodedData = queryString.stringify(userData);
        const apiUrl = `${rootURL}/api/user/AddUser.php`;
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

export default interactDataAddUser;

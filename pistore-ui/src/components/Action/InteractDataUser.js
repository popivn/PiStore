import axios from 'axios';
import rootURL from './index.js';
const interactDataUser = (email, callback) => {
    const requestData = {
        email: email,
    };
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    axios
        .post(`${rootURL}/api/user/GetUser.php`, requestData, config)
        .then((response) => {
            const userData = response.data;
            callback(userData);
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
            callback(null, error);
        });
};

export default interactDataUser;

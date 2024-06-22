import axios from 'axios';
import rootURL from './index.js';

function InteractDataGetContactNameandUrl(gameID, callback) {
    const params = new URLSearchParams();
    params.append('gameID', gameID);
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Đặt header là 'application/x-www-form-urlencoded'
        },
    };
    axios
        .post(`${rootURL}/api/Contacts/GetContacts.php`, params.toString(), config)
        .then((response) => {
            const contactData = response.data;
            callback(contactData);
        })
        .catch((error) => {
            console.error('Error fetching contact data:', error);
            callback(null, error);
        });
}

export default InteractDataGetContactNameandUrl;

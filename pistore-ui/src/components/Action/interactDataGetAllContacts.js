import axios from 'axios';
import rootURL from './index.js';
const interactDataGetAllContacts = (callback) => {
    axios
        .get(`${rootURL}/api/contacts/GetContactList.php`)
        .then((response) => {
            const contactsData = response.data;
            callback(contactsData);
        })
        .catch((error) => {
            console.error('Error fetching games data:', error);
            callback(null, error);
        });
};

export default interactDataGetAllContacts;

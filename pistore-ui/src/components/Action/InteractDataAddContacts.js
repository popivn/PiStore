import axios from 'axios';
import rootURL from './index.js';
// Sử dụng biến rootURL ở đây

const interactDataAddContact = async (contactsData) => {
    try {
        const apiUrl = `${rootURL}/api/Contacts/AddContacts.php`; // Sử dụng dấu nháy đơn hoặc dấu nháy kép để kết hợp chuỗi
        const response = await axios.post(apiUrl, contactsData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to interact with the API: ' + error.message); // Thêm error.message để hiển thị thông báo lỗi cụ thể
    }
};

export default interactDataAddContact;

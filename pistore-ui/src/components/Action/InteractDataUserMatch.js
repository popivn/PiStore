import axios from 'axios';
import Swal from 'sweetalert2';
import rootURL from './index.js';
const interactDataUserMatch = async (inputEmail, inputPassword, setResult) => {
    try {
        const params = new URLSearchParams();
        params.append('email', inputEmail);
        params.append('password', inputPassword);

        const response = await axios.post(`${rootURL}/api/user/isUser.php`, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        setResult(response.data.exists);
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: 'Error checking user',
            icon: 'error',
        });
    }
};

export default interactDataUserMatch;

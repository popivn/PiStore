import axios from 'axios';
import rootURL from './index.js';
const interactDataGetPaymentMethodName = (paymentMethodID, callback) => {
    // Mã hóa dữ liệu sử dụng URLSearchParams
    const params = new URLSearchParams();
    params.append('paymentMethodID', paymentMethodID);

    // Tạo config cho request
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Đặt header là 'application/x-www-form-urlencoded'
        },
    };

    // Gửi request bằng axios
    axios
        .post(`${rootURL}/api/Payment/GetPaymentMethodName.php`, params.toString(), config)
        .then((response) => {
            const paymentMethodName = response.data.paymentMethodName;
            callback(paymentMethodName);
        })
        .catch((error) => {
            console.error('Error fetching payment method name:', error);
            callback(null, error);
        });
};

export default interactDataGetPaymentMethodName;

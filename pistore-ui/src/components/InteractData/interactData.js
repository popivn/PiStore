import axios from 'axios';
import queryString from 'query-string';
const interactData = async (apiUrl, requestData, method, options = {}) => {
    const { headers = {}, params = {}, responseType = 'json' } = options;
    if (!method) {
        throw new Error('Method is required.');
    }
    try {
        const upperCaseMethod = method.toUpperCase();
        console.log(requestData);
        const requestDataToSend = upperCaseMethod === 'GET' ? params : queryString.stringify(requestData);
        console.log(requestDataToSend);
        const config = {
            method: upperCaseMethod,
            url: apiUrl,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                ...headers,
            },
            params: upperCaseMethod === 'GET' ? { ...params, ...requestData } : params,
            data: requestDataToSend,
            responseType,
        };
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw new Error('Failed to interact with the API:', error);
    }
};
export default interactData;

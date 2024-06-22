import axios from 'axios';
import rootURL from 'components/Action';

const fetchGameData = async () => {
    try {
        const response = await axios.get(`${rootURL}/api/games.php`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching games:', error);
        return [];
    }
};

export default fetchGameData;

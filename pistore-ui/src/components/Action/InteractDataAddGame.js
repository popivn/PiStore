import axios from 'axios';
import rootURL from './index.js';
const interactDataAddGame = async (gameData) => {
    try {
        const apiUrl = `${rootURL}/api/game/AddGame.php`;
        const formData = new FormData();
        for (const key in gameData) {
            if (key === 'images') {
                const blobData = await getBlobFromImage(gameData[key]);
                formData.append('images', blobData, 'image.jpg');
                console.log(gameData[key] + 'aadgame');
            } else {
                formData.append(key, gameData[key]);
            }
        }
        const response = await axios.post(apiUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to interact with the API:', error);
    }
};

const getBlobFromImage = (imageFile) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const blobData = new Blob([reader.result], { type: imageFile.type });
            resolve(blobData);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(imageFile);
    });
};

export default interactDataAddGame;

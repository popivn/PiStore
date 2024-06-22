import axios from 'axios';
import rootURL from './index.js';
const interactDataUpdateGame = async (gameData) => {
    try {
        const apiUrl = `${rootURL}/api/game/GameUpdate.php`;
        const formData = new FormData();

        for (const key in gameData) {
            if (key === 'Image') {
                try {
                    const blobData = await getBlobFromImage(gameData[key]);
                    formData.append('Image', blobData, 'image.jpg');
                } catch (error) {
                    continue;
                }
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

export default interactDataUpdateGame;

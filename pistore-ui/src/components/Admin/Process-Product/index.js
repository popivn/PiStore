import React, { useState, useEffect } from 'react';
import './index.css';
import InteractDataGetGameID from 'components/Action/InteractDataGetGameID';
import interactDataAddGame from 'components/Action/InteractDataAddGame'; // Import interactDataAddGame
import InputForGame from './Input';

function ProcessProduct() {
    const [gameData, setGameData] = useState({
        gameID: '',
        name: '',
        price: '',
        dateTimeRelease: '',
        publisher: '',
        description: '',
        images: '', // Change to empty string initially
        type: 'Base Game',
        quantitySold: 0,
        addedDate: new Date().toISOString().slice(0, 16),
        developer: '',
    });

    useEffect(() => {
        async function fetchGameID() {
            try {
                const gameIDs = await InteractDataGetGameID();
                if (gameIDs && gameIDs.length > 0) {
                    const maxGameID = Math.max(...gameIDs);
                    const newGameID = maxGameID + 1;
                    setGameData((prevState) => ({
                        ...prevState,
                        gameID: newGameID.toString(),
                    }));
                } else {
                    setGameData((prevState) => ({
                        ...prevState,
                        gameID: '1',
                    }));
                }
            } catch (error) {
                console.error('Failed to fetch game IDs:', error);
            }
        }
        fetchGameID();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setGameData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = async (event) => {
        const imageFile = event.target.files[0]; // Lấy file hình ảnh từ event
        if (imageFile) {
            try {
                // const blobData = await getBlobFromImage(imageFile);
                setGameData((prevData) => ({
                    ...prevData,
                    images: imageFile,
                }));
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Gửi dữ liệu gameData qua hàm interactDataAddGame để thêm thông tin trò chơi
            const response = await interactDataAddGame(gameData);
            console.log('Game added successfully:', response);
            alert('Game added successfully!');

            // Reload trang sau khi thêm trò chơi thành công
            //window.location.reload();
        } catch (error) {
            console.error('Failed to add game:', error);
            alert('Failed to add game. Please try again later.');
        }
    };
    return (
        <div>
            <InputForGame
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleImageChange={handleImageChange}
                gameData={gameData}
            />
        </div>
    );
}

export default ProcessProduct;

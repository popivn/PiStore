import React, { useState, useEffect } from 'react';
import Render from './Render';
import interactData from 'components/InteractData/interactData';
import rootURL from 'components/Action';

function SearchInStore() {
    const [gameData, setGameData] = useState([]);
    const [inputGameName, setInputGameName] = useState('');
    const [gameFound, setGameFound] = useState(false);
    const URL = `${rootURL}/api/game/GetGamebyName.php`;
    const Method = 'POST';
    const searchGameData = async (inputGameName) => {
        try {
            const gameData = await interactData(URL, { Name: inputGameName }, Method);
            console.log(gameData + 'Test Game Data');
            if (gameData && gameData.length > 0) {
                setGameData(gameData);
                setGameFound(true);
            } else {
                setGameData([]);
                setGameFound(false);
            }
        } catch (error) {
            console.error('Error searching game data:', error);
        }
    };

    useEffect(() => {
        if (inputGameName === '') {
            setGameFound(true);
            setGameData([]);
            return;
        }

        const delaySearch = setTimeout(() => {
            searchGameData(inputGameName);
        }, 300);

        return () => clearTimeout(delaySearch);
    }, [inputGameName]);

    const handleChange = (e) => {
        setInputGameName(e.target.value);
    };

    const handleSearch = () => {
        searchGameData(inputGameName);
    };

    return (
        <Render
            inputGameName={inputGameName}
            gameData={gameData}
            gameFound={gameFound}
            handleChange={handleChange}
            handleSearch={handleSearch}
        />
    );
}

export default SearchInStore;

import React, { useState, useEffect } from 'react';
import fetchGameData from './fetchData.js';
import Render from './render.js';
import './index.css';

function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchGameData();
                setGames(data);
            } catch (error) {
                console.error('Error fetching game data:', error);
            }
        };

        fetchData();
    }, []);

    return <Render games={games} />;
}

export default GameList;

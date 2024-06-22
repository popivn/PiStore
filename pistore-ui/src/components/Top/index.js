import React, { useState, useEffect } from 'react';
import Render from './render';
import fetchGameData from '@/components/data/Games/fetchData.js';
import './index.css';
function Top() {
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
export default Top;

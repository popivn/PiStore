import React, { useState, useEffect } from 'react';
import fetchGameData from '@/components/data/Games/fetchData.js';
import GameCarousel from './render.js';
import './index.css';

function Carousel() {
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

    return (
        <div>
            <GameCarousel games={games} />
        </div>
    );
}

export default Carousel;

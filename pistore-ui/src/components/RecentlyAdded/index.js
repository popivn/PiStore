import React, { useState, useEffect } from 'react';
import Render from './render';
import fetchGameData from '@/components/data/Games/fetchData.js';
import './index.css';
function RecentlyAdded() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchGameData(); // Gọi hàm fetchGameData để lấy dữ liệu từ API
                setGames(data); // Cập nhật state với dữ liệu lấy được
            } catch (error) {
                console.error('Error fetching game data:', error);
            }
        };

        fetchData(); // Gọi hàm fetchData khi component được render
    }, []);

    return <Render games={games} />;
}

export default RecentlyAdded;

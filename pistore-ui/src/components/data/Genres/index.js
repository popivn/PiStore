import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Render from './render'; // Chắc chắn rằng bạn đã tạo component Render để hiển thị dữ liệu
import './index.css';
import rootURL from 'components/Action';
const GenreList = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios
            .get(`${rootURL}/api/genres.php`)
            .then((response) => {
                setGenres(response.data);
            })
            .catch((error) => {
                console.error('Error fetching genres:', error);
            });
    }, []);

    return <Render genres={genres} />; // Render component để hiển thị dữ liệu genres
};

export default GenreList;

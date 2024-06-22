import React, { useState, useEffect } from 'react';
import InteractDataGetAllGame from 'components/Action/InteractDataGetAllGame';
import Render from './render';

function Modify() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        InteractDataGetAllGame()
            .then((gamesData) => {
                console.log(gamesData);
                setGames(gamesData);
            })
            .catch((error) => {
                console.error('Error fetching games:', error);
            });
    }, []);

    return <Render games={games} />;
}

export default Modify;

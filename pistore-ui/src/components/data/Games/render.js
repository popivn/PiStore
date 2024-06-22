import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GameShow from './game-show';
const Render = ({ games }) => {
    const [selectedOption, setSelectedOption] = useState('all');
    const location = useLocation();
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const showParam = params.get('show');
        setSelectedOption(showParam || 'all');
    }, [location.search]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const filteredGames = games.filter((game) => {
        if (selectedOption === 'free') {
            return game.Price === '0.00';
        }
        return true;
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-flex mb-3">
                        <span className="show-text mx-1 mb-1">Show:</span>
                        <select
                            className="form-select mx-0 form-select-sm"
                            value={selectedOption}
                            onChange={handleOptionChange}
                        >
                            <option value="all">All</option>
                            <option value="free">Free</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                {filteredGames.map((game) => (
                    <Link
                        to={`/detail?gameID=${game.GameID}`}
                        className="linkDecoration col-lg-2 col-md-6 col-sm-12 d-flex justify-content-between align-items-center"
                        key={game.GameID}
                        style={{ cursor: 'pointer' }}
                    >
                        <GameShow game={game} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Render;

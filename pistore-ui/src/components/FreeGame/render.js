import React from 'react';
import { Link } from 'react-router-dom';

const Render = ({ games }) => {
    const filteredGames = games.filter((game) => game.Price === '0.00').slice(0, 2);
    const handleGameClick = (gameID) => {
        window.location.href = `/detail?gameID=${gameID}`;
    };
    return (
        <div className="container">
            <div className="div-container row align-items-start">
                <h2 className="styleH2 mb-3 mx-0 px-0 rounded-0">Free Game</h2>
                <div className=" d-flex  justify-content-between">
                    {filteredGames.map((game) => (
                        <div
                            className="game-item-free justify-content-start flex-column mx-10"
                            key={game.GameID}
                            onClick={() => handleGameClick(game.GameID)}
                        >
                            <div className="d-flex flex-column align-items-center">
                                <img src={game.Image} alt={game.Name} className="rounded-top" />
                                <h3 class="styleH3 rounded-top">Free Game</h3>
                            </div>
                            <h3 className="StyleH5-recentlyAdded">{game.Name}</h3>
                        </div>
                    ))}
                </div>
                <div className="mb-3 text-center border-top border-dark">
                    <Link to="/browse?show=free" className="btn btn-custom  mt-3 ">
                        View More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Render;

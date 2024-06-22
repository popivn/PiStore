function GameShow({ game }) {
    return (
        <div className="game-item">
            <img src={game.Image} alt={game.Name} />
            <h3 className="StyleH5-recentlyAdded">{game.Name}</h3>
            <h6 className="StyleH6-recentlyAdded">{game.Type}</h6>
            {game.Price === '0.00' ? (
                <p className="styleP-recentlyAdded">Free Game</p>
            ) : (
                <p className="styleP-recentlyAdded">{game.Price}$</p>
            )}
        </div>
    );
}

export default GameShow;

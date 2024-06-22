import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Render({ inputgameName, gameData, gameFound, handleChange, handleSearch }) {
    return (
        <div className="searchContainer">
            <div className="search-layout">
                <button className="search-button" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    value={inputgameName}
                    onChange={handleChange}
                />
            </div>
            {gameFound ? (
                <div className="searchGame-Display">
                    {gameData.map((game, index) => (
                        <div
                            key={game.GameID}
                            className="game-info styleH4"
                            style={{ margin: '10px', cursor: 'pointer' }}
                            onClick={() => (window.location.href = `/detail?gameID=${game.GameID}`)}
                        >
                            <img src={game.Image} alt="Game Thumbnail" className="game-thumbnail" /> {game.Name}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="searchGame-Display">
                    <p>Game Not Found</p>
                </div>
            )}
        </div>
    );
}

export default Render;

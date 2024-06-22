const Render = ({ games }) => {
    const handleGameClick = (gameID) => {
        window.location.href = `/detail?gameID=${gameID}`;
    };
    // Sắp xếp các trò chơi theo QuantitySold giảm dần
    const sortedGames = games.sort((a, b) => b.QuantitySold - a.QuantitySold);

    // Chọn ra 5 trò chơi có QuantitySold cao nhất
    const topGames = sortedGames.slice(0, 5);
    return (
        <div className="container div-Top">
            <h2 className="styleH2 text-center rounded rounded-0">Top Games</h2>
            <div className="d-flex justify-content-center">
                <div className="div-topSeller rounded-top rounded-5">
                    <div className="d-flex justify-content-between m-3 p-1">
                        <h5 className="fw-bold text-decoration-underline">Top Seller</h5>
                        <button className="btn btn-custom"> View More</button>
                    </div>
                    <div className="row border-top border-dark justify-content-center">
                        {topGames.map((game) => (
                            <div
                                className="col-lg-12 d-flex justify-content-center "
                                key={game.id}
                                onClick={() => handleGameClick(game.GameID)}
                            >
                                <div className="game-top row align-items-center ">
                                    <div className="col-auto">
                                        <img src={game.Image} className="game-image" alt={game.Name} />
                                    </div>
                                    <div className="col">
                                        <h5 className="game-title">{game.Name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Render;

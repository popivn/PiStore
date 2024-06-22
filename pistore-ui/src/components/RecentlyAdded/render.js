import React, { useState } from 'react';
import GameShow from 'components/data/Games/game-show';
import { Link } from 'react-router-dom';
const Render = ({ games }) => {
    // Sắp xếp các game theo ngày thêm mới nhất đến cũ nhất
    games.sort((a, b) => new Date(b.Addeddate) - new Date(a.Addeddate));

    // Số lượng sản phẩm hiện đang hiển thị
    const [displayCount, setDisplayCount] = useState(6);

    // Lấy danh sách các sản phẩm cần hiển thị
    const displayedGames = games.slice(0, displayCount);

    // Hàm xử lý khi nhấn nút "Xem thêm"
    const handleShowMore = () => {
        setDisplayCount(Math.min(displayCount + 18, games.length)); // Tăng số lượng hiển thị thêm 6 sản phẩm, nhưng không vượt quá tổng số sản phẩm
    };
    // Hàm xử lý khi nhấn nút "Thu gọn"
    const handleShowLess = () => {
        setDisplayCount(6); // Thiết lập số lượng hiển thị trở lại 6 sản phẩm ban đầu
    };

    return (
        <div className="container  ">
            <h2 className="styleH2 mb-3">Recenly Added</h2>
            <div className="row ">
                {displayedGames.map((game) => (
                    <div className="col-lg-2 d-flex justify-content-between align-items-center" key={game.GameID}>
                        <Link to={`/detail?gameID=${game.GameID}`} style={{ textDecoration: 'none' }}>
                            <GameShow game={game} />
                        </Link>
                    </div>
                ))}
                <div className="d-flex border-top border-white justify-content-center mb-5">
                    {games.length > 6 && displayCount < games.length && (
                        <div className="text-center mt-3">
                            <button onClick={handleShowMore} className="btn-primaryColor mx-1">
                                Show More
                            </button>
                        </div>
                    )}
                    {displayCount > 6 && (
                        <div className="text-center mt-3">
                            <button onClick={handleShowLess} className="btn-secondaryColor mx-1">
                                Show Less
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Render;

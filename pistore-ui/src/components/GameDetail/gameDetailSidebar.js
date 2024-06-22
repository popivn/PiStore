import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import PlatformsIcon from '@/components/PlatformIcon';
import interactDataAddtoCart from 'components/Action/InteractDataAddtoCart';
import Swal from 'sweetalert2';
import interactData from 'components/InteractData/interactData';
import rootURL from 'components/Action';

function GameDetailSideBar({ gameID, gameImage, gameType, gamePrice, Developer, Publisher, DataTimeRelease, UserID }) {
    const Method = 'POST';
    const handleAddToCart = async () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            window.location.href = '/login';
            return;
        }

        try {
            const requestData = { UserID };
            const response = await interactData(`${rootURL}/api/Mycart/AddCart.php`, requestData, Method);
            await interactDataAddtoCart({
                DateTime: new Date().toISOString(),
                GameID: gameID,
                PaymentMethodID: '1',
                Price: gamePrice,
                CartID: response.cartID,
                Status: 'awaitingPayment',
            });

            Swal.fire({
                title: 'Great!',
                text: 'Your Game was Added!',
                icon: 'success',
                customClass: {
                    backdrop: 'custom-swal-bg',
                    popup: 'custom-swal-bg',
                    confirmButton: 'custom-swal-button',
                },
            });
        } catch (error) {
            alert('Failed to add to cart: ' + error.message);
        }
    };

    return (
        <div className="gameDetailSideBar">
            <img className="GameDetailSideBar-image" src={gameImage} alt="Game" />
            <h6 className="styleH6 mt-3">{gameType}</h6>
            <p className="styleH4">{gamePrice === '0.00' ? 'Free Game' : `${gamePrice}$`}</p>
            {gamePrice === '0.00' ? (
                <button className="gameDetailBtn1 mt-3">Get Free Game</button>
            ) : (
                <button className="gameDetailBtn1 mt-3">Buy Now</button>
            )}
            {gamePrice !== '0.00' && (
                <div>
                    <button className="gameDetailBtn2 mt-3 border border-white" onClick={handleAddToCart}>
                        Add To Cart
                    </button>
                    <button className="gameDetailBtn2 mt-3 border border-white">
                        <FontAwesomeIcon className="gameDetailIcon" icon={faPlusCircle} />
                        Add To WishList
                    </button>
                </div>
            )}
            <div className="mt-3">
                {Developer && (
                    <div className="d-flex justify-content-between styleP border-bottom border-white my-2">
                        <div>
                            <p>Developer: </p>
                        </div>
                        <div>{Developer}</div>
                    </div>
                )}
                {Publisher && (
                    <div className="d-flex justify-content-between styleP border-bottom border-white">
                        <div>
                            <p>Publisher: </p>
                        </div>
                        <div>{Publisher}</div>
                    </div>
                )}
                {DataTimeRelease && (
                    <div className="d-flex justify-content-between styleP border-bottom border-white my-2">
                        <div>
                            <p>Release Date: </p>
                        </div>
                        <div>{DataTimeRelease}</div>
                    </div>
                )}
                <div className="d-flex justify-content-between styleP border-bottom border-white">
                    <div>
                        <p>Platform: </p>
                    </div>
                    <div>
                        <PlatformsIcon gameID={gameID} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameDetailSideBar;

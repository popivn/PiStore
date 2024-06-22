import React, { useState, useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import AccountMenu from '../SecondHeader/AccountMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import SearchInStore from '../../../PiStoreFunction/Search';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const handleStorageChange = () => {
            const loggedInStatus = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(loggedInStatus === 'true');
        };

        window.addEventListener('storage', handleStorageChange);
        handleStorageChange();

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
            style={{
                height: '70px',
                justifyContent: 'flex-start',
                zIndex: 11, // Đặt giá trị z-index cho header
                marginBottom: '10px', // Thêm khoảng cách giữa header và phần tử dưới nó
            }}
        >
            <div className="container">
                <SearchInStore />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="text-h3 nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-h3 nav-link" to="/browse">
                                Browse
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="text-h3 nav-link" href="/news">
                                News
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="/mycart" className="stylePHeader">
                        Cart
                    </Link>
                </div>
                <div className="accountMenu-Button d-flex align-items-center justify-content-center mr-2">
                    {isLoggedIn ? (
                        <AccountMenu />
                    ) : (
                        <Link className="text-dark nav-link" to="/login">
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Header;

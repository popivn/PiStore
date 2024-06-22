import React from 'react';
import './index.css';

function Header() {
    return (
        <nav
            className="border border-white navbar navbar-expand-lg navbar-dark bg-dark"
            style={{ height: 70, zIndex: 10, position: 'sticky', top: 70 }} // Đặt position là sticky và top là 90px
        >
            <div className="container justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-h3" href="/" onClick={(e) => e.preventDefault()}>
                            Overview
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-h3" href="/" onClick={(e) => e.preventDefault()}>
                            Add-Ons
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;

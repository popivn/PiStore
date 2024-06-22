import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.jpg';

function GameManagement() {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div>
            <div className="imageLogo-Admin-container">
                <Link to="/admin" style={{ textDecoration: 'none', color: 'white' }}>
                    <img className="imageLogo-Admin" src={logo} alt="PiStore Logo" />
                </Link>
            </div>
            <p onClick={toggleOptions} className="styleP-Admin">
                Game
            </p>
            {showOptions && (
                <div>
                    <p className="styleP2-Admin">
                        <Link to="/admin/addgame" style={{ textDecoration: 'none', color: 'white' }}>
                            Add Game
                        </Link>
                    </p>
                    <p className="styleP2-Admin">
                        <Link to="/admin/modify" style={{ textDecoration: 'none', color: 'white' }}>
                            Modify
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
}

export default GameManagement;

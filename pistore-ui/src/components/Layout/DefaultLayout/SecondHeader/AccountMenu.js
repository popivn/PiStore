import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './index';

function AccountMenu() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loggedInEmail');
        localStorage.removeItem('loggedInUsername'); // Xóa cả thông tin username
        window.location.href = '/'; // Redirect về trang chính
    };

    return (
        <div className="dropdown dropdown--account" ref={dropdownRef}>
            <div
                className="dropdown__button"
                role="button"
                aria-label="Account menu"
                aria-controls="nav-account-menu"
                aria-expanded={showDropdown ? 'true' : 'false'}
                title="vnpopi"
                onClick={toggleDropdown}
            >
                <FontAwesomeIcon icon={faUser} />
            </div>
            {showDropdown && (
                <>
                    <div className="friendly-box friendly-box--top"></div>
                    <div
                        className="friendly-box friendly-box--wide-adjust"
                        id="nav-account-friendly-box"
                        data-overflow-adjusted="true"
                        style={{ '--overflow-adjustment': 'none' }}
                    ></div>
                    <div
                        id="nav-account-menu"
                        className="epic-wf-simple-menu"
                        data-overflow-adjusted="true"
                        style={{ '--overflow-adjustment': 'none' }}
                    >
                        <Link to="/menu">
                            <FontAwesomeIcon icon={faUserCircle} />
                            <span>Menu</span>
                        </Link>
                        <Link to="/profile">
                            <FontAwesomeIcon icon={faUserCircle} />
                            <span>Profile</span>
                        </Link>
                        <button className="LogoutIcon" onClick={handleLogout}>
                            <FontAwesomeIcon className="" icon={faSignOutAlt} />
                            <span>Logout</span>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default AccountMenu;

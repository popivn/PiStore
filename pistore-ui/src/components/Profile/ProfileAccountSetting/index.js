import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import interactDataUser from 'components/Action/InteractDataUser';
import Avatar from './Avatar';

function ProfileAccountSetting() {
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [gmail, setGmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [birthday, setBirthDay] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [isUserNameEditable, setIsUserNameEditable] = useState(false);
    const [isGmailEditable, setIsGmailEditable] = useState(false);

    useEffect(() => {
        const email = localStorage.getItem('loggedInEmail');
        if (email) {
            interactDataUser(email, (userData) => {
                if (userData) {
                    setUserId(userData.UserID);
                    setUserName(userData.Username);
                    setGmail(userData.Email);
                    setFirstName(userData.FirstName);
                    setLastName(userData.LastName);
                    setBirthDay(userData.Birthday);
                    setAvatar(userData.Image);
                } else {
                    console.error('Failed to fetch user data');
                }
            });
        } else {
            console.error('Email not found in localStorage');
        }
    }, []);

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    };

    const handleChangeUserName = () => {
        setIsUserNameEditable(true);
    };

    const handleChangeGmail = () => {
        setIsGmailEditable(true);
    };

    return (
        <div>
            <h1 className="text-white text-center">Account Setting</h1>
            <h4 className="styleH5 text-center">Manage your account’s details.</h4>
            <div className="row my-3 border-bottom border-white">
                <h2 className="styleH2 rounded rounded-0">Account Information</h2>
                <Avatar avatar={avatar} />
                <div className="col-lg-6 d-flex align-items-center mb-3">
                    <input
                        type="text"
                        className="displayAccountInput mr-2"
                        value={userName}
                        onChange={(e) => handleInputChange(e, setUserName)}
                        disabled={!isUserNameEditable}
                    />
                    <button className="iconPen" onClick={handleChangeUserName}>
                        <FontAwesomeIcon className="icon" icon={faPen} />
                    </button>
                </div>
                <div className="col-lg-6 d-flex align-items-center mb-3">
                    <input
                        type="text"
                        className="displayAccountInput mr-2"
                        value={gmail}
                        onChange={(e) => handleInputChange(e, setGmail)}
                        disabled={!isGmailEditable}
                    />
                    <button className="iconPen" onClick={handleChangeGmail}>
                        <FontAwesomeIcon className="icon" icon={faPen} />
                    </button>
                </div>
            </div>
            <div className="row my-3 border-bottom border-white">
                <h2 className="styleH2 rounded rounded-0">Personal Details</h2>
                <div className="col-lg-12 mb-3">
                    <h3 className="styleH5">
                        Manage your name and contact info. These personal details are private and will not be displayed
                        to other users. View our Privacy Policy
                    </h3>
                </div>
                <div className="col-lg-6 d-flex align-items-center mb-3">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="displayAccountInput2 form-control"
                        value={firstName}
                        disabled={!isGmailEditable}
                    />
                </div>
                <div className="col-lg-6 d-flex align-items-center mb-3">
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="displayAccountInput2 form-control"
                        value={lastName}
                        disabled
                    />
                </div>
                <div className="col-lg-6 d-flex align-items-center mb-3">
                    <input
                        type="text"
                        placeholder="BirthDay"
                        className="displayAccountInput2 form-control"
                        value={birthday}
                        disabled
                    />
                </div>
            </div>
            <div className="row my-3 border-bottom border-white">
                <h2 className="styleH2 rounded rounded-0">Address</h2>
                <div className="col-lg-12 mb-3">
                    <h3 className="styleH5">
                        Manage your name and contact info. These personal details are private and will not be displayed
                        to other users. View our Privacy Policy
                    </h3>
                </div>
                <div className="col-lg-6 d-flex align-items-center mb-3">
                    <input type="text" placeholder="Address line 1" className="displayAccountInput2" disabled />
                </div>
                <div className="col-lg-6 d-flex align-items-center mb-3">
                    <input
                        type="text"
                        placeholder="Address line 2"
                        className="displayAccountInput2"
                        value={gmail}
                        disabled
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfileAccountSetting;

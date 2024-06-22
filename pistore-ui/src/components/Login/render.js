import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import interactDataUserExist from 'components/Action/InteractDataUserExist';
import logo from '@/assets/images/logo.jpg';
import interactDataUserMatch from 'components/Action/InteractDataUserMatch';

function Render() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [emailExists, setEmailExists] = useState(false);
    const [showSignupButton, setShowSignupButton] = useState(true);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        const loggedInEmail = localStorage.getItem('loggedInEmail');
        const loggedUsername = localStorage.getItem('loggedInUsername');
        if (loggedInStatus === 'true' && loggedInEmail && loggedUsername) {
            setIsLoggedIn(true);
            setEmail(loggedInEmail);
            setUsername(loggedUsername);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
        localStorage.setItem('loggedInEmail', email);
        localStorage.setItem('loggedInUsername', username);
    }, [isLoggedIn, email, username]);

    const handleEmailInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordInputChange = (event) => {
        setPassword(event.target.value);
    };

    const handleContinue = () => {
        const inputEmail = email.trim();
        if (inputEmail !== '') {
            interactDataUserExist(inputEmail, (exists) => {
                setEmailExists(exists);
                if (exists) {
                    setShowSignupButton(false);
                    if (password !== '') {
                        const inputPassword = password.trim();
                        interactDataUserMatch(inputEmail, inputPassword, (result) => {
                            if (result === true) {
                                localStorage.setItem('isLoggedIn', 'true');
                                localStorage.setItem('loggedInEmail', inputEmail);
                                setIsLoggedIn(true);
                                setUsername(inputEmail); // Lưu username khi đăng nhập thành công
                                window.location.href = '/';
                            } else {
                                alert("Email or Password doesn't match");
                            }
                        });
                    }
                } else {
                    alert('Login unsuccessful. Please check your email.');
                    setShowSignupButton(true);
                }
            });
        } else {
            alert('Please enter your email.');
        }
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="div-Auth">
                <div className="d-flex flex-column align-items-center border-bottom border-dark">
                    <img className="imageLogo" src={logo} alt="PiStore Logo" />
                    <h4 className="styleH4">Login or Sign Up</h4>
                    <input
                        id="emailInput"
                        autoComplete="false"
                        className="input-Auth mb-5"
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailInputChange}
                    />
                    {emailExists && (
                        <input
                            id="passWordInput"
                            className="input-Auth mb-5"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordInputChange}
                        />
                    )}
                    <button className="btn-continue-Auth mb-5" onClick={handleContinue}>
                        Continue
                    </button>
                    {showSignupButton && (
                        <Link to={`/signup?email=${email}`}>
                            <button className="btn-continue-Auth mb-5">Sign Up</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Render;

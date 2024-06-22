import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/images/logo.jpg';
import interactDataUserExist from '@/components/Action/InteractDataUserExist';
import interactDataAddUser from '@/components/Action/InteractDataAddUser';
import Swal from 'sweetalert2'; // Import thư viện SweetAlert2

import {
    isValidRoleID,
    isValidBirthday,
    isValidMoney,
    isValidUsername,
    isValidPassword,
    isValidEmail,
    isValidFirstName,
    isValidLastName,
    isValidImage,
} from './validation'; // Import các hàm kiểm tra validation từ file validation.js

function Render() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate().toString();
    const currentMonth = (currentDate.getMonth() + 1).toString(); // Tháng bắt đầu từ 0 nên cần cộng thêm 1
    const currentYear = currentDate.getFullYear().toString();

    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdayDay, setBirthdayDay] = useState(currentDay);
    const [birthdayMonth, setBirthdayMonth] = useState(currentMonth);
    const [birthdayYear, setBirthdayYear] = useState(currentYear);
    const [email, setEmail] = useState('');
    const [showInputs, setShowInputs] = useState(false); // State để kiểm soát việc hiển thị các ô nhập
    const [authDivClass, setAuthDivClass] = useState('div-Auth'); // Thêm biến trạng thái để quản lý lớp CSS

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialEmail = searchParams.get('email');

    useEffect(() => {
        setEmail(initialEmail);
    }, [initialEmail]);

    const handleContinue = async () => {
        const inputEmail = email.trim();
        if (inputEmail !== '' && isValidEmail(inputEmail)) {
            interactDataUserExist(inputEmail, (exists) => {
                if (!exists) {
                    setShowInputs(true); // Hiển thị các ô nhập khi email không tồn tại
                    setAuthDivClass('div-Auth-SignUp'); // Đổi tên lớp CSS thành 'div-Auth' nếu email không tồn tại
                } else {
                    setShowInputs(false);
                    setAuthDivClass('div-Auth'); // Đổi tên lớp CSS thành 'div-Auth-SignUp' nếu email tồn tại
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email already exists. Please try another email.',
                    });
                }
            });
        } else {
            alert('Please enter a valid email.');
            return;
        }

        if (showInputs === true) {
            const userName = email.slice(0, email.indexOf('@'));
            const inputEmail = email.trim();
            const inputPassword = password.trim();
            const inputFirstName = firstName.trim();
            const inputLastName = lastName.trim();
            const inputBirthday = `${birthdayYear}-${birthdayMonth.padStart(2, '0')}-${birthdayDay.padStart(2, '0')}`;
            const userData = {
                RoleID: '2',
                Birthday: inputBirthday,
                Money: '0',
                Username: userName,
                Password: inputPassword,
                Email: inputEmail,
                FirstName: inputFirstName,
                LastName: inputLastName,
                Image: 'https://th.bing.com/th/id/R.0a5e7a1fa5a0c49f27a55ab285e7d375?rik=zzuvfcCsf4I8vw&pid=ImgRaw&r=0',
            };

            if (
                isValidRoleID(userData.RoleID) &&
                isValidBirthday(userData.Birthday) &&
                isValidMoney(userData.Money) &&
                isValidUsername(userData.Username) &&
                isValidPassword(userData.Password) &&
                isValidFirstName(userData.FirstName) &&
                isValidLastName(userData.LastName) &&
                isValidImage(userData.Image)
            ) {
                // Tính độ tuổi từ ngày sinh
                const birthDate = new Date(userData.Birthday);
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();

                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }

                // Kiểm tra độ tuổi
                if (age < 3 || age >= 200) {
                    console.error('Invalid age. Please enter a valid birthdate.');
                    return;
                }

                try {
                    await interactDataAddUser(userData);
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('loggedInEmail', email);
                    localStorage.setItem('loggedInUsername', email.slice(0, email.indexOf('@')));
                    window.location.href = '/';
                } catch (error) {
                    // Handle error
                    console.error('Failed to add user:', error.message);
                }
            } else {
                // Handle validation error
                console.error('Invalid user data. Please check your input.');
            }
        } else {
            setShowInputs(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className={authDivClass}>
                <div className="d-flex flex-column align-items-center border-bottom border-dark">
                    <img className="imageLogo" src={logo} alt="PiStore Logo" />
                    <h4 className="styleH4">Sign Up</h4>
                    <input
                        className="input-Auth mb-5"
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {showInputs && (
                        <>
                            <input
                                className="input-Auth mb-5"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="d-flex mb-3">
                                <input
                                    className="input-Auth-NameInput mr-2"
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    className="input-Auth-NameInput ml-2"
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="d-flex mb-3">
                                <input
                                    className="input-Auth-BirthDayInput mr-2"
                                    type="number"
                                    placeholder="Day"
                                    min="1"
                                    max="31"
                                    value={birthdayDay}
                                    onChange={(e) => setBirthdayDay(e.target.value)}
                                />
                                <input
                                    className="input-Auth-BirthDayInput mr-2"
                                    type="number"
                                    placeholder="Month"
                                    min="1"
                                    max="12"
                                    value={birthdayMonth}
                                    onChange={(e) => setBirthdayMonth(e.target.value)}
                                />
                                <input
                                    className="input-Auth-BirthDayInput ml-2"
                                    type="number"
                                    placeholder="Year"
                                    min="1900"
                                    max="2100"
                                    value={birthdayYear}
                                    onChange={(e) => setBirthdayYear(e.target.value)}
                                />
                            </div>
                        </>
                    )}
                    <button className="btn-continue-Auth mb-5" onClick={handleContinue}>
                        Continue
                    </button>
                </div>
                <div className="text-center">
                    <h5>
                        Have account, <Link to="/login">back to loggin</Link>
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default Render;

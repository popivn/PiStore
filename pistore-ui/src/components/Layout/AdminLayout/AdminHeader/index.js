import React, { useState, useEffect } from 'react';
import Render from './Render';
import interactDataUser from 'components/Action/InteractDataUser';

function AdminHeader() {
    const [avatar, setAvatar] = useState('');
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');

    useEffect(() => {
        const email = localStorage.getItem('loggedInEmail');
        if (email) {
            interactDataUser(email, (userData) => {
                if (userData) {
                    setAvatar(userData.Image);
                    setfName(userData.FirstName);
                    setlName(userData.LastName);
                } else {
                    console.error('Failed to fetch user data');
                }
            });
        } else {
            console.error('Email not found in localStorage');
        }
    }, []);

    return <Render avatar={avatar} name={fname + ' ' + lname} />;
}

export default AdminHeader;

import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Render({ avatar, name }) {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top rounded-bottom rounded-10 mb-0"
            style={{
                height: '70px',
                zIndex: 11,
                marginBottom: '10px',
            }}
        >
            <div className="container d-flex justify-content-between align-items-center">
                <Link className="text-h3 nav-link" to="/">
                    <p className="styleH4-Admin">Home</p>
                </Link>
                <div className="row">
                    <div className="WellCome-admin col-lg-10">
                        <p className="styleH4">Wellcome: {name}</p>
                    </div>
                    <div className="col-lg-2">
                        <img src={avatar} alt="Avatar" className="avatar rounded-circle" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Render;

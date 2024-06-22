import { Link } from 'react-router-dom';
import './index.css';
import logo from './logo.jpg';

function SecondHeader() {
    return (
        <div
            style={{ zIndex: 1 }}
            className="SecondHeader sticky-top d-flex align-items-center justify-content-between"
        >
            <div className="d-flex align-items-center">
                <Link className="navbar-brand m-3" to="/">
                    <img src={logo} alt="PiStore Logo" />
                </Link>
                <p className="GamingStore m-0">Gaming Store</p>
                <button className="text-h2 btn mx-10px ">Game Upload</button>
                <button className="text-h2 btn mx-10px">Support</button>
            </div>
        </div>
    );
}

export default SecondHeader;

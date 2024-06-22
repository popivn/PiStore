import './index.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer bg-dark">
            <div className="footerContent">
                <h4 className="styleH4">About Us</h4>
                <Link to="/contactus" className="styleH6">
                    Contact with us
                </Link>
            </div>
        </footer>
    );
}

export default Footer;

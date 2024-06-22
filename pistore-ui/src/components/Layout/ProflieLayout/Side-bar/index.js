import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './index.css'; // Import CSS cho Sidebar

function Sidebar() {
    return (
        <div className="sidebar-profile">
            <div className="sidebar-item">
                <button className="sidebar-button">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Account Setting</span>
                </button>
            </div>
            {/* Các mục sidebar khác */}
        </div>
    );
}

export default Sidebar;

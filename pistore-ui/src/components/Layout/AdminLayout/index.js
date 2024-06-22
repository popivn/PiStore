import AdminSideBar from './AdminSideBar';
import AdminHeader from './AdminHeader/index.js';
import './index.css';
function AdminLayout({ children }) {
    return (
        <div>
            <AdminHeader />
            <div className="styleBody-Admin container">
                <div className="row">
                    <div className="styleBody-Admin styleDiv-AdminSideBar col-lg-3">
                        <AdminSideBar />
                    </div>
                    <div className="styleBody-Admin styleDiv-Admin col-lg-9">
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;

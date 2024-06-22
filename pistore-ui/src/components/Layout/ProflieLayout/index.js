import Sidebar from './Side-bar';
import SecondHeader from '../DefaultLayout/SecondHeader';
import Footer from '../DefaultLayout/Footer';
function Profile({ children }) {
    return (
        <div>
            <SecondHeader />
            <div className="custom-background-container  ">
                <div className="custom-background-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Sidebar />
                            </div>
                            <div className="Profile-content col-md-9 border border-dark">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;

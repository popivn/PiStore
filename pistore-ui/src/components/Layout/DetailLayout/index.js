import HeaderMain from '../DefaultLayout/Header';
import Footer from '../DefaultLayout/Footer';
import SecondHeader from '../DefaultLayout/SecondHeader';
function DetailLayout({ children }) {
    return (
        <div>
            <SecondHeader />
            <HeaderMain />
            <div className="container">
                <div className="">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailLayout;

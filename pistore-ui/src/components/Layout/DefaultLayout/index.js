import Header from './Header';
import Footer from './Footer';
import SecondHeader from './SecondHeader';

function DefaultLayout({ children }) {
    return (
        <div>
            <SecondHeader />
            <Header />
            <div style={{ minHeight: '80vh' }}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

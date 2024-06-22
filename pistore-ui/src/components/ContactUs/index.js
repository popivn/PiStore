import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './index.css';

function ContactUs() {
    return (
        <div className="custom-background-container">
            <div className="custom-background-overlay text-center">
                <Link className="styleH4-contactus" to="/">
                    <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '0.8em', marginBottom: '2px' }} /> Back
                </Link>
                <div className="container-contactus">
                    <h1 className="styleH1-contact">Your Contact Us Title</h1>
                    <p className="styleH6-contactus">
                        Welcome to our "Contact Us" page! This is where you can directly connect with us and share any
                        feedback, suggestions, or questions you may have.
                    </p>
                    <p className="styleH6-contactus">
                        Here, we believe that every contribution is valuable and plays a crucial role in the development
                        and improvement of our services. Whether it's a small question or a big suggestion, we are
                        committed to listening and responding as promptly and professionally as possible.
                    </p>
                    <form className="formContactus" action="#" method="post">
                        <div className="form-group ">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" className="form-control" required></textarea>
                        </div>
                        <button type="submit" className="btn-contactus">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;

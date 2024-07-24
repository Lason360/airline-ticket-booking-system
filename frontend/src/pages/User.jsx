import React from 'react';
import { Container, Row } from 'reactstrap';
import '../styles/user.css'; // Import the CSS file
import userImg from '../assets/images/user_page.png';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();

    const handleCheckButtonClick1 = () => {
        navigate('/login');
        window.scrollTo(0, 0);
    };

    const handleCheckButtonClick2 = () => {
        navigate('/guest');
        window.scrollTo(0, 0);
    };

    const handleCheckButtonClick3 = () => {
        navigate('/registered_user');
        window.scrollTo(0, 0);
    };

    return (
        <section className="background-container"> {/* Add a class for styling background */}
            <Container>
                <section className="user-container">
                    <div className="button-container">
                        <button className="btn-primary-new" onClick={handleCheckButtonClick1}>
                            Registered User
                        </button>

                        <button className="btn-primary-new" onClick={handleCheckButtonClick2}>
                            Guest
                        </button>
                    </div>
                    <Row>
                        <p>  </p>
                        <p>  </p>
                    </Row>
                    <Row className ="row-message">
                        <p>Not registered yet?</p>
                    </Row>

                    <button className="btn-primary-new2" onClick={handleCheckButtonClick3}>
                        Register Now
                    </button>
                    </section>
            </Container>
        </section>
    );
};

export default User;

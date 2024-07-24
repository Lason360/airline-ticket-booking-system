import React, { useState } from 'react';
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate} from 'react-router-dom';
import registerImg from '../assets/images/plane_Register.jpg';
import { FcGoogle } from 'react-icons/fc';
import '../styles/register.css';
import axios from 'axios';

const Register = () => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  const navigateToLogin = () => {
    // navigate to /login
    navigate('/login');
  };

  const handleRegistration = () => {
    const userData = {
      email: credentials.email,
      password: credentials.password,
    };

    // Send a POST request to your Flask backend
    axios.post('http://127.0.0.1:5000/signup', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        navigateToLogin();
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors from the backend (e.g., display an error message)
        console.error(error);
      });
  };

  return (
    <section>
    <Container>
      <Row>
        <Col lg="8" className="m-auto">
          <div
            className="reg__container d-flex justify-content-between"
            style={{ backgroundImage: `url(${registerImg})` }}
          >
            <div className="login__form">
              <h2>Register</h2>
              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    id="box-log"
                    onChange={handleChange}
                    style={{ '::placeholder': { color: 'black' } }}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    required
                    id="box-log"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    required
                    id="box-log"
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button className="btn secondary__btn auth__btn" type="submit" onClick={handleRegistration}>
                  Create Account
                </Button>
                <Button className="btn google__btn auth__btn " type="submit">
                  <FcGoogle />
                  Sign up with Google
                </Button>
              </Form>
              <p>
                Already have an account?<Link to="/login">Login </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default Register;


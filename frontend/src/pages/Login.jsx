import React ,{useEffect, useState}from 'react'
import '../styles/login.css'
import{Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import loginImg from '../assets/images/plane-login.webp'
import axios from 'axios';
// import {FcGoogle} from 'react-icons/fc'
// import {app} from '../config/firebase-config'
// import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

// const [auth, setAuth]= useState(false||window.localStorage.getItem("auth")==="true")
const Login = ({setAuth}) => 
{

  // const firebaseAuth = getAuth(app);
  // const provider = new GoogleAuthProvider();

  const navigate = useNavigate();


  
  const [credentials, setCredentials] = useState({
    email:'',
    password:''
  });

  const token = sessionStorage.getItem("token");

  const handleChange = e =>{
    setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value}))
  }


  const handleClick = e => {
    e.preventDefault();
  }

  const navigateToHome = () => {
    // navigate to /Home
    navigate('/Home');
  };

  const handleLogin = () => {
    // const history = useHistory();
    const userData = {
      // userName: credentials.userName,
      email: credentials.email,
      password: credentials.password,
      token:token
    };
    // console.log(userData);
    // Send a POST request to your Flask backend
    axios.post('http://127.0.0.1:5000/login', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        // Handle the response from the backend (e.g., show a success message)
        if(response.data && response.data.access_token){
          alert("Successfully Login");
          sessionStorage.setItem("token", response.data.access_token);
          navigateToHome();
          // return (<MessageComponent content="Please read the comments carefully"></MessageComponent>);
        } else{
          console.error('Invalid response from server:', response.data);
        }
        
      })
      .catch(error => {
        // Handle errors from the backend (e.g., display an error message)
        // console.error(error);
        if(error.response.status===401){
          alert("Invalid Credentials");
        }
      });
  };


  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className='m-auto'>
          <div
            className="login__container d-flex justify-content-between"
            style={{ backgroundImage: `url(${loginImg})` }}
          >
              

              <div className="login__form">
                <h2 className='head_login'>Login</h2>
                {/* <Form onSubmit={handleClick}> */}
                  <FormGroup>
                    <input type="email" placeholder="Email" required id="box-log" name="email" onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required id="box-log" name = "password" onChange={handleChange}/>
                  </FormGroup>
                  
                  <Button className="btn_secondary1"  onClick={handleLogin}>
                    Login
                  </Button>
                  {/* <Button className='btn google__btn auth__btn ' type="submit" onClick={loginWithGoogle}>
                  <FcGoogle/>
                    Sign in with Google
                    </Button>
                     */}
                {/* </Form> */}
                <p >Don't have an account?<Link to='/register' >Create </Link></p>
              </div>
 
            </div>
            
          </Col>
          
        </Row>
      </Container>

    </section>
  )
}

export default Login
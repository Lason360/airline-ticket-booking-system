import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

const Profile = () => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const handleCheckButtonClick = () => {
        navigate('/user');
        window.scrollTo(0, 0); 
    };

    const handleprofile = () => {
        // const history = useHistory();
        const userData = {
          token:token
        };
        // console.log(userData);
        // Send a POST request to your Flask backend
        axios.post('http://127.0.0.1:5000/profile/', userData, {
          headers: {
            Authorization: "Bearer" + token,
          },
        })
          .then(response => {
            // Handle the response from the backend (e.g., show a success message)
            if(response.data && response.data.access_token){
              
            } else{
              console.error('Invalid response from server:', response.data);
            }
            
          })
          .catch(error => {
            // Handle errors from the backend (e.g., display an error message)
            console.error(error);
          });
      };

    return (
        <section>
            <Container>
        <button className="btn-primary" onClick={handleprofile}>
            Next
        </button>
        </Container>
        </section>
    );
};

export default Profile;

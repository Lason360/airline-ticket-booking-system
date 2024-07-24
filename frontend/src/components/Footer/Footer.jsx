import React from 'react'
import './footer.css'
import {Container, Row, Col, ListGroup,ListGroupItem} from 'reactstrap'

import {Link} from 'react-router-dom'
// import logoghj from "../../assets/images/logo.png"
import logo from "../../assets/images/logo2.jpg"


const quick__links=[
  {
   path:'/home',
   display:'Home'
  },
  {
   path:'/about',
   display:'About'
  },
  {
   path:'/offers',
   display:'Offers'
  },

  {
    path:'/services',
    display:'Services'
   },


   
]

const quick__links2=[
  {
   path:'/gallery',
   display:'Popular routes'
  },
  {
   path:'/login',
   display:'Login'
  },
  {
   path:'/register',
   display:'Register'
  },
]



const Footer = () => {

const year = new Date().getFullYear()
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <img src={logo} alt=""/>
            <p>Elevate your travel experience into a seamless journey with B Airlines' innovative services and unbeatable travel solutions.</p>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to="#"><i class="ri-youtube-fill"></i></Link>
              </span>
              <span>
                <Link to="#"><i class="ri-github-fill"></i></Link>
              </span>
              <span>
                <Link to="#"><i class="ri-facebook-circle-fill"></i></Link>
              </span>
              <span>
                <Link to="#"><i class="ri-instagram-fill"></i></Link>
              </span>
            </div>
          </Col>


          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path} onClick={scrollToTop}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>


          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path} onClick={scrollToTop}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>



          <Col lg='3'>
            <h5 className ="footer__link-title">Contact</h5>
            
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                    <i class="ri-mail-send-fill"></i>
                    </span>
                    Email:
                  </h6>
                  <p className="mb-0 d-flex align-items-center gap-2">bAirline@gmail.com</p>
                </ListGroupItem>



                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                    <i class="ri-phone-fill"></i>
                    </span>
                    Phone:
                  </h6>
                  <p className="mb-0 d-flex align-items-center gap-2">0761234568</p>
                </ListGroupItem>



                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span>
                    <i class="ri-message-2-fill"></i>
                    </span>
                    Text  :
                  </h6>
                  <p className="mb-0 d-flex align-items-center gap-2">0761234568</p>
                </ListGroupItem>
          </Col>



          <Col lg='12' className="text-center pt-5">
            <p className="copyright">Copyright {year}, design and develop by B Airline. All rights are reserved.  </p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroImg01 from '../assets/images/main.png';
import ServiceList from '../services/ServiceList';
import ImagesGallery from '../components/Image-gallery/ImagesGallery';
import Newsletter from '../shared/Newsletter';
import ReservationForm from '../shared/ReservationForm/Reservationform';

const Home = () => {
  return (
    <div className="page-container">
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__img-box">
                <img className="top img-fluid" src={heroImg01} alt="" />
              </div>
            </Col>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <div className="sub">Discover Seamless Travel</div>
                </div>

                <h1>
                  Time to <span className="highlight">travel</span> with us
                </h1>
                <p>
                  Welcome to B airline Reservations. Fly with us today and unlock the B airline Experience!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />

            <Col lg="12">
              <div className="head">Book a trip</div>
            </Col>
          </Row>
        </Container>
      </section>

      <ReservationForm />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="gallery__title">Popular Routes</h2>
            </Col>
            <Col lg="12">
              <ImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;

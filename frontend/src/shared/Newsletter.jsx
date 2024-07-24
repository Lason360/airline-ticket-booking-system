import React from 'react'


import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'


const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2> Subscribe now to get new information.</h2>
                    <div className="newsletter__input">
                    <input type="email" placeholder="Enter your Email"/>
                    <button className="btn newsletter__btn">Subscribe</button>
                    </div>

                    <p>
                    By subscribing, you will receive regular updates and the latest information about our airline ticket booking services, which can help you make well-informed travel decisions. Additionally, as a subscriber, you may also gain access to exclusive discounts and special offers, providing you with opportunities to save on your next flight booking.
                    </p>
                    

                </div>
            </Col>
            <Col lg="6"></Col>
            
        </Row>
    </Container>
  </section>
}

export default Newsletter
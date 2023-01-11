import React from 'react';
import '../Components/styles/home.css'
import banner from './images/SwapiBanner.png'
import { Container, Row} from 'react-bootstrap';
import HomeCarousel from './HomeCarousel';

const Homepage = () => {
    return(
      <Container>
        <Row className='banner'>
        <img src={banner} alt=""/>
        </Row>
        <Row>
          <HomeCarousel />
        </Row>
      </Container>
    )
};

export default Homepage;

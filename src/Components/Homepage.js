import React from 'react';
import '../Components/styles/home.css'
import banner from '../images/SwapiBanner.png'
import { Container, Row, Col } from 'react-bootstrap';
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


{/* <div className="homepage">
<div className="picture">
  <img src={logo} alt="Me and my Dog Coco" className='profile'/>
</div>
<div className="bio">
  <p>
    Hi there! My name is Jeffrey and I am a coder who is learning and experimenting with web development. I love Star Wars, so creating this app was an easy combination for me to try out some new skills. I hope you enjoy using it!
  </p>
</div>
</div> */}

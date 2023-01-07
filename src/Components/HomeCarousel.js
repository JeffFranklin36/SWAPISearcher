import React from 'react';
import '../Components/styles/home.css'
import PlanetsBanner from '../images/PlanetsBanner.jpg'
import PeopleBanner from '../images/PeopleBanner.webp'
import SpeciesBanner from '../images/SpeciesBanner.jpeg'
import StarshipBanner from '../images/StarshipBanner.jpg'
import VehicleBanner from '../images/VehicleBanner.jpg'
import  Carousel  from 'react-bootstrap/Carousel';
import  Card  from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const HomeCarousel = () => {
 return (
  <Carousel className='carousel'>
    <Carousel.Item>
    <Card className='card'>
         <Card.Img className='cardimg' variant="top" src={PlanetsBanner} alt="Star Wars Planets" />
           <Card.Body>
             <Card.Title>Planet Search</Card.Title>
             <Card.Text>
              Explore up to 60 planets in the Star Wars Universe, and discover things about their climate and populace
             </Card.Text>
           <Link to='/planets'>
            <button className='carouselbutton'>Go there!</button>
           </Link>  
           </Card.Body>
       </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card className='card'>
         <Card.Img className='cardimg' variant="top" src={PeopleBanner} alt="Star Wars Characters" />
           <Card.Body>
             <Card.Title>People Search</Card.Title>
             <Card.Text>Ever wondered exactly how tall Chewbaca was? Our People Searcher has the answer!</Card.Text>
            <Link to='/people'>
              <button className='carouselbutton'>Go there!</button>
            </Link>  
           </Card.Body>
       </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card>
         <Card.Img className='cardimg' variant="top" src={SpeciesBanner} alt="Star Wars Cantina Aliens" />
           <Card.Body>
             <Card.Title>Species Search</Card.Title>
             <Card.Text>Finally a tool that can easily tell you what language Sebulba speaks!</Card.Text>
             <Link to='/species'>
              <button className='carouselbutton'>Go there!</button>
            </Link>
           </Card.Body>
       </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card>
         <Card.Img className='cardimg' variant="top" src={StarshipBanner} alt="Jedi Interceptors" />
           <Card.Body>
             <Card.Title>Starship Search</Card.Title>
             <Card.Text>Who manufactured your favorite starfighter? Swapi Searcher can tell you!</Card.Text>
             <Link to='/starships'>
              <button className='carouselbutton'>Go there!</button>
            </Link>
           </Card.Body>
       </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card>
         <Card.Img className='cardimg' variant="top" src={VehicleBanner} alt="AT-AT Walker" />
           <Card.Body>
             <Card.Title>Vehicle Search</Card.Title>
             <Card.Text>
              How many crewpeople does an At-At have? I guess will have to find out!
             </Card.Text>
             <Link to='/vehicles'>
              <button className='carouselbutton'>Go there!</button>
            </Link>
           </Card.Body>
       </Card>
    </Carousel.Item>
  </Carousel>
 );
};

export default HomeCarousel;
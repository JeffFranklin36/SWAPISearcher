import { Row, Col, Card, Container } from 'react-bootstrap';
import '../styles/results.css'
import logo from '../images/notFound.webp'
import { Link } from 'react-router-dom';

const NoResults = () => { 
 return(
  <Container>
   <Row>
   <Col xs={12} md={4}  className='notFound'>
     <Card className='w-100 h-100'>
         <Card.Img className='w-100 h-100' variant="top" src={logo} alt="No Results Found" />
           <Card.Body>
             <Card.Title>No Results Found</Card.Title>
             <Card.Text>Not finding what youre looking for? Consider adding it to the archives!</Card.Text>
             <Link to='/addResults'>
              <button className='carouselbutton'>Add More</button>
             </Link>               
           </Card.Body>
       </Card>
   </Col>
 </Row>
 </Container>
 )

}

export default NoResults;
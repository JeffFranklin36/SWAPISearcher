import { Row, Col, Card } from 'react-bootstrap';
import '../Components/styles/results.css'
import logo from '../images/notFound.webp'

const NoResults = () => { 
 return(
   <Row>
   <Col xs={12} md={4}  className='notFound'>
     <Card className='w-100 h-100'>
         <Card.Img className='w-100 h-100' variant="top" src={logo} alt="No Results Found" />
           <Card.Body>
             <Card.Title>No Results Found</Card.Title>
             <Card.Text>Please try again with a different search term.</Card.Text>
           </Card.Body>
       </Card>
   </Col>
 </Row>
 )

}

export default NoResults;
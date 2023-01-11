import { Row, Col, Card } from 'react-bootstrap';

function VehicleResults({results}) {
  return (
   <Row>
   {results.map(result => (
     <Col className='container' xs={12} md={4} key={result.name}>
       <Card key={result.name} className="card">
         <Card.Body>
           <Card.Title>{result.name}</Card.Title>
             <Card.Text>
              Manufacturer: {result.manufacturer}
              </Card.Text>
             <Card.Text>
              Model: {result.model}
              </Card.Text>
             <Card.Text>
              Cost: {result.cost_in_credits} Credits
              </Card.Text>
             <Card.Text>
              Capacity: {result.crew} crewmen & {result.passengers} passengers
             </Card.Text>
         </Card.Body>
       </Card>
     </Col>
   ))}
 </Row>
  );
}

export default VehicleResults;
import { Row, Col, Card } from 'react-bootstrap';

function PlanetResults({results}) {
  return (
   <Row>
   {results.map(result => (
     <Col className='container' xs={12} md={4} key={result.name}>
       <Card key={result.name} className="card">
         <Card.Body>
           <Card.Title>{result.name}</Card.Title>
           <Card.Text>
             Population: {result.population}
           </Card.Text>
           <Card.Text>
             Terrain: {result.terrain}
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
    ))}
   </Row>
  );
}

export default PlanetResults;
import { Row, Col, Card } from 'react-bootstrap';

function SpeciesResults({results}) {
  return (
   <Row>
   {results.map(result => (
     <Col className='container' xs={12} md={4} key={result.name}>
       <Card key={result.name} className="card">
         <Card.Body>
           <Card.Title>{result.name}</Card.Title>
         <Card.Text>
         Classification: {result.classification}
         </Card.Text>
         <Card.Text>
         Designation: {result.designation}
         </Card.Text>
         <Card.Text>
         Language: {result.language}
         </Card.Text>
         </Card.Body>
       </Card>
     </Col>
   ))}
 </Row>
  );
}

export default SpeciesResults;
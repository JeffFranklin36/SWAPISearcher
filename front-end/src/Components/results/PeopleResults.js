import { Row, Col, Card } from 'react-bootstrap';

function PeopleResults({results}) {
  return (
        <Row>
          {results.map(result => (
            <Col className='container' xs={12} md={4} key={result.name}>
              <Card className="card">
                <Card.Body>
                  <Card.Title>{result.name}</Card.Title>
                  <Card.Text>
                    Gender: {result.gender}
                  </Card.Text>
                  <Card.Text>
                    Weight: {result.mass} Kilograms
                  </Card.Text>
                  <Card.Text>
                    Height: {result.height} Meters
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
  );
}

export default PeopleResults;
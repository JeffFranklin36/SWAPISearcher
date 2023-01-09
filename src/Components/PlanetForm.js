import React from 'react';
import { Form, Container, Col, Row, Card } from 'react-bootstrap';
import '../Components/styles/form.css'
import AddResults from './AddResults';

const PlanetForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("successfully submitted")
  };

  return (
   <Container>
    <AddResults/>
    <Card>
      <Card.Body className='cardbody'>
        <Form onSubmit={handleSubmit} className="form">
          <Row>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" maxLength={50} />
            </Form.Group>

            <Form.Group as={Col} controlId="formClimate">
              <Form.Label>Climate</Form.Label>
              <Form.Control type="text" maxLength={50} />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formDiameter">
              <Form.Label>Diameter</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formTerrain">
              <Form.Label>Terrain</Form.Label>
              <Form.Control type="text" maxLength={50} />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formOrbitalPeriod">
              <Form.Label>Orbital Period</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formPopulation">
              <Form.Label>Population</Form.Label>
              <Form.Control type="number"  />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formRotationPeriod">
              <Form.Label>Rotation Period</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formSurfaceWater">
              <Form.Label>Surface Water</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Row>
          <button className='formbutton' type='submit'>Submit</button>
        </Form>
      </Card.Body>
    </Card>
   </Container>
  );
};

export default PlanetForm;


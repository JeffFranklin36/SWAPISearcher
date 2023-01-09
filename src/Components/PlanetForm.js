import React from 'react';
import { Form, Container, Col, Row, Card } from 'react-bootstrap';
import banner from '../images/SwapiBanner.png'
import '../Components/styles/form.css'

const PlanetForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const population = event.target.elements.formPopulation.value;
    if (population !== "unknown" && isNaN(population)) {
      console.log("error")
      return;
    }
    console.log("successfully submitted")
  };

  return (
   <Container>
     <Row className='banner'>
        <img src={banner} alt=""/>
     </Row>
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

            <Form.Group as={Col} controlId="formGravity">
              <Form.Label>Gravity</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formOrbitalPeriod">
              <Form.Label>Orbital Period</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formPopulation">
              <Form.Label>Population</Form.Label>
              <Form.Control type="text" />
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

          <Form.Group controlId="formTerrain">
            <Form.Label>Terrain</Form.Label>
            <Form.Control type="text" maxLength={50} />
          </Form.Group>
          <Row>
           <button className='button' type='submit'>Submit</button>
           </Row>
        </Form>
      </Card.Body>
    </Card>
   </Container>
  );
};

export default PlanetForm;


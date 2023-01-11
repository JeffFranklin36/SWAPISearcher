import React from 'react';
import { Form, Container, Col, Row, Card } from 'react-bootstrap';
import '../styles/form.css'
import AddResults from '../forms/AddResults';

const CreateStarship = () => {
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

            <Form.Group as={Col} controlId="formModel">
              <Form.Label>Model</Form.Label>
              <Form.Control type="text" maxLength={100} />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formCrew">
              <Form.Label>Crew</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formPassengers">
              <Form.Label>Passengers</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formManufacturer">
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control type="text" maxLength={100} />
            </Form.Group>

            <Form.Group as={Col} controlId="formStarshipClass">
              <Form.Label>Starship Class</Form.Label>
              <Form.Control type="text"  maxLength={100}/>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formCargoCapacity">
              <Form.Label>Cargo Capacity</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formConsumables">
              <Form.Label>Consumables</Form.Label>
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

export default CreateStarship;
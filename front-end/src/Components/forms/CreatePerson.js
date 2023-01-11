import React from 'react';
import { Form, Container, Col, Row, Card } from 'react-bootstrap';
import '../styles/form.css'
import AddResults from '../forms/AddResults';

const CreatePerson = () => {
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

            <Form.Group as={Col} controlId="formBirthYear">
              <Form.Label>Birth Year</Form.Label>
              <Form.Control type="text" maxLength={50} />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" maxLength={50} />
            </Form.Group>

            <Form.Group as={Col} controlId="formHairColor">
              <Form.Label>Hair Color</Form.Label>
              <Form.Control type="text" maxLength={50} />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formEyeColor">
              <Form.Label>Eye Color</Form.Label>
              <Form.Control type="text" maxLength={50}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formHeight">
              <Form.Label>Height</Form.Label>
              <Form.Control type="text" maxLength={50} />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="Weight">
              <Form.Label>Weight</Form.Label>
              <Form.Control type="text" maxLength={50} />
            </Form.Group>

            <Form.Group as={Col} controlId="formSkinColor">
              <Form.Label>Skin Color</Form.Label>
              <Form.Control type="text" maxLength={50} />
            </Form.Group>
          </Row>
           <button className='formbutton' type='submit'>Submit</button>
        </Form>
      </Card.Body>
    </Card>
   </Container>
  );
};

export default CreatePerson;
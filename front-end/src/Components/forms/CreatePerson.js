import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Form, Container, Col, Row, Card } from 'react-bootstrap';
import '../styles/form.css'
import AddResults from '../forms/AddResults';

const CreatePerson = () => {

  const [name, setName] = useState('')
  const [gender, setGender] = useState()
  const [eyeColor, setEyeColor] = useState('')
  const [weight, setWeight] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [hairColor, setHairColor] = useState('')
  const [height, setHeight] = useState('')
  const [skinColor, setSkinColor] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit= async (e) => {
    e.preventDefault()

    const person = { name, gender, eyeColor, weight, birthYear, hairColor, height, skinColor } 
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/people`
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(person),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()

    if (!response.ok) {
      setError(data.error)
    }
    if (response.ok) {
      setError(null)
      setName('')
      setGender('')
      setEyeColor('')
      setWeight('')
      setBirthYear('')
      setHairColor('')
      setHeight('')
      setSkinColor('')
      console.log('new person added:', data);
      navigate('/people')
    }
  }

  return (
   <Container>
    <AddResults/>
    <Card>
      <Card.Body className='cardbody'>
        <Form onSubmit={handleSubmit} className="form">
          <Row>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
               type="text" maxLength={50}
               required="required" 
               onChange={(e) => setName(e.target.value)}
               value={name}
               placeholder="Enter Character Name" 
               />
            </Form.Group>

            <Form.Group as={Col} controlId="formBirthYear">
              <Form.Label>Birth Year</Form.Label>
              <Form.Control
               type="text" maxLength={50}
               onChange={(e) => setBirthYear(e.target.value)}
               value={birthYear}
               placeholder="Enter Character Birth Year" 
               />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
               type="text" maxLength={50}
               onChange={(e) => setGender(e.target.value)}
               value={gender}
               placeholder="Enter Character Gender" 
               />
            </Form.Group>

            <Form.Group as={Col} controlId="formHairColor">
              <Form.Label>Hair Color</Form.Label>
              <Form.Control
               type="text" maxLength={50}
               onChange={(e) => setHairColor(e.target.value)}
               value={hairColor}
               placeholder="Enter Character Hair Color"
               />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formEyeColor">
              <Form.Label>Eye Color</Form.Label>
              <Form.Control
               type="text" maxLength={50}
               onChange={(e) => setEyeColor(e.target.value)}
               value={eyeColor}
               placeholder="Enter Character Eye Color" 
               />
            </Form.Group>

            <Form.Group as={Col} controlId="formHeight">
              <Form.Label>Height</Form.Label>
              <Form.Control
               type="text" maxLength={50}
               onChange={(e) => setHeight(e.target.value)}
               value={height}
               placeholder="Enter Character Height" 
               />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="Weight">
              <Form.Label>Weight</Form.Label>
              <Form.Control
               type="text" maxLength={50}
               onChange={(e) => setWeight(e.target.value)}
               value={weight}
               placeholder="Enter Character Weight" 
               />
            </Form.Group>

            <Form.Group as={Col} controlId="formSkinColor">
              <Form.Label>Skin Color</Form.Label>
              <Form.Control
               type="text" maxLength={50}
               onChange={(e) => setSkinColor(e.target.value)}
               value={skinColor}
               placeholder="Enter Character Skin Color" 
               />
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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Form, Container, Col, Row, Card } from 'react-bootstrap';
import '../styles/form.css'
import AddResults from '../forms/AddResults';

const CreatePlanet = () => {

  const [name, setName] = useState('')
  const [climate, setClimate] = useState()
  const [diameter, setDiameter] = useState('')
  const [terrain, setTerrain] = useState('')
  const [orbitalPeriod, setOrbitalPeriod] = useState('')
  const [population, setPopulation] = useState('')
  const [rotationPeriod, setRotationPeriod] = useState('')
  const [surfaceWater, setSurfaceWater] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit= async (e) => {
    e.preventDefault()

    const planet = { name, climate, diameter, terrain, orbitalPeriod, rotationPeriod, population, surfaceWater } 
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/planets`
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(planet),
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
      setClimate('')
      setDiameter('')
      setTerrain('')
      setOrbitalPeriod('')
      setPopulation('')
      setRotationPeriod('')
      setSurfaceWater('')
      console.log('new planet added:', data);
      navigate('/planets')
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
               type="text"
               maxLength={50}
               required="required" 
               onChange={(e) => setName(e.target.value)}
               value={name}
               placeholder="Enter Planet Name" 
                />
            </Form.Group>

            <Form.Group as={Col} controlId="formClimate">
              <Form.Label>Climate</Form.Label>
              <Form.Control 
               type="text"
               maxLength={50}
               onChange={(e) => setClimate(e.target.value)}
               value={climate}
               placeholder="Enter Climate" 
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formDiameter">
              <Form.Label>Diameter</Form.Label>
              <Form.Control
               type="number"
               onChange={(e) => setDiameter(e.target.value)}
               value={diameter}
               placeholder="Enter Diameter" 
               />
            </Form.Group>

            <Form.Group as={Col} controlId="formTerrain">
              <Form.Label>Terrain</Form.Label>
              <Form.Control 
               type="text"
               maxLength={50}
               required="required" 
               onChange={(e) => setTerrain(e.target.value)}
               value={terrain}
               placeholder="Enter Terrain" 
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formOrbitalPeriod">
              <Form.Label>Orbital Period</Form.Label>
              <Form.Control
               type="number"
               onChange={(e) => setOrbitalPeriod(e.target.value)}
               value={orbitalPeriod}
               placeholder="Enter Orbital Period"
               />
            </Form.Group>

            <Form.Group as={Col} controlId="formPopulation">
              <Form.Label>Population</Form.Label>
              <Form.Control
               type="number"
               required="required"
               onChange={(e) => setPopulation(e.target.value)}
               value={population}
               placeholder="Enter Population"
               />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="formRotationPeriod">
              <Form.Label>Rotation Period</Form.Label>
              <Form.Control
               type="number"
               onChange={(e) => setRotationPeriod(e.target.value)}
               value={rotationPeriod}
               placeholder="Enter Rotation Period"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formSurfaceWater">
              <Form.Label>Surface Water</Form.Label>
              <Form.Control
               type="number"
               onChange={(e) => setSurfaceWater(e.target.value)}
               value={surfaceWater}
               placeholder="Enter Surface Water"
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

export default CreatePlanet;

 
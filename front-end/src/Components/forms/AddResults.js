import React, { useState } from 'react';
import { Form, Dropdown, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../images/SwapiBanner.png'
import '../styles/form.css'

function AddResults() {
  const options = ['Planets', 'People', 'Species', 'Starships', 'Vehicles'];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event);
  };

  return (
<Container>
  <Row className='banner'>
    <img src={banner} alt=""/>
  </Row>
  <Row>
    <Form.Group controlId="formDropdown">
      <Form.Label>Select an option:</Form.Label>
      <Dropdown onSelect={handleChange}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {selectedOption || 'Select an option'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {options.map((option) => (
            <Dropdown.Item key={option} eventKey={option}>
              {option === "Planets" ? (
                <Link to="/createPlanet">{option}</Link>
              ) : option === "People" ? (
                <Link to="/createPerson">{option}</Link>
              ) : option === "Species" ? (
                <Link to="/createSpecies">{option}</Link>
              ) : option === "Starships" ? (
                <Link to="/createStarship">{option}</Link>
              ) : option === "Vehicles" ? (
                <Link to="/createVehicle">{option}</Link>
              ) : (
                option
              )}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>
  </Row>
</Container>
  );
}

export default AddResults;

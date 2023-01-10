import React, { useState } from 'react';
import { Form, Dropdown, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../images/SwapiBanner.png'
import '../Components/styles/form.css'

function AddResults() {
  const options = ['Planets', 'People', 'Species', 'Starships', 'Vehicles'];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <Row className='banner'>
        <img src={banner} alt=""/>
      </Row>
      <Row>
      <Form.Group controlId="formDropdown">
        <Dropdown onSelect={handleChange}>
          <Dropdown.Toggle id="dropdown-basic">
            {selectedOption || 'Form Select'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {options.map((option) => (
              <Dropdown.Item key={option} eventKey={option}>
                {option === "Planets" ? (
                  <Link to="/planetForm">{option}</Link>
                ) : option === "People" ? (
                  <Link to="/peopleForm">{option}</Link>
                ) : option === "Species" ? (
                  <Link to="/speciesForm">{option}</Link>
                ) : option === "Starships" ? (
                  <Link to="/starshipForm">{option}</Link>
                ) : option === "Vehicles" ? (
                  <Link to="/vehicleForm">{option}</Link>
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

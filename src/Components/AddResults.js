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
    <>
      <Row className='banner'>
        <img src={banner} alt=""/>
      </Row>
      <Row>
      <Form.Group controlId="formDropdown">
        <Form.Label>Select an option:</Form.Label>
        <Dropdown onSelect={handleChange}>
          <Dropdown.Toggle id="dropdown-basic">
            {selectedOption || 'Select an option'}
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
    </>
  );
}

export default AddResults;

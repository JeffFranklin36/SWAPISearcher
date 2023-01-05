import React, { useState } from 'react';
import './results.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/notFound.webp'
import { Container, Row, Col, Card } from 'react-bootstrap';

const PlanetSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(`https://swapi.dev/api/planets?search=${query}`)
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
        setSearched(true);
      });
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={4} className='w-100'>
          <form className='search' onSubmit={handleSearch}>
            <div className='box'>
              <input
                type="text"
                id="query"
                placeholder='Search Planets'
                className='input w-75'
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
              <button type="submit" className="button w-25">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
        </Col>
      </Row>
      {searched && results.length === 0 ? (
        <Row>
          <Col xs={12} md={4}  className='notFound'>
            <Card className='w-100 h-100'>
                <Card.Img className='w-100 h-100' variant="top" src={logo} alt="No Results Found" />
                  <Card.Body>
                    <Card.Title>No Results Found</Card.Title>
                    <Card.Text>Please try again with a different search term.</Card.Text>
                  </Card.Body>
              </Card>
          </Col>
        </Row>
    ) : (
      <Row>
        {results.slice(0, 9).map(result => (
          <Col className='container' xs={12} md={4} key={result.name}>
            <Card key={result.name} className="card">
              <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <Card.Text>
                <p>Population: {result.population}</p>
                <p>Terrain: {result.terrain}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      )}
    </Container>
  );
}

export default PlanetSearch;


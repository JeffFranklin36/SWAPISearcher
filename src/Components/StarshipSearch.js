import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './results.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NoResults from './NoResults';
import Pagination from './Pagination';

const StarshipSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const handleSearch = (event) => {
    if (event) {
      event.preventDefault();
    }
    setPage(page);
    axios.get(`https://swapi.dev/api/starships?search=${query}&page=${page}`)
      .then(response => {
        setResults(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10));
        setSearched(true);
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  const handlePagination = () => {
    console.log(`Page: ${page}`);
    handleSearch();
  };
  
  useEffect(() => {
    handlePagination();
  }, [page]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={4} className='w-100'>
          <form className='search' onSubmit={event => handleSearch(event)}>
            <div className='box'>
              <input
                type="text"
                id="query"
                placeholder='Search Starships'
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
        <NoResults/>
         ) : (
          <Row>
            {results.map(result => (
              <Col className='container' xs={12} md={4} key={result.name}>
                <Card key={result.name} className="card">
                  <Card.Body>
                    <Card.Title>{result.name}</Card.Title>
                    <Card.Text>
                      <p>Manufacturer: {result.manufacturer}</p>
                      <p>Model: {result.model}</p>
                      <p>Cost: {result.cost_in_credits} Credits</p>
                      <p>Capacity: {result.crew} crewmen & {result.passengers} passengers</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
        {searched && results.length > 0 && totalPages > 1 && (
          <Pagination handleSearch={handleSearch} page={page} setPage={setPage} totalPages={totalPages}/>
        )}
    </Container>
  );
};

export default StarshipSearch;
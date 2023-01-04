import React, { useState} from 'react';
import './results.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import logo from '../images/notFound.webp'

const VehicleSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(`https://swapi.dev/api/vehicles?search=${query}`)
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
        setSearched(true);
      });
  };

  return (
    <div className='body'>
      <form className='search' onSubmit={handleSearch}>
        <div className='box'>
          <input
            type="text"
            id="query"
            placeholder='Search Vehicles'
            className='input'
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <button type="submit" className="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
      {searched && results.length === 0 ? (
          <div className='notFound'>
           <img src={logo} alt="No Results Found" />
          </div>
      ) : (
          <div className="grid-container">
            {results.slice(0, 9).map(result => (
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
            ))}
          </div>
    )}
    </div>
  );
}

export default VehicleSearch;
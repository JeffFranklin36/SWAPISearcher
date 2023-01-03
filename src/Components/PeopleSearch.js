import React, { useState, useEffect } from 'react';
import './results.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const PeopleSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people?search=${query}`)
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
      });
  }, [query]);

  return (
    <div>
     <div className='box'>
      <form className='search'>
        <input
          type="text"
          id="query"
          className='input'
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
      </form>
      <FontAwesomeIcon className="icon" icon={faSearch} />
      </div>
      <div className="grid-container">
        {results.slice(0, 9).map(result => (
          <div key={result.name} className="card">
            <h2>{result.name}</h2>
            <p>Gender: {result.gender}</p>
            <p>Weight: {result.mass} Kilograms</p>
            <p>Height: {result.height} Meters</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PeopleSearch;


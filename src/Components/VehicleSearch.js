import React, { useState, useEffect } from 'react';
import './results.css'

const VehicleSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicles?search=${query}`)
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
      });
  }, [query]);

  return (
    <div>
      <form>
        <label htmlFor="query">Search:</label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
      </form>
      <div className="grid-container">
        {results.slice(0, 9).map(result => (
          <div key={result.name} className="card">
            <h2>{result.name}</h2>
            <p>Manufacturer: {result.manufacturer}</p>
            <p>Model: {result.model}</p>
            <p>Cost: {result.cost_in_credits} Credits</p>
            <p>Capacity: {result.crew} crewmen & {result.passengers} passengers</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehicleSearch;
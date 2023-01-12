//react features and axios
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

//styling
import '../styles/results.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../images/SwapiBanner.png'

//external components
import NoResults from '../results/NoResults';
import Pagination from '../results/Pagination';
import PlanetResults from '../results/PlanetResults';

const PlanetSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearch = useCallback(async (event) => {
    if (event) {
      event.preventDefault();
    }
    if(query.length >= -1) {
      setPage(page);
      console.log('searching planets', query)
      try {
        const response = await axios.get(`https://swapi.dev/api/planets?search=${query}&page=${page}`)
        console.log(response.data.results)
        setResults(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10));
        setSearched(true);
      } catch (error) {
        console.error(error);
      }
      console.log(page)
      console.log(query.length)
    }
  }, [query, page]);
  
  useEffect(() => {
    if(searchClicked) handleSearch();
  }, [handleSearch, page, searchClicked]);
  
  
  return (
    <Container>
      <Row className='banner'>
        <img src={banner} alt=""/>
      </Row>
      <Row>
        <Col xs={12} md={4} className='w-100'>
        <form className='search' onSubmit={event => {event.preventDefault();setSearchClicked(true)}}>
            <div className='box'>
              <input
                type="text"
                id="query"
                placeholder='Search Planets'
                className='input w-75'
                value={query}
                onChange={event => {setQuery(event.target.value);setPage(1)} }
              />
              <button type="submit" className="button w-25">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
        </Col>
      </Row>
      {searched && results && <PlanetResults results={results} />}
      {searched && !results.length && <NoResults results={results}/>}
      {searched && results && totalPages > 1 && (
        <Pagination handleSearch={handleSearch} page={page} setPage={setPage} totalPages={totalPages}/>
      )}
    </Container>
  );
};

  export default PlanetSearch;

// const PlanetSearch = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [searched, setSearched] = useState(false);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(null);
//   const [searchClicked, setSearchClicked] = useState(false);

//   const handleSearch = useCallback((event) => {
//     if (event) {
//       event.preventDefault();
//     }
//     setPage(page);
//     axios.get(`https://swapi.dev/api/planets?search=${query}&page=${page}`)
//       .then(response => {
//         setResults(response.data.results);
//         setTotalPages(Math.ceil(response.data.count / 10));
//         setSearched(true);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, [query, page]);
  
  
//   useEffect(() => {
//     handleSearch();
//   }, [handleSearch, page]);
  
//   return (
//     <Container>
//       <Row className='banner'>
//         <img src={banner} alt=""/>
//       </Row>
//       <Row>
//         <Col xs={12} md={4} className='w-100'>
//           <form className='search' onSubmit={event => handleSearch(event)}>
//             <div className='box'>
//               <input
//                 type="text"
//                 id="query"
//                 placeholder='Search Planets'
//                 className='input w-75'
//                 value={query}
//                 onChange={event => setQuery(event.target.value)}
//               />
//               <button type="submit" className="button w-25">
//                 <FontAwesomeIcon icon={faSearch} />
//               </button>
//             </div>
//           </form>
//         </Col>
//       </Row>
//       {searched && results && <PlanetResults results={results} />}
//       {searched && !results.length && <NoResults results={results}/>}
//       {searched && results && totalPages > 1 && (
//         <Pagination handleSearch={handleSearch} page={page} setPage={setPage} totalPages={totalPages}/>
//       )}
//     </Container>
//   );
// }

// export default PlanetSearch;
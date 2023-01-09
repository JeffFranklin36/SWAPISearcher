import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'
import NavBar from './Components/NavBar';
import Homepage from './Components/Homepage';
import PlanetSearch from './Components/PlanetSearch';
import PeopleSearch from './Components/PeopleSearch';
import SpeciesSearch from './Components/SpeciesSearch';
import StarshipSearch from './Components/StarshipSearch';
import VehicleSearch from './Components/VehicleSearch';
import AddResults from './Components/AddResults';
import PlanetForm from './Components/PlanetForm';

function App() {
  return (
    <div className='App'>
      <Router>
      <div className='display'>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route exact path="/planets" element={<PlanetSearch/>}/>
            <Route exact path="/people" element={<PeopleSearch/>}/>
            <Route exact path="/species" element={<SpeciesSearch/>}/>
            <Route exact path="/starships" element={<StarshipSearch/>}/>
            <Route exact path="/vehicles" element={<VehicleSearch/>}/>
            <Route exact path="/addResults" element={<AddResults/>}/>
            <Route exact path="/planetForm" element={<PlanetForm/>}/>
          </Routes>
      </div>
      </Router>
    </div>
  )
}

export default App;


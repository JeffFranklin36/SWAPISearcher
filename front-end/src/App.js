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
import PeopleForm from './Components/PeopleForm';
import SpeciesForm from './Components/SpeciesForm';
import StarshipForm from './Components/StarshipForm';
import VehicleForm from './Components/VehicleForm';

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
            <Route exact path="/peopleForm" element={<PeopleForm/>}/>
            <Route exact path="/speciesForm" element={<SpeciesForm/>}/>
            <Route exact path="/starshipForm" element={<StarshipForm/>}/>
            <Route exact path="/vehicleForm" element={<VehicleForm/>}/>
          </Routes>
      </div>
      </Router>
    </div>
  )
}

export default App;


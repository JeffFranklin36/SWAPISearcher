//react and features
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//styling
import './app.css'

// nav and home
import NavBar from './Components/NavBar';
import Homepage from './Components/Homepage';

//searchbars
import PlanetSearch from './Components/searchbars/PlanetSearch';
import PeopleSearch from './Components/searchbars/PeopleSearch';
import SpeciesSearch from './Components/searchbars/SpeciesSearch';
import StarshipSearch from './Components/searchbars/StarshipSearch';
import VehicleSearch from './Components/searchbars/VehicleSearch';

//form components
import AddResults from './Components/forms/AddResults';
import CreatePerson from './Components/forms/CreatePerson';
import CreateSpecies from './Components/forms/CreateSpecies';
import CreateVehicle from './Components/forms/CreateVehicle';
import CreatePlanet from './Components/forms/CreatePlanet';
import CreateStarship from './Components/forms/CreateStarship';

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
            <Route exact path="/createPlanet" element={<CreatePlanet/>}/>
            <Route exact path="/createPerson" element={<CreatePerson/>}/>
            <Route exact path="/createSpecies" element={<CreateSpecies/>}/>
            <Route exact path="/createStarship" element={<CreateStarship/>}/>
            <Route exact path="/createVehicle" element={<CreateVehicle/>}/>
          </Routes>
      </div>
      </Router>
    </div>
  )
}

export default App;


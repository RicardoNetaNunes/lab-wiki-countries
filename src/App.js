import  'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {





  return (
    <div  >
      <Navbar />
      <div style={{display: 'flex'}}>
      <CountriesList />
      
<Routes>
	<Route path="/countries/:id" element={<CountryDetails />} />
</Routes>
</div> 

    </div>
  );
}

export default App;

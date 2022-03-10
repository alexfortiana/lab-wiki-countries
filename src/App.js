import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.css';

function App() {


  return (
    <div className="App">


    <Navbar/>
    <div className='d-flex justify-content-around'>
    <CountriesList/>

    <Routes>

    <Route path='/' element={<Main/>}/>
    <Route path='/countries/:name' element={<CountryDetails/>}/>

      
    </Routes>

      
    </div>
    


    </div>
  );
}

export default App;

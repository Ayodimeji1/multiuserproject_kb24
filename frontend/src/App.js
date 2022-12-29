import './App.css';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Vehicles from './components/vehicles';
import VehicleDetail from './components/vehicle_detail';
import Brands from './components/brands';
import BrandVehicles from './components/brand_vehicles';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return ( 
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/vehicles' element={<Vehicles/>} />
      <Route path='/vehicles/:vehicle_slug/:vehicle_id' element={<VehicleDetail/>} />
      <Route path='/brands' element={<Brands/>} />
      <Route path='/brand/:brand_slug/:brand_id' element={<BrandVehicles/>} />
    </Routes>  
    <Footer/>    
    </>
  );
}


export default App;



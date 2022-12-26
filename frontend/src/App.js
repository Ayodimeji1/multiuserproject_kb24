import './App.css';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return ( 
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>  
    <Footer/>    
    </>
  );
}

export default App;

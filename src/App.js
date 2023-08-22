import './App.css';
import Navbars from './Components/Navbars';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Carrier from './Components/Carrier';
import About from './Components/About';
import Contact from './Components/Contact';
import Sathiya from './Components/Sathiya';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
  return (
    <div className='App'>
       <Navbars />
       <Home />
       <Carrier />
       <About />
       <Contact />
        {/* <Routes>
            <Route path='/' element={<Sathiya />} /> 
            <Route path='/home' element={<Home />} />
            <Route path='/carrier' element={<Carrier />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
       </Routes>  */}
    </div>
    
  );
}

export default App;

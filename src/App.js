import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Support from './Pages/Support';
import Footer from './Components/Footer';
import Donate from './Pages/Donate';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/donate' element={<Donate/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

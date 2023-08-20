import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Movies from './components/Movies';
import LoginUser from './components/LoginUser';
import Register from './components/Register';
import LoginAdmin from './components/LoginAdmin';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/movies" element={<Movies />}></Route>    
        <Route path="/login" element={<LoginUser />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/admin-login" element={<LoginAdmin />}></Route> 
        <Route path="/"></Route> 
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

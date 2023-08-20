import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        
        <Route path="/" element={<About />}></Route>  
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

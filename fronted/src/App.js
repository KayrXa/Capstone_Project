import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<About />}></Route>  
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

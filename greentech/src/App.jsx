// src/App.jsx
import React from 'react';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FarmingCategories from './components/FarmingCategories';
// src/main.jsx or src/App.jsx
// import 'bootstrap/dist/css/bootstrap.min.css';
// import  Carousel  from './components/Carousel';


const App = () => {
  return (
    <div className="App">
    
      <Navbar/>
      <FarmingCategories/>
      <Home />
    </div>
  );
};

export default App;

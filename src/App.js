import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar';
import Home from './pages/home';
import Login from './pages/login';
import MerchendiseDetails from './list/merchendisedetails';
import Watchlist from './pages/watchlist/review';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/merchendise/:id"element={<MerchendiseDetails/>}/>
          <Route path='/watchlist' element={<Watchlist/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

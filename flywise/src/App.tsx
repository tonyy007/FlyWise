import { Routes, Route } from 'react-router-dom';
import Deals from './components/deals.tsx';
import Hotels from './components/hotels.tsx';
import Destination from './components/destination.tsx';
import Main from './components/main.tsx';
import News from './components/news.tsx';
import NavBar from './components/navbar.tsx';
import React from 'react';

const App = () => {
  return (
     <>
      <NavBar/>
        <Routes>
           <Route path="/" element={<Main />} />
           <Route path="/deals" element={<Deals />} />
           <Route path="/hotels" element={<Hotels />} />
           <Route path="/destinations" element={<Destination />} />
           <Route path="/news" element={<News />} />
        </Routes>
     </>
  );
 };
 
 export default App;
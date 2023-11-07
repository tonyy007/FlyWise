import { Routes, Route } from 'react-router-dom';
import Deals from './components/deals.tsx';
import Flights from './components/flights.tsx';
import Destination from './components/destination.tsx';
import Main from './components/main.tsx';
import News from './components/news.tsx';
import React from 'react';

const App = () => {
  return (
     <>
        <Routes>
           <Route path="/main" element={<Main />} />
           <Route path="/deals" element={<Deals />} />
           <Route path="/flights" element={<Flights />} />
           <Route path="/destinations" element={<Destination />} />
           <Route path="/news" element={<News />} />
        </Routes>
     </>
  );
 };
 
 export default App;
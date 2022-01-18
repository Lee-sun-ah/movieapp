import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

const App=()=> {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/movie/:id" element={<Detail/>}></Route>
  </Routes>
  </BrowserRouter>
  );
};

export default App;
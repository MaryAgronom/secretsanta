import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Check from './components/Check/Check';
import Layout from './components/Layout/Layout';
import Room from './components/Adminroom/Adminroom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="check" element={<Check />} />
      </Route>
      <Route path="/room" element={<Room/>}/>
      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
}

export default App;

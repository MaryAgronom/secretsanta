import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Check from './components/Check/Check';
import Room from './components/Room/Room';
import Giver from './components/Giver/Giver';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="check" element={<Check />} />
      </Route>
      <Route path="/rooms" element={<Room />}/>
      <Route path="/giver" element={<Giver />}/>
      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
}

export default App;

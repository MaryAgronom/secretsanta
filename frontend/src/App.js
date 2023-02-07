import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Check from './components/Check/Check';

import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="check" element={<Check />} />
      </Route>
      <Route path="*" element={<div>Error</div>} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checked" element={<Check />} />
    </Routes>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Check from './components/Check/Check';

import Layout from './components/Layout/Layout';
import UserRoom from './components/UserRoom/UserRoom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="check" element={<Check />} />
      </Route>
      <Route path="/user/room" element={<UserRoom />} />
      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
}

export default App;

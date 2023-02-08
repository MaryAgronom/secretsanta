import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Check from './components/Check/Check';
import Room from './components/Room/Room';
import Giver from './components/Giver/Giver';
import Layout from './components/Layout/Layout';
import Adminroom from './components/Adminroom/Adminroom';
import UserRoom from './components/UserRoom/UserRoom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { getUser } from './store/asyncThunk/getUser';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.login);

  useEffect(() => {
    console.log('use effect');
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Layout />}>
        <Route path="check" element={<Check />} />
      </Route>
      <Route path="/rooms" element={user ? <Room /> : <div>NoRoom</div>} />
      <Route path="/adminroom" element={<Adminroom />} />
      <Route path="/account" element={<UserRoom />} />
      <Route path="/giver" element={<Giver />} />
      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Adminroom from './components/Adminroom/Adminroom';
import Giver from './components/Giver/Giver';
import Feedback from './components/FeedBack/Feedback.jsx'
import ListRooms from './components/ListRooms/ListRooms';
import Login from './components/Login/Login';
import OneRoom from './components/OneRoom/OneRoom';
import Registration from './components/Registration/Registration';
import Room from './components/Room/Room';
import UserRoom from './components/UserRoom/UserRoom';
import { getPresents } from './store/asyncThunk/getPresents';
import { getUser } from './store/asyncThunk/getUser';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.login);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getPresents());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={user ? <Navigate to="/rooms" /> : <Login />} />
      {user ? (
        <>
          <Route path="/rooms" element={<Room />} />
          <Route path="/adminroom" element={<Adminroom />} />
          <Route path="/all">
            <Route index element={<ListRooms />} />
            <Route path=":id" element={<OneRoom />} />
          </Route>
          <Route path="/account" element={<UserRoom />} />
          <Route path="/giver" element={<Giver />} />
          <Route path="/user/feedback" element={<Feedback />} />
          <Route path="*" element={<div>Error</div>} />
        </>
      ) : (
        <>
          <Route path="*" element={<Login />} />
        </>
      )}
    </Routes>
  );
}

export default App;

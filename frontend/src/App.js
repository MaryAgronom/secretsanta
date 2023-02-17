import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import Adminroom from './components/Adminroom/Adminroom';
import AfterShuffle from './components/AfterShuffle/AfterShuffle';
import Giver from './components/Giver/Giver';
import Feedback from './components/FeedBack/Feedback.jsx';
import ListRooms from './components/ListRooms/ListRooms';
import Login from './components/Login/Login';
import OneRoom from './components/OneRoom/OneRoom';
import Registration from './components/Registration/Registration';
import Room from './components/Room/Room';
import UserRoom from './components/UserRoom/UserRoom';
import UserWithLink from './components/userWithLink/UserWithLink';
import Layout from './components/Layout/Layout';

import { getPresents } from './store/asyncThunk/getPresents';
import { getUser } from './store/asyncThunk/getUser';
import CheckStatus from './components/CheckStatus/CheckStatus';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.login);

  useEffect(() => {
    dispatch(getUser());
    if (user) {
      console.log('get Presents dispatch');
      dispatch(getPresents());
    }
  }, [dispatch, user]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Layout />} />
      {user ? (
        <>
          <Route path="/rooms" element={<Room />} />
          <Route path="/adminroom" element={<Adminroom />} />
          <Route path="/all">
            <Route index element={<ListRooms />} />
            <Route path=":link" element={<OneRoom />} />
          </Route>
          <Route path="/account" element={<UserRoom />} />
          <Route path="/status">
          <Route index element={<ListRooms />} />
          <Route path=":link" element={<CheckStatus />} />
          </Route>
          <Route path="/giver" element={<Giver />} />
          <Route path="/shufler" element={<AfterShuffle />} />
          <Route path="/user/feedback" element={<Feedback />} />
          <Route path="*" element={<div>Error</div>} />
          <Route path="/one">
            <Route index element={<ListRooms />} />
            <Route path=":link" element={<UserWithLink />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="*" element={<Login />} />
          <Route path="/one">
            <Route index element={<ListRooms />} />
            <Route path=":link" element={<UserWithLink />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;

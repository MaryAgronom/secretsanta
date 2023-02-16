import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCabinet } from '../../store/asyncThunk/getCabinet';
import Adminroom from '../Adminroom/Adminroom';
import Lightrope from '../Lightrope/Lightrope';

export default function OneRoom() {
  const dispatch = useDispatch();

  const { link } = useParams();
  console.log('params', link);

  useEffect(() => {
    console.log('use effect');
    dispatch(getCabinet(link));
  }, []);

  // const users = useSelector((state) => state.shuffle.users)
  // console.log(users)
  // const every = users.map((user) => user.receiver)
  // console.log(every)
  return (
    <>
    <Lightrope />
    <Adminroom />
    </>
  )
}

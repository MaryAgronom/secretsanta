import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCabinet } from '../../store/asyncThunk/getCabinet';
import Adminroom from '../Adminroom/Adminroom';
import { getShuffle } from '../../store/asyncThunk/getShuffle';

export default function OneRoom() {
  const navigate = useNavigate();
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
    <Adminroom />
    </>
  )
}

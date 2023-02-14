import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCabinet } from '../../store/asyncThunk/getCabinet';
import Adminroom from '../Adminroom/Adminroom';

export default function OneRoom() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { link } = useParams();
  console.log('params', link);

  useEffect(() => {
    console.log('use effect');
    dispatch(getCabinet(link));
  }, [dispatch]);
  return (
    <>
    <Adminroom />
    </>
  )
}

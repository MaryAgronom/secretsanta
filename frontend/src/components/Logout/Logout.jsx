import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../store/asyncThunk/logoutUser';

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('use LOGOUT');
  //   // dispatch();
  // }, []);
  const logoutHandle = () => {
    console.log('OUT')
    dispatch(logoutUser());
    navigate('/login')
  }
  return (
    <Button onClick={logoutHandle} variant="outlined" color="error">ВЫЙТИ</Button>
  )
}

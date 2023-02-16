import { Chip } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getShuffle } from '../../../store/asyncThunk/getShuffle';

export default function ShuffleButton({input, Users, link, setInput}) {
  const initialState = { data_closed: '', money: '' };

  const dispatch = useDispatch()
  const shuffleHandler = (e) => {
    e.preventDefault();
    console.log('click shufle');
    dispatch(getShuffle({input, Users, link}));
    setInput(initialState);

    // console.log('SENDER FRONT', sender)
  };
  const isShuffled = useSelector((state) => state.cabinet.isShuffled);
  return (
    <>
    {isShuffled ? (
      ''
    ) : (
    <Chip
            onClick={shuffleHandler}
            label="Создать пары"
          variant="filled"
          color="primary"
          size="big"
          style={{
            fontSize: '20px',
            fontFamily: 'Comfortaa',
            width: '220px',
            height: '50px',
            backgroundColor: '#5e0d0c',
            boxShadow: `inset 1px 1px 0px rgba(255, 255, 255, 0.25), inset 0 0 6px #a23227,
          inset 0 80px 80px -40px #ac3223, 1px 1px 3px rgba(0, 0, 0, 0.75)`,}}
          />
            )}
          
          </>
  )
}

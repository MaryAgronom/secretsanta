import React from 'react'
import { useDispatch } from 'react-redux';
import { getShuffle } from '../../../store/asyncThunk/getShuffle';

export default function ShuffleButton({input, Users, link}) {
  const dispatch = useDispatch()
  const shuffleHandler = (e) => {
    e.preventDefault();
    console.log('click shufle');
    dispatch(getShuffle({input, Users, link}));
    // console.log('SENDER FRONT', sender)
  };
  return (
    <button
            onClick={shuffleHandler}
            type="button"
            className="christmas-btn"
            style={{
              width: '150px',
              // height: '60px',
              fontSize: '21px',
              padding: '5px',
              textAlign: 'center',
            }}
          >
            Назначить пары
          </button>
  )
}

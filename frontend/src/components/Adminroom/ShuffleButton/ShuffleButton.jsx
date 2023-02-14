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
    {/* {isShuffled ? (
      <h3> назначены</h3>
    ) : ( */}
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
          {/* )} */}
          </>
  )
}

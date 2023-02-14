import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteRoom } from '../../store/asyncThunk/deleteRoom';
import { getUser } from '../../store/asyncThunk/getUser';

export default function DeleteButton() {
  const { link } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const deleted = useSelector((state) => state.cabinet.delete)

  const deleteClick = () => {
    console.info('You clicked the Chip.');
    dispatch(deleteRoom(link));
    // dispatch(getUser());
    navigate('/rooms')

  };
  return (
    <div>
      <button
        type="button"
        onClick={deleteClick}
        className="christmas-btn"
        style={{
          width: '150px',
          lineHeight: '115%',
          // height: '100px',
          padding: '10px 15px',
          fontSize: '21px',
        }}
      >
        Закрыть комнату
      </button>
    </div>
  );
}

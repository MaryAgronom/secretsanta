import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteRoom } from '../../store/asyncThunk/deleteRoom';

export default function DeleteButton() {
  const { link } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleted = useSelector((state) => state.cabinet.delete)

  useEffect(() => {
    if(deleted) {
      console.log('Deleted true')
      console.log('SANKA K SHAFFLU')
      navigate('/rooms')
    }
  }, [deleted]);

  const deleteClick = () => {
    console.info('You clicked the Chip.');
    dispatch(deleteRoom(link));

  };
  return (
    <div className="btn-clos">

            <button type="button" onClick={deleteClick} className="christmas-btn">Закрыть комнату</button>
          </div>
  )
}

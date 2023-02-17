import React from 'react';
import { useDispatch } from 'react-redux';
import { receivePresent } from '../../../store/asyncThunk/receivePresent';

export default function Present({ present }) {
  const { room } = present;
  const dispatch = useDispatch();

  return (
    <div className="present">
      <div
        className="presentBox"
        style={{ backgroundImage: `url(${room.background})` }}
      >
        <div>Название комнаты :{room.title}</div>
        <div>Описание комнаты : {room.description}</div>
      </div>
      {!present.received ? (
        <button
          onClick={() => {
            dispatch(receivePresent({ presentId: present.id }));
          }}
        >
          Получить подарок!
        </button>
      ) : (
        <button className="presentRreceived">✅ Получил подарок</button>
      )}
    </div>
  );
}

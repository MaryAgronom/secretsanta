import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteWish } from '../../../../store/asyncThunk/deleteWish';
import './Wish.scss';

export default function Wish({ wish }) {
  const dispatch = useDispatch();

  return (
    <div className="wishItem">
      <div className="itemBorder">
        {wish.item}
      </div>
      <div
        className="wishItemDelete"
        onClick={() => {
          dispatch(deleteWish(wish));
        }}
      >
        ✕
      </div>
    </div>
  );
}

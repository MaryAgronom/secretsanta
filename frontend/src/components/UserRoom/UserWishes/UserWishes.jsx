import React from 'react';
import { useSelector } from 'react-redux';
import Wishes from '../Wishes/Wishes';

export default function UserWishes() {
  const wishes = useSelector((state) => state.user.wishes);
  return (
    <div className="userWishes">
      <Wishes
        status={true}
        wishes={wishes.length ? wishes.filter((wish) => wish.like) : []}
      />
      <Wishes
        status={false}
        wishes={wishes.length ? wishes.filter((wish) => !wish.like) : []}
      />
    </div>
  );
}

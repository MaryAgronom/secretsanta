import React from 'react';
import { useSelector } from 'react-redux';
import Wishes from '../Wishes/Wishes';
import '../UserInfo/UserInfo.css';

export default function UserWishes() {
  const wishes = useSelector((state) => state.user.wishes);
  console.log('UserWishes.jsx', wishes);
  return (
    <div className="userWishes">
      <div className="santawish">
      <Wishes
        status={true}
        wishes={wishes.length ? wishes.filter((wish) => wish.like) : []}
      />
      </div>
      <div className="grinchwish">
      <Wishes
        status={false}
        wishes={wishes.length ? wishes.filter((wish) => !wish.like) : []}
      />
      </div>
    </div>
  );
}

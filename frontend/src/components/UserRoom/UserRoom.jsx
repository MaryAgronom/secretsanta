import React from 'react';
import UpdateBtn from './UpdateBtn/UpdateBtn';
import UserInfo from './UserInfo/UserInfo';
import UserMenu from './UserMenu/UserMenu';
import './UserRoom.scss';
import UserWishes from './UserWishes/UserWishes';

export default function UserRoom() {
  return (
    <div className="userRoom">
      <UserMenu />
      <UserInfo />
      <UserWishes />
      <UpdateBtn />
    </div>
  );
}

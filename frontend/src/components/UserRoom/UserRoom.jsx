import React, { useState } from 'react';
import Giver from '../Giver/Giver';
import Presents from '../Presents/Presents';
import BackBtn from './BackBtn/BackBtn';
import UserInfo from './UserInfo/UserInfo';
import UserMenu from './UserMenu/UserMenu';
import './UserRoom.scss';
import UserWishes from './UserWishes/UserWishes';
import Lightrope from '../Lightrope/Lightrope';

export default function UserRoom() {
  const [accountNav, setAccountNav] = useState('about you');
  return (
    <div className="userRoom">
      <Lightrope />
      <UserMenu setAccountNav={setAccountNav}>
        {(() => {
          switch (accountNav) {
            case 'about you':
              return (
                <>
                  <UserInfo /> <UserWishes /> <BackBtn />
                </>
              );
            case 'sender info':
              return <Giver />;
            case 'presents':
              return <Presents />;
            default:
              return <UserInfo />;
          }
        })()}
      </UserMenu>
    </div>
  );
}

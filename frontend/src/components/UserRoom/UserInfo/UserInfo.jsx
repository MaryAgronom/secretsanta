import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../../store/asyncThunk/updateUserInfo';
import {
  changeAddress,
  changeAllergy,
  changeSize,
} from '../../../store/slices/userSlice';

export default function UserInfo() {
  const { userInfo, name, surname } = useSelector((state) => state.user);
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();

  function editHandler() {
    setChange((prev) => !prev);
    dispatch(updateUserInfo(userInfo));
  }
  return (
    <div className="userInfo">
      <div className="userInfoImg">
        <img src="" alt="userPicture" />
      </div>
      <div className="userInfoEdit" onClick={editHandler}>
        {!change ? '✎' : '✓'}
      </div>
      <div className="userInfoAbout">
        <ul>
          <li>
            <div>Имя :</div>
            <div> {name + ' ' + surname}</div>
          </li>
          <li>
            <div>Адрес:</div>
            {change ? (
              <input
                className="editInfoInput"
                type="text"
                value={userInfo.address || ''}
                onChange={(e) => {
                  dispatch(changeAddress(e.target.value));
                }}
              />
            ) : (
              <div> {userInfo?.address || 'Твой адрес'}</div>
            )}
          </li>
          <li>
            <div>Размер одежды:</div>
            {change ? (
              <input
                type="text"
                value={userInfo.size || ''}
                onChange={(e) => {
                  dispatch(changeSize(e.target.value));
                }}
              />
            ) : (
              <div>{userInfo?.size || 'Размер одежды'}</div>
            )}
          </li>
          <li>
            <div>Аллергии:</div>
            {change ? (
              <input
                type="text"
                value={userInfo.allergy || ''}
                onChange={(e) => {
                  dispatch(changeAllergy(e.target.value));
                }}
              />
            ) : (
              <div>{userInfo?.allergy || 'твои аллергии'}</div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

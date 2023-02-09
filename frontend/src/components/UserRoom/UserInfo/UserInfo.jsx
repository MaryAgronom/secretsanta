import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../../store/asyncThunk/updateUserInfo';
import {
  changeAddress,
  changeAllergy,
  changeSize,
} from '../../../store/slices/userSlice';

export default function UserInfo() {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState("");
  
  const handleAvatarSelection = (event) => {
    setSelectedAvatar(event.target.src);
  };

  const handleFileUpload = (event) => {
    setSelectedAvatar(URL.createObjectURL(event.target.files[0]));
  };

  
  function editHandler() {
    setChange((prev) => !prev);
    dispatch(updateUserInfo(userInfo));
  }
  return (
    <div className="userInfo">
      <div className="userInfoImg">
      <SelectedAvatar avatar={selectedAvatar} style={{width: '100px', height: '100px'}}/>
      </div>
        <div>
        <input type="file" onChange={handleFileUpload} />
          <h3>Поменять аватар:</h3>
          {/* <SelectedAvatar avatar={selectedAvatar} /> */}
        </div>
      <div className="userInfoEdit" onClick={editHandler}>
        {!change ? '✎' : '✓'}
      </div>
      <div className="userInfoAbout">
        <ul>
          <li>
            <div>Адрес:</div>
            {change ? (
              <input className='editInfoInput'
              type="text"
              value={userInfo.address || ''}
              onChange={(e) => {
                dispatch(changeAddress(e.target.value));
              }}
              />
              ) : (
                <li>{userInfo?.address || 'Твой адрес'}</li>
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
                <li>{userInfo?.size || 'Размер одежды'}</li>
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
                <li>{userInfo?.allergy || 'твои аллергии'}</li>
                )}
          </li>
        </ul>
      </div>
    </div>
  );
}
function SelectedAvatar ({ avatar }){
  return (
    <div>
      {avatar && (
        <div>
          <h3>Selected Avatar:</h3>
          <img src={avatar} alt="Selected Avatar" />
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../../store/asyncThunk/updateUserInfo';
import {
  changeAddress,
  changeAllergy,
  changeSize,
} from '../../../store/slices/userSlice';
import Modal from 'react-bootstrap/Modal';
import './UserInfo.css';

export default function UserInfo() {
  const { userInfo, name, surname } = useSelector((state) => state.user);
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [avatars, setAvatars] = useState([]);

  const handleAvatarSelection = (event) => {
    setSelectedAvatar(event.target.src);
  };

  const handleFileUpload = (event) => {
    setSelectedAvatar(URL.createObjectURL(event.target.files[0]));
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    fetch('../../../images/avatars')
      .then(response => response.json())
      .then(data => setAvatars(data));
  }, []);

  
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
          {showModal && (
            <Modal onClose={handleModalClose}>
              <div className="avatar-selector">
                {avatars.map(avatar => (
                  <img src={avatar} onClick={handleAvatarSelection} />
                ))}
              </div>
            </Modal>
          )}

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

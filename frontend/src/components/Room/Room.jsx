import React from 'react';
import roomimg from '../../images/IMG_4096.PNG';
import './Room.css';
const Room = () => {
  return (
    <>
      <div className="btn-container-room">
        <button className="btns">Мои комнаты</button>
        <button className="btns">Создать комнату</button>
      </div>
      <div className="room-container">
        <div className="img-container">
          <img src={roomimg} alt="" className="img-house" />
        </div>
        <div className="input-container-room">
          <input type="text" placeholder="Название комнаты" />
          <input
            type="text"
            placeholder="Описание комнаты"
            style={{ height: '200px' }}
          />
        </div>
      </div>
    </>
  );
};

export default Room;

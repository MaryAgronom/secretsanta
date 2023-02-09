import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import roomimg from '../../images/12.png';
import Logout from '../Logout/Logout';
import './Room.css';

const Room = () => {
  const navigate = useNavigate();
  const initialState = { title: '', description: '' };
  const [inputs, setInputs] = useState(initialState);

  const roomHandler = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const addHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch('http://localhost:5005/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (data.created) {
        setInputs(initialState);
        navigate('/adminroom');
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(inputs);

  const rooms = useSelector((state) => state.user.adminRooms);
  console.log(rooms);

  return (
    <>
      <div className="btn-container-room">
        <button onClick={() => navigate('/all')} type="button" className="christmas-btn">
          Мои комнаты
        </button>
        <button
          type="button"
          onClick={() => navigate('/account')}
          className="christmas-btn"
        >
          Аккаунт
        </button>
      </div>
      <div className="room-container">
        <div className="room-card">
          <h3>Комнаты</h3>
          <ul>
            {rooms.map((room) => (
              <li>
                <Link to={'/all/' + room.id}>{room.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="img-container">
          <img
            src={roomimg}
            alt=""
            className="img-house"
            style={{ width: '300px', height: '300px' }}
          />
        </div>
        <div className="input-container-room">
          <input
            onChange={roomHandler}
            name="title"
            value={inputs.title}
            type="text"
            placeholder="Название комнаты"
          />
          <textarea
            onChange={roomHandler}
            value={inputs.description}
            name="description"
            type="text"
            placeholder="Описание комнаты"
            style={{ height: '200px' }}
          />
          <button
            type="button"
            onClick={addHandler}
            className="christmas-btn"
            style={{ width: '200px', fontSize:"30px" }}
          >
            Создать комнату
          </button>
        </div>
      </div>
      <div id="logoutbtn">
        <Logout />
      </div>
    </>
  );
};

export default Room;

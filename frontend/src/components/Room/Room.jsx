import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import roomimg from '../../images/12.png';
import { getPresents } from '../../store/asyncThunk/getPresents';
import { getUser } from '../../store/asyncThunk/getUser';
import Logout from '../Logout/Logout';
import './Room.css';

const Room = () => {
  const dispatch = useDispatch();
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
      console.log('ROOM on FRONT', data);
      if (data.link) {
        setInputs(initialState);
        dispatch(getUser());
        navigate(`/all/${data.link}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(inputs);

  const rooms = useSelector((state) => state.user.adminRooms);
  console.log(rooms);

  // useEffect(() => {
  //   console.log('use effect shuffleSlice');
  //   dispatch(getShuffle({ input, users, id }));
  // }, [dispatch]);
  const accountHandler = (e) => {
    e.preventDefault();

    dispatch(getPresents());
    navigate('/account');
  };

  return (
    <>
      <div className="btn-container-room">
        <button
          type="button"
          onClick={accountHandler}
          className="christmas-btn"
        >
          Аккаунт
        </button>
        <Logout />
      </div>
      <div className="room-container">
        <div className="room-card">
          <h3>Комнаты</h3>
          <ul>
            {rooms.map((room) => (
              <li key={room.id} className="room-li-btn">
                <Link to={'/all/' + room.link}>{room.title}</Link>
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
            style={{ width: '200px', fontSize: '30px' }}
          >
            Создать комнату
          </button>
        </div>
      </div>
    </>
  );
};

export default Room;

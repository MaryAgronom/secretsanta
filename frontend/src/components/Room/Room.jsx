import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import roomimg from '../../images/12.png';
import { addCabinet } from '../../store/asyncThunk/addCabinet';
import { getPresents } from '../../store/asyncThunk/getPresents';
import { getUser } from '../../store/asyncThunk/getUser';
import { cleanShuffle } from '../../store/slices/shuffleSlice';
import Logout from '../Logout/Logout';
import './Room.css';

const Room = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rooms = useSelector((state) => state.user.adminRooms);
  const initialState = { title: '', description: '' };
  const [inputs, setInputs] = useState(initialState);

  const roomHandler = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const addHandler = async (event) => {
    event.preventDefault();
    dispatch(addCabinet(inputs));
    setInputs(initialState);

  };
  console.log(inputs);

  const accountHandler = (e) => {
    e.preventDefault();

    dispatch(getPresents());
    navigate('/account');
  };

  useEffect(() => {
    console.log('use effect');
    dispatch(cleanShuffle());
  }, []);

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
          
            {rooms.length > 0  ? (
              <>
              <h3>Комнаты</h3>
              <ul>
                {rooms.map((room) => (
                <li key={room.id} className="room-li-btn">
                  <Link to={'/all/' + room.link}>{room.title}</Link>
                </li>
                
                
              ))}
              </ul>
              </>
            ) : (
              // rooms.map((room) => (
              //   <li key={room.id} className="room-li-btn">
              //     <Link to={'/all/' + room.link}>{room.title}</Link>
              //   </li>
              // ))
              <h3>Здесь могут быть ваши комнаты</h3>
            )}
            
          
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

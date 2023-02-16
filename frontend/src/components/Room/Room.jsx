import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import roomimg from '../../images/12.png';
import { addCabinet } from '../../store/asyncThunk/addCabinet';
import { getPresents } from '../../store/asyncThunk/getPresents';
import { getUser } from '../../store/asyncThunk/getUser';
import { cleanShuffle } from '../../store/slices/shuffleSlice';
import Logout from '../Logout/Logout';
import Lightrope from '../Lightrope/Lightrope';
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
    <div className='roomContainerr'>
      <div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
</div>
     <Lightrope />
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
              <h3>Здесь могут быть ваши комнаты</h3>
            )}
        </div>

        <div className="img-container">
        <div className="container-domik">
  <div className="snow"></div>
  <div className="tree1"></div>
  <div className="tree2"></div>
  <div className="house">
    <div className="roof1">
      <div className="b1"></div>
      <div className="b2"></div>
    </div>
    <div className="wall1">
      <div className="w3">
        <div className="window1">
          <div className="glass1"></div>
        </div>
      </div>
    </div>
    <div className="wall2">
      <div className="light">
        <div className="w1">
          <div className="window">
            <div className="glass"></div>
          </div>
        </div>
        <div className="w2">
          <div className="window">
            <div className="glass"></div>
          </div>
        </div>
      </div>
      <div className="door">
        <div className="handle"></div>
      </div>
      <div className="snw1"></div>
      <div className="snw2"></div>
    </div>
    <div className="wall3">
      <div className="b3"></div>
      <div className="b4"></div>
      <div className="chimney">
        <div className="top">
          <div className="smoke">
            <div className="s1"></div>
            <div className="s2"></div>
            <div className="s3"></div>
          </div>
          <div className="shne1"></div>
          <div className="shne2"></div>
        </div>
      </div>
      <div className="sn">
        <div className="dr1"></div>
        <div className="dr2"></div>
        <div className="dr3"></div>
      </div>
      <div className="sn1">
        <div className="dr4"></div>
      </div>
      <div className="sh1"></div>
      <div className="sh2"></div>
      <div className="sh3"></div>
      <div className="sh4"></div>
      <div className="sh5"></div>
    </div>
  </div>
  <div className="snowfall"></div>
  <div className="cover"></div>
  <div className="bottom">
    <div className="bt1"></div>
    <div className="bt2"></div>
  </div>
  <div className="fence">
    <div className="fn1">
      <div className="screw"></div>
    </div>
    <div className="fn2">
      <div className="screw"></div>
    </div>
    <div className="fn3">
      <div className="screw"></div>
    </div>
    <div className="stck"></div>
  </div>
  </div>
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
    </div>
  );
};

export default Room;

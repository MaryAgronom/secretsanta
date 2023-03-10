import { Button, Chip, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import roomimg from '../../images/12.png';
import { cleanShuffle } from '../../store/slices/adminCabinetSlice';
import DeleteButton from '../DeleteButton/DeleteButton';

import './Adminroom.css';
import CopyLink from './CopyLink/CopyLink';
import ShuffleButton from './ShuffleButton/ShuffleButton';
import ShufflingInputs from './ShuflingInputs/ShufflingInputs';
import UsersTable from './UsersTable/UsersTable';

const Adminroom = () => {
  const initState = { data_closed: '', money: '' };
  const [input, setInput] = useState(initState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { link } = useParams();
  console.log('params', link);

  const { Users, isShuffled } = useSelector((state) => state.cabinet);
  const cabinet = useSelector((state) => state.cabinet.title);
  const receiver = useSelector((state) => state.shuffle.receiver);

  console.log('iS Shuffled b4', isShuffled);

  console.log(Users);

  console.log('isShuffle', isShuffled);

  return (
    <div className="fullContainer">
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
      <div className="container-Top">
        
        <div className='adminTopBtn'>
        <button
          className="christmas-btn"
          onClick={() => {
            navigate('/rooms')
            dispatch(cleanShuffle());
          }}
        >
          Все Комнаты
        </button>
        </div>
        <div className='adminTopBtn'>
        <button
          className="christmas-btn"
          onClick={() => {
            navigate(`/status/${link}`)
          }}
        >
          Главный эльф
        </button>
        </div>
      </div>
      <div className="content-Admin">
        {isShuffled ? (
          <div className="img-Container">
          <img
            src={roomimg}
            alt=""
            className="img-House"
            style={{ height: '200px', width: '200px' }}
          />
          <div className="textUnderImg">
            <p>{cabinet} </p>
          </div>
          
        </div>
        ) : (
          <>
          <div className="img-Container">
          <img
            src={roomimg}
            alt=""
            className="img-House"
            style={{ height: '200px', width: '200px' }}
          />
          <div className="textUnderImg">
            <p>{cabinet} </p>
          </div>
          
        </div>
          <div className='shuflerButtons'>
          <div className='chipBtn'>
        <CopyLink />
        </div>
        <div className='chipBtn'>
        <ShuffleButton input={input} Users={Users} link={link} setInput={setInput}  />
        </div>
        </div>

        <div className="btns-Other">

          <ShufflingInputs input={input} setInput={setInput} />
          
        </div>
        </>
        )}
      </div> 
      <div></div>
      <div className="userList-container">
        <div className="userlist"></div>
      </div>
      <UsersTable link={link} />
      <DeleteButton />
    </div>
  );
};

export default Adminroom;

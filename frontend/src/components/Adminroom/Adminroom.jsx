import { Button, Chip, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import roomimg from '../../images/12.png';
import { getCabinet } from '../../store/asyncThunk/getCabinet';
import { getShuffle } from '../../store/asyncThunk/getShuffle';
import DeleteButton from '../DeleteButton/DeleteButton';
import Logout from '../Logout/Logout';

import './Adminroom.css';
import CopyLink from './CopyLink/CopyLink';
import ShuffleButton from './ShuffleButton/ShuffleButton';

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

  // useEffect(() => {
  //   console.log('use effect');
  //   if (link) {
  //     console.log('link exist', link);
  //     dispatch(getCabinet(link));
  //   }
  // }, []);

  console.log('iS Shuffled b4', isShuffled);

  // useEffect(() => {
  //   console.log('use effect k shaflu');

  //   if (isShuffled) {
  //     console.log('SANKA K SHAFFLU');
  //     // setTimeout(() => {
  //     dispatch(getShuffle({ input, Users, link }));
  //     // }, 1000)
  //   }
  // }, [isShuffled, Users]);

  const formHandler = (e) => {
    console.log(input);
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(Users);

  console.log('isShuffle', isShuffled);

  const deleteClick = () => {
    console.info('You clicked the Chip.');
  };

  const [getPaits, setGetPairs] = useState('');

  return (
    <div className="fullContainer">
      <div className="container-top">
        <button
          className="christmas-btn"
          onClick={() => {
            navigate('/rooms');
          }}
        >
          Все Комнаты
        </button>
        {/* <button className="btns-top-admin">Анкета</button> */}
      </div>
      <div className="content-Admin">
        <div className="img-Container">
          <img
            src={roomimg}
            alt=""
            className="img-House"
            style={{ height: '200px', width: '200px' }}
          />
          <div className="textUnderImg">
            <p>{cabinet} </p>
            <CopyLink />
          </div>
        </div>

        <div className="btns-Other">
          <div className="btnOtherInputs">
            <div className="btnOtherInput">
              <span>Cтоимость подарка:</span>
              <input
                onChange={formHandler}
                name="money"
                value={input.money}
                id="forpadding"
                type="number"
                placeholder="Назначить цену"
              />
            </div>
            <div className="btnOtherInput">
              <span>Нужно отправить до:</span>
              <input
                onChange={formHandler}
                name="data_closed"
                value={input.data_closed}
                id="forpadding"
                type="date"
                placeholder="Дата окончания"
              />
            </div>
          </div>
          <ShuffleButton input={input} Users={Users} link={link}  />
        </div>
      </div>
      <div></div>
      <div className="userList-container">
        <div className="userlist"></div>
      </div>
      {isShuffled ? (
        <div className="shuffling">
          <div className="after">
            {Users &&
              Users.map((user) => (
                <h3 key={user.user.id}>
                  {user.user.name} {user.user.surname}
                </h3>
              ))}
          </div>

          <div className="after">
            {receiver &&
              receiver.map((el) => (
                <h3 key={el.receiver.id}>
                  {el.receiver.name} {el.receiver.surname}
                </h3>
              ))}
          </div>
        </div>
      ) : (
        <div
          className="after"
          style={{ backgroundColor: '#245d27', color: 'white' }}
        >
          {Users &&
            Users.map((user) => (
              <h3 key={user.user.id}>
                {user.user.name} {user.user.surname}
                {/* {user.user.surname} */}
              </h3>
            ))}
        </div>
      )}
      <DeleteButton />
    </div>
  );
};

export default Adminroom;

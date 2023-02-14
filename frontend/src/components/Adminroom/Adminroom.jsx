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

const Adminroom = () => {
  const initState = { data_closed: '', money: '' };
  const [input, setInput] = useState(initState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const backHandler = () => {
    navigate(-1);
  };
  const { link } = useParams();
  console.log('params', link);

  const users = useSelector((state) => state.cabinet.Users);

  useEffect(() => {
    console.log('use effect');
    if (link) {
      console.log('link exist', link);
      dispatch(getCabinet(link));
    }
  }, []);

  const isShuffled = useSelector((state) => state.cabinet.isShuffled);
  console.log('iS Shuffled b4', isShuffled);

  useEffect(() => {
    console.log('use effect k shaflu');

    if (isShuffled) {
      console.log('SANKA K SHAFFLU');
      // setTimeout(() => {
      dispatch(getShuffle({ input, users, link }));
      // }, 1000)
    }
  }, [isShuffled, users]);

  const cabinet = useSelector((state) => state.cabinet.title);

  const formHandler = (e) => {
    console.log(input);
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const shuffleHandler = (e) => {
    e.preventDefault();
    console.log('click');
    dispatch(getShuffle({ input, users, link }));
    // console.log('SENDER FRONT', sender)
  };

  const receiver = useSelector((state) => state.shuffle.receiver);

  console.log(users);

  console.log('isShuffle', isShuffled);

  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  const deleteClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className="fullContainer">
      <Logout />
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
            <Tooltip title="скопируйте ссылку для приглашения" arrow>
              <Chip
                label="Ссылка на комнату"
                variant="outlined"
                color="success"
                size="big"
                onClick={() =>
                  copyToClipBoard(`http://localhost:3000/one/${link}`)
                }
              />
            </Tooltip>
            {copySuccess}
            {/* <a href="URL">Пригласить</a> */}
          </div>
        </div>

        <div className="btns-Other">
          <span>Ограничение на стоимость подарка:</span>
          <input
            onChange={formHandler}
            name="money"
            value={input.money}
            id="forpadding"
            type="number"
            placeholder="Назначить цену"
          />

          <span>Подарками нужно обменяться до:</span>
          <input
            onChange={formHandler}
            name="data_closed"
            value={input.data_closed}
            id="forpadding"
            type="date"
            placeholder="Дата окончания"
          />
          <button
            onClick={shuffleHandler}
            type="button"
            className="christmas-btn"
          >
            Назначить пары
          </button>
        </div>
      </div>
      <div></div>
      <div className="userList-container">
        <div className="userlist"></div>
      </div>

      {isShuffled ? (
        <div className="shuffling">
          table
          <div className="before">
            {users &&
              users.map((user) => (
                <h1 key={user.user.id}>
                  {user.user.name} {user.user.surname}
                </h1>
              ))}
          </div>
          <div className="after">
            {receiver &&
              receiver.map((el) => (
                <h1 key={el.receiver.id}>
                  {el.receiver.name} {el.receiver.surname}
                </h1>
              ))}
          </div>
        </div>
      ) : (
        <div className="before">
          TABLE
          {users &&
            users.map((user) => (
              <h1 key={user.user.id}>
                {user.user.name} {user.user.surname}
                {/* {user.user.surname} */}
              </h1>
            ))}
        </div>
      )}

      {/* <div className="btn-close ">

            <button type="button" onClick={deleteClick} className="christmas-btn">Закрыть комнату</button>
          </div> */}
      <DeleteButton />
    </div>
  );
};

export default Adminroom;

import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import roomimg from '../../images/12.png';
import { getCabinet } from '../../store/asyncThunk/getCabinet';
import { getShuffle } from '../../store/asyncThunk/getShuffle';
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
  const { id } = useParams();
  console.log('params', id);

  useEffect(() => {
    console.log('use effect');
    dispatch(getCabinet(id));
  }, [dispatch]);

  const users = useSelector((state) => state.cabinet.Users);
  const cabinet = useSelector((state) => state.cabinet.title);

  const formHandler = (e) => {
    console.log(input);
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const shuffleHandler = (e) => {
    e.preventDefault();
    console.log('click');
    dispatch(getShuffle({ input, users, id }));
      // console.log('SENDER FRONT', sender)
   
  };


  const receiver = useSelector((state) => state.shuffle.receiver);

  // useEffect(() => {
  //   receiver ? dispatch(getShuffle({ users })) : console.log('use shuffle effect');
  // }, [dispatch]);

    // console.log('SENDER FRONT', sender[0].sender.name)


  console.log(users);

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
          <img src={roomimg} alt="" className="img-House" style={{height: '200px', width: '200px'}}/>
          <div className="textUnderImg">
            <p>{cabinet} </p>
            <a href="URL">Пригласить</a>
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
          {/* <span>стартуем с</span>
            <input id='forpadding' type="date" placeholder="Дата начала" /> */}
          <span>Подарками нужно обменяться до:</span>
          <input
            onChange={formHandler}
            name="data_closed"
            value={input.data_closed}
            id="forpadding"
            type="date"
            placeholder="Дата окончания"
          />
          <button onClick={shuffleHandler} type="button" className="christmas-btn">
            Назначить пары
          </button>
        </div>
      </div>
      <div></div>
      <div className="userList-container">
        <div className="userlist">
          {/* <table border="1">
            {users &&
              users.map((user) => (
                <tr key={user.user.id}>
                  <th>
                    {user.user.name} {user.user.surname}
                  </th>
                  
                </tr>
              ))}
              </table> */}
              
            {/* {users && users.map((user) => (
            <tr key={user.user.id}>
            <th>{user.user.name} {user.user.surname}</th>
          </tr>
          ))} */}
          

        </div>

      </div>
      <div className='shuffling'>
        <div className='before'>
        {users &&
              users.map((user) => (
                    <h1>{user.user.name} {user.user.surname}</h1>
              ))}
        </div>
        <div className='after'>
              {receiver && receiver.map((el) => (
                <h1>{el.receiver.name} {el.receiver.surname}</h1>
              ))}
              </div>
              </div>
          <div className="btn-close ">
            <button className="christmas-btn">Закрыть комнату</button>
          </div>
    </div>
  );
};

export default Adminroom;

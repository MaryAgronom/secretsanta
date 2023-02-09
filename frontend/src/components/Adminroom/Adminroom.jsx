
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import roomimg from "../../images/IMG_4096.PNG";
import { getCabinet } from "../../store/asyncThunk/getCabinet";
import { getShuffle } from "../../store/asyncThunk/getShuffle";
import Logout from '../Logout/Logout'

import "./Adminroom.css";

const Adminroom = () => {
  const initState = { data_closed:'', money: ''}
  const [input, setInput] = useState(initState)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const backHandler = () => {
    navigate(-1);
  }
  const { id } = useParams();
  console.log("params", id);

  useEffect(() => {
    console.log('use effect');
    dispatch(getCabinet(id));
  }, [dispatch]);

  const users = useSelector(state => state.cabinet.Users)
  const cabinet = useSelector(state => state.cabinet.title)

  const formHandler = (e) => {
    console.log(input);
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const shuffleHandler = (e) => {
    e.preventDefault();
    console.log("click")
    dispatch(getShuffle({input, users}))
  }

  // if(users) {
  
  // }
  // useEffect(() => {
  //   const shuffledUsers = users.sort(() => Math.random() - 0.5);
  // console.log('SHUFFLE', shuffledUsers)
  // }, [dispatch])
 
  console.log(users)
  return (
    
    <div className="fullContainer">
      <Logout />
      <div className="container-top">
        <button className="christmas-btn">Комната</button>
        <button className="christmas-btn">Анкета</button>

      <div className="content-Admin">
        <div className="img-Container">
          <img src={roomimg} alt="" className="img-House" />
          <div className="textUnderImg">
          <p>{cabinet} </p>
          <a href="URL">Пригласить</a>
          </div>
          </div>

          <div className="btns-Other">
          <span>сумма подарка </span>
            <input onChange={formHandler} name="money" value={input.money} id='forpadding' type="number" placeholder="Назначить цену" />
            {/* <span>стартуем с</span>
            <input id='forpadding' type="date" placeholder="Дата начала" /> */}
            <span>дарим подарки в</span>
            <input onChange={formHandler} name="data_closed" value={input.data_closed} id='forpadding' type="date" placeholder="Дата окончания" />
            <button onClick={shuffleHandler} type="button" className="btns-Admin">Назначить пары</button>

          
        </div>
      </div>
      <div>
        
        
      </div>
      <div className="userList-container" >
      <div className="userlist">
        <table border="1">
          {users && users.map((user) => (
            <tr key={user.user.id}>
            <th>{user.user.name} {user.user.surname}</th>
            <th>{user.user.name} {user.user.surname}</th>
          </tr>
          ))}
          
          {/* {users && users.map((user) => (
            <tr key={user.user.id}>
            <th>{user.user.name} {user.user.surname}</th>
          </tr>
          ))} */}
          
        
        </table>
        <div className="btn-close " >
        <button className="btns-Admin">Закрыть комнату</button>

        </div>
      </div>
      </div>
    </div>
  );
};

export default Adminroom;

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { checkStatus } from '../../store/asyncThunk/checkStatus';
import './CheckStatus.css'
import Lightrope from '../Lightrope/Lightrope';
import sadSanta from '../../images/sad-santa.png';
import happySanta from '../../images/cool-santa.png';
import { Avatar, Chip } from '@mui/material';

export default function CheckStatus() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {link} = useParams()
  console.log(link)
  const users = useSelector((state) => state.status.users);

  useEffect(() => {
    console.log('use effect');
    dispatch(checkStatus(link));
  }, []);
  return (
    <>
    <Lightrope />
    <div className='upButtonStatus'>
    <button
          className="christmas-btn"
          onClick={() => {
            navigate('/rooms')
          }}
        >
          Все Комнаты
        </button>
        <button
          className="christmas-btn"
          onClick={() => {
            navigate(-1)
          }}
        >
          НАЗАД
        </button>
        </div>
          <div className='statusContainer' >
            <ol className='sender'>
              <h1>Отправитель</h1>
          {users && users.map((user) => (
            <>
            <li>
              <span>{user.sender.name} {user.sender.surname}</span>  {user.send ? (<div className='happySantaChip'>
            <img src={happySanta} className='sadSanta'></img>
            <span>санта радуется</span>
            </div>) : (
              <div className='sadSantaChip'>
            <img src={sadSanta} className='sadSanta'></img>
            <span>санта грустит</span>
            </div>
            )}</li>
            </>
          ))}
            </ol>
            <ul className='receiver'>
            <h1>Получатель</h1>
            {users && users.map((user) => (
            <li>
              <span>{user.receiver.name} {user.receiver.surname}</span>  {user.received ? (<div className='happySantaChip'>
            <img src={happySanta} className='sadSanta'></img>
            <span>санта радуется</span>
            </div>) : (<div className='sadSantaChip'>
            <img src={sadSanta} className='sadSanta'></img>
            <span>санта грустит</span>
            </div>)}</li>
          ))}
            </ul>
          </div>
        </>
  )
}

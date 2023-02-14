import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { checkStatus } from '../../store/asyncThunk/checkStatus';
import './CheckStatus.css'

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
          <div className='statusContainer' >
            <div className='sender'>
              <h1>отправитель</h1>
          {users && users.map((user) => (
            <>
            <h4>{user.sender.name} {user.sender.surname} - {user.send ? ('Отправил подарочек') : ('Не отправил подарочек')}</h4>
            </>
          ))}
            </div>
            <div className='receiver'>
            <h1>получатель</h1>
            {users && users.map((user) => (
            <h4>{user.receiver.name} {user.receiver.surname} - {user.received ? ('получил подарочек') : ('Не получил подарочек')}</h4>
          ))}
            </div>
          </div>

        </>
  )
}

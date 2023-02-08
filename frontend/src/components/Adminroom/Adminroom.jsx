import { React, useEffect, useState } from 'react';

import roomimg from '../../images/IMG_4096.PNG';
import './Adminroom.css';
import { getUsers } from './functions';

export default function Adminroom() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="container-top">
        <button className="btns-admin">Комната</button>
        <button className="btns-admin">Анкета</button>
      </div>

      <div className="content-admin">
        <div className="img-container">
          <img src={roomimg} alt="" className="img-house" />
          <div className="btns-other">
            <input type="text" placeholder="Назначить цену" />
            <input type="text" placeholder="Дата окончания" />
            <button className="btns-admin">Назначить пары</button>
          </div>
        </div>
      </div>
      <div>
        <p>Комната барсиков</p>
        <a href="URL">Пригласить</a>
      </div>
      <div className="userlist">
        <table border="1">
          {users.map((el) => (
            <tr>
              <th>{el}</th>
            </tr>
          ))}
        </table>
      </div>
      <button className="btns-admin">Закрыть комнату</button>
    </div>
  );
}

import React from "react";
import roomimg from "../../images/IMG_4096.PNG";
import "./Adminroom.css";

const Adminroom = () => {
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
          <tr>
            <th>User</th>
          </tr>
          <tr>
            <th>User</th>
          </tr>
          <tr>
            <th>User</th>
          </tr>
          <tr>
            <th>User</th>
          </tr>
          <tr>
            <th>User</th>
          </tr>
          <tr>
            <th>User</th>
          </tr>
        </table>
      </div>
      <button className="btns-admin">Закрыть комнату</button>
    </div>
  );
};

export default Adminroom;

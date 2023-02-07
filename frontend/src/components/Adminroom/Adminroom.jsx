import React from "react";
import roomimg from "../../images/IMG_4096.PNG";
import "./Adminroom.css";

const Adminroom = () => {
  return (
    <div>
      <div className="container-top">
        <button className="btns">Комната</button>
        <button className="btns">Анкета</button>
      </div>

      <div className="room-info">
        <div className="img-container">
          <img src={roomimg} alt="" className="img-house" />
        </div>
        <button className="btns">Стоимость</button>
        <button className="btns">Назначить пары</button>
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
    </div>
  );
};

export default Adminroom;

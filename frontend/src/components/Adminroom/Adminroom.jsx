import React from "react";
import roomimg from "../../images/IMG_4096.PNG";
import Logout from "../Logout/Logout";
import "./Adminroom.css";

const Adminroom = () => {
  return (
    <div className="fullContainer">
      <Logout />
      <div className="container-top">
        <button className="btns-top-admin">Комната</button>
        <button className="btns-top-admin">Анкета</button>
      </div>

      <div className="content-admin">
        <div className="img-container">
          <img src={roomimg} alt="" className="img-house" />
          <div className="textUnderImg">
          <p>Комната барсиков</p>
          <a href="URL">Пригласить</a>
          </div>
          </div>
          <div className="btns-other">
            <input id='forpadding' type="text" placeholder="Назначить цену" />
            <input id='forpadding' type="text" placeholder="Дата начала" />
            <input id='forpadding' type="text" placeholder="Дата окончания" />
            <button className="btns-admin">Назначить пары</button>
          
        </div>
      </div>
      <div>
        
        
      </div>
      <div className="userList-container" >
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
        <div className="btn-close " >
        <button className="btns-admin">Закрыть комнату</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Adminroom;

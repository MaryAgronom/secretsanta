import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import roomimg from '../../images/IMG_4096.PNG';
import Logout from '../Logout/Logout';
import './Room.css';


const Room = () => {
  const navigate = useNavigate();
  const initialState = { title: "", description: ""};
  const [inputs, setInputs] = useState(initialState);

  const roomHandler = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }
  const addHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch('http://localhost:5005/room', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      credentials: "include",
        body: JSON.stringify(inputs),
       });
       const data = await res.json();
       if (data.created) {
        setInputs(initialState);
        navigate('/adminroom');
       }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(inputs)
  return (
    <>
      <div className="btn-container-room">
        <button type="button" className="btns">Мои комнаты</button>
        <button type="button" onClick={addHandler} className="btns">Создать комнату</button>
      </div>
      <div className="room-container">
        <div className="img-container">
          <img src={roomimg} alt="" className="img-house" />
        </div>
        <div className="input-container-room">
          <input onChange={roomHandler} name='title' value={inputs.title} type="text" placeholder="Название комнаты" />
          <input
            onChange={roomHandler}
            value={inputs.description}
            name='description'
            type="text"
            placeholder="Описание комнаты"
            style={{ height: '200px' }}
          />
        </div>
      </div>
      <div id='logoutbtn'>
      <Logout />
      </div>
    </>
  );
};

export default Room;

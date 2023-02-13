import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { acceptInvite } from '../../store/asyncThunk/acceptInvite';
import styles from './UserWithLink.module.css';
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = { name: '', surname: '', email: '', password: '' };
  const [inputs, setInputs] = useState(initialState);

  const formHandler = (e) => {
    console.log(inputs);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const loginHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch('http://localhost:5005/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       credentials: 'include',
  //       body: JSON.stringify(inputs),
  //     });
  //     const data = await res.json();
  //     console.log('FRONT', data);
  //     if (data.logged) {
  //       setInputs(initialState);
  //       navigate('/rooms');
  //       dispatch(getUser());
  //     }
  //   } catch (e) {
  //     console.log('ERRROEEO', e);
  //   }
  // };
  const { link } = useParams();
  console.log('USERLINK', link)

  const inviteHandler = async (e) => {
    e.preventDefault()
    console.log('click', link, inputs)
    dispatch(acceptInvite({link, inputs}))
    console.log('after dispatch')
  }
  return (
    <>
      <div>USER</div>
      <div className={styles.container}>
      Зарегестрируйтесь что бы принять участие
        <div className={styles.postsList}>
        
        <form
         onSubmit={inviteHandler}
        >

            <div className={styles.postsList_item}>
              <TextField
                onChange={formHandler}
                fullWidth
                name="name"
                // required
                id="outlined-required"
                label="Имя"
                value={inputs.name}
                // defaultValue="Hello World"
              />
            </div>
            <div className={styles.postsList_item}>
              <TextField
                onChange={formHandler}
                fullWidth
                // required
                name="surname"
                id="outlined-required"
                label="Фамилия"
                value={inputs.surname}
              />
            </div>
            <div className={styles.postsList_item}>
              <TextField
                onChange={formHandler}
                fullWidth
                // required
                name="email"
                id="outlined-required"
                label="почта"
                value={inputs.email}
              />
            </div>
            <div className={styles.postsList_item}>
              <TextField
                onChange={formHandler}
                fullWidth
                // required
                name="password"
                id="outlined-required"
                label="пароль"
                value={inputs.password}
              />
            </div>
            <div className={styles.btn}>
              <Button type="submit" variant="contained" color="success">
              участвовать
              </Button>
            </div>
            <p
              style={{
                margin: '5px auto 0',
                width: 'fit-content',
                fontSize: '17px',
              }}
            >
              {/* <Link to="/login" style={{ color: 'black' }}>
                {' '}
                Логин
              </Link> */}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

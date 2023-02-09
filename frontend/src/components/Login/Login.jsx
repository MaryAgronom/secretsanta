import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../../store/asyncThunk/getUser';
import styles from './Login.module.css';
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = { email: '', password: '' };
  const [inputs, setInputs] = useState(initialState);

  const formHandler = (e) => {
    console.log(inputs);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5005/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      console.log('FRONT', data);
      if (data.logged) {
        setInputs(initialState);
        navigate('/rooms');
        dispatch(getUser());
      }
    } catch (e) {
      console.log('ERRROEEO', e);
    }
  };

  return (
    <>
      <div>Login</div>
      <div className={styles.container}>
        <div className={styles.postsList}>
          <form onSubmit={loginHandler}>
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
                Войти
              </Button>
            </div>
            <p
              style={{
                margin: '5px auto 0px',
                width: 'fit-content',
                fontSize: '17px',
              }}
            >
              <Link to="/registration" style={{ color: 'black' }}>
                {' '}
                Регистрация
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

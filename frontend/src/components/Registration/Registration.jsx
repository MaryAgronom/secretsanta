import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Registration/Registration.module.css';
export default function Registration() {
  const navigate = useNavigate();
  const initialState = { name: '', surname: '', email: '', password: '' };
  const [inputs, setInputs] = useState(initialState);

  const formHandler = (e) => {
    console.log(inputs);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5005/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      console.log('FRONT', data);
      if (data.created) {
        setInputs(initialState);
        navigate('/login');
      }
    } catch (e) {
      console.log('ERRROEEO', e);
    }
  };

  

  return (
    <>
      <div>Registration</div>
      <div className={styles.container}>
        <div className={styles.postsList}>
          <form onSubmit={addHandler}>
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
                Регистрация
              </Button>
            </div>
            <p
              style={{
                margin: '5px auto 0',
                width: 'fit-content',
                fontSize: '17px',
              }}
            >
              <Link to="/login" style={{ color: 'black' }}>
                {' '}
                Логин
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function BackBtn() {
  return (
    <button
      className="christmas-btn"
      style={{ height: '50px', width: '125px', padding: 0 }}
    >
      <Link to="/rooms" style={{ color: 'white', textDecoration: 'none' }}>
        {' '}
        Назад
      </Link>
    </button>
  );
}

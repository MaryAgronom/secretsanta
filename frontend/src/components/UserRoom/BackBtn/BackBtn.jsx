import React from 'react';
import { Link } from 'react-router-dom';

export default function BackBtn() {
  return (
    <button className="christmas-btn">
      <Link to="/rooms" style={{color: 'white', textDecoration: 'none'}}> Назад</Link>
    </button>
  );
}

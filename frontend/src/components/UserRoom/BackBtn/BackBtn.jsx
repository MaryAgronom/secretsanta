import React from 'react';
import { Link } from 'react-router-dom';

export default function BackBtn() {
  return (
    <button className="backBtn">
      <Link to="/rooms"> Назад</Link>
    </button>
  );
}

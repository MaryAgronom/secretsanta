import React from 'react';
import { useSelector } from 'react-redux';
import './Giver.css';
import GiverPage from './GiverPage/GiverPage';

export default function Giver() {
  const presents = useSelector((state) => state.presents.presents);
  const userId = useSelector((state) => state.user.id);
  return (
    <>
      {presents.length ? (
        presents
          .filter((present) => present.receiver.id !== userId)
          .map((present) => <GiverPage present={present} key={present.id} />)
      ) : (
        <div>Некому отправить </div>
      )}
    </>
  );
}

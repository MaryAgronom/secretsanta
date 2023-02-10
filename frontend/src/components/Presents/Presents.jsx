import React from 'react';
import { useSelector } from 'react-redux';
import Present from './Present/Present';
import './Present.scss';

export default function Presents() {
  const userId = useSelector((state) => state.user.id);
  const presents = useSelector((state) =>
    state.presents.presents.filter(
      (present) => present.receiver.id === userId && present.send
    )
  );
  console.log(presents);
  return (
    <div className="presentsForMe">
      {presents.length ? (
        presents.map((present) => (
          <Present present={present} key={present.id} />
        ))
      ) : (
        <div>Никто пока не отослал подарки</div>
      )}
    </div>
  );
}

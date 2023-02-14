import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Present from './Present/Present';
import { useDispatch } from 'react-redux';

import './Present.scss';
import '../FeedBack/Feedback.css';
import AnimatePresent from '../FeedBack/AnimatePresent/AnimatePresent';

export default function Presents(present_id) {
  const userId = useSelector((state) => state.user.id);
  const presents = useSelector((state) =>
    state.presents.presents.filter(
      (present) => present.receiver.id === userId && present.send
    )
  );
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <div className="presentsForMe">
        {presents.length ? (
          presents.map((present) => (
            <Present present={present} key={present.id} />
          ))
        ) : (
          <div>Никто пока не отослал подарки</div>
        )}
      </div>
      <AnimatePresent present_id={present_id} />
    </>
  );
}

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWish } from '../../../store/asyncThunk/addWish';
import Wish from './Wish/Wish';

export default function Wishes({ wishes, status }) {
  console.log('Wishes.jsx', wishes);

  const [wishInput, setWishInput] = useState(false);
  const [wishInputText, setWishInputText] = useState('');
  const dispatch = useDispatch();

  function addWishHandler() {
    if (wishInputText.trim()) {
      dispatch(addWish({ item: wishInputText, like: status }));
      setWishInputText('');
      setWishInput(false);
    } else {
      setWishInput((prev) => !prev);
    }
  }

  return (
    <div className="wishes">
      <div className="addWish" onClick={addWishHandler}>
        {!wishInput ? '⊕' : '✓'}
      </div>
      <div className="wishName">{status ? 'Санте' : 'Гринчу'}</div>
      <div className={wishes.length <= 5 ? 'wishCenter' : 'hey'}>
        {wishes && wishes.map((wish) => <Wish wish={wish} key={wish.id} />)}
      </div>
      {wishInput && (
        <input
          type="text"
          placeholder="New Wish"
          value={wishInputText}
          onChange={(e) => setWishInputText(e.target.value)}
        />
      )}
    </div>
  );
}

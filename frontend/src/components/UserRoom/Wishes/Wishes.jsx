import React, { useState } from 'react';

export default function Wishes({ wishes, status }) {
  const [wishList, setWishList] = useState(wishes);
  const [wishInput, setWishInput] = useState(false);
  const [wishInputText, setWishInputText] = useState('');

  function addWishHandler() {
    if (wishInputText.trim()) {
      setWishList((prev) => [
        ...prev,
        { id: wishList.length + 1, like: status, item: wishInputText },
      ]);
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
      <div className="wishName">{status ? 'Хачу' : 'Ни хачу'}</div>
      <ul className={wishList.length <= 5 ? 'wishCenter' : 'hey'}>
        {wishList && wishList.map((wish) => <li key={wish.id}>{wish.item}</li>)}
      </ul>
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

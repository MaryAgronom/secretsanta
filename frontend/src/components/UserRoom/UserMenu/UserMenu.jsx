import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
export default function UserMenu({ children, setAccountNav }) {
  return (
    <>
     <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="userMenu">
        <ToggleButton id="tbg-radio-1" value={1} onClick={() => setAccountNav((prev) => 'about you')} style={{ backgroundColor: '#5e0d0c', border: '1px solid #3e0807', fontSize: '24px'}}>
          Инфа о тебе
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} onClick={() => setAccountNav((prev) => 'sender info')} style={{ backgroundColor: '#5e0d0c', border: '1px solid #3e0807', fontSize: '24px'}}>
          Инфа о подопечных
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3} onClick={() => setAccountNav((prev) => 'presents')} style={{ backgroundColor: '#5e0d0c', border: '1px solid #3e0807', fontSize: '24px'}}>
          Подарки
        </ToggleButton>
      </ToggleButtonGroup>
      {children}
    </>
  );
}

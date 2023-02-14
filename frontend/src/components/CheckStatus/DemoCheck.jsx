import React, { useState } from 'react'
import OneRoom from '../OneRoom/OneRoom';
import Menu from './Menu';

export default function CheckStatus() {
  const [accountNav, setAccountNav] = useState('about you');
  return (
    <>
    <div>CheckStatus</div>
    <div className="userRoom">
      <Menu setAccountNav={setAccountNav}>
        {(() => {
          switch (accountNav) {
            case 'admin page':
              return 
                <OneRoom />
            case 'check status':
              return < CheckStatus/>;
              default:
              return <OneRoom />;
          }
        })()}
      </Menu>
    </div>
    </>
  )
}

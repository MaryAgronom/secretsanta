import { Chip, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CopyLink() {
  const [copySuccess, setCopySuccess] = useState('');

  const { link } = useParams();
  console.log('params', link);

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };
  return (
    <>
      <Tooltip title="скопируйте ссылку для приглашения" arrow>
        <Chip
          label="Ссылка на комнату"
          variant="filled"
          color="primary"
          size="big"
          style={{
            fontSize: '20px',
            width: '220px',
            height: '50px',
            backgroundColor: '#5e0d0c',
            boxShadow: `inset 1px 1px 0px rgba(255, 255, 255, 0.25), inset 0 0 6px #a23227,
          inset 0 80px 80px -40px #ac3223, 1px 1px 3px rgba(0, 0, 0, 0.75)`,
          }}
          onClick={() => copyToClipBoard(`http://localhost:3000/one/${link}`)}
        />
      </Tooltip>
      {copySuccess}
    </>
  );
}

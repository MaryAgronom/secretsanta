import { Chip, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function CopyLink() {
  const [copySuccess, setCopySuccess] = useState('');

  const { link } = useParams();
  console.log('params', link);

  const copyToClipBoard = async copyMe => {
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
            <Chip label="Ссылка на комнату" variant="filled" color="primary" size="big" onClick={() => copyToClipBoard(`http://localhost:3000/one/${link}`)} />
            </Tooltip>
            {copySuccess}
            </>
  )
}

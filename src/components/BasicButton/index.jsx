import React from 'react';
import Button from '@mui/material/Button';
import BasicButtonController from './controller';

export default function BasicButton({ text, color, feed }) {
  const { handleClick } = BasicButtonController(feed);

  return (
    <Button variant='contained' color={color} onClick={() => handleClick()}>
      {text}
    </Button>
  );
}

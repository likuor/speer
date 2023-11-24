import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButton({ text, color }) {
  return (
    <Button variant='contained' color={color}>
      {text}
    </Button>
  );
}

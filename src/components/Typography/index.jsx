import React from 'react';
import Typography from '@mui/material/Typography';

const index = ({ text, size, heading }) => {
  return (
    <Typography variant={size} component={heading}>
      {text}
    </Typography>
  );
};

export default index;

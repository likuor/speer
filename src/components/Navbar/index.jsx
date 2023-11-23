import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import ArchiveIcon from '@mui/icons-material/Archive';

export default function Navbar() {
  const [value, setValue] = React.useState('feed');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: 'auto' }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label='Feed'
        value='feed'
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label='Archived'
        value='archived'
        icon={<ArchiveIcon />}
      />
    </BottomNavigation>
  );
}

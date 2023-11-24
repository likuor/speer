import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import ArchiveIcon from '@mui/icons-material/Archive';
import NavbarController from './controller';

export default function Navbar() {
  const { page, handleChange } = NavbarController();

  return (
    <BottomNavigation
      sx={{ width: 'auto' }}
      value={page}
      onChange={handleChange}
    >
      {/* value is empty because the default path */}
      <BottomNavigationAction label='Feed' value='' icon={<RestoreIcon />} />
      <BottomNavigationAction
        label='Archived'
        value='archived'
        icon={<ArchiveIcon />}
      />
    </BottomNavigation>
  );
}

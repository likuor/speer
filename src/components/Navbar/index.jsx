import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [value, setValue] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate('/' + newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: 'auto' }}
      value={value}
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

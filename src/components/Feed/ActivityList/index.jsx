import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import switchIcon from '../helper/switchIcon.js';

const ActivityList = ({ feed }) => {
  console.log('aaaaaa', feed);

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List
        sx={{
          position: 'relative',
          overflow: 'auto',
          maxHeight: 500,
        }}
      >
        {feed?.map((activity) => (
          <ListItem key={activity.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {switchIcon(activity.direction, activity.call_type)}
              </ListItemIcon>
              <ListItemText primary={activity.from} />
              <ListItemText secondary={activity.duration} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ActivityList;

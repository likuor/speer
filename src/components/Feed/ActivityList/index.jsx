import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import switchIcon from '../helper/switchIcon.js';
import handleTime from '../helper/handleTime.js';
import { useNavigate } from 'react-router-dom';

const ActivityList = ({ feed }) => {
  const navigate = useNavigate();
  const handleClick = (activity) => {
    console.log(activity);
    navigate('/' + activity.id);
  };

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
            <ListItemButton onClick={() => handleClick(activity)}>
              <ListItemIcon>
                {switchIcon(activity.direction, activity.call_type)}
              </ListItemIcon>
              <ListItemText
                primary={activity.from}
                style={{
                  maxWidth: '30%',
                }}
              />
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
              >
                <ListItemText
                  secondary={handleTime(activity.created_at)}
                  style={{
                    textAlign: 'end',
                  }}
                />
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ActivityList;

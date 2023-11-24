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
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import patchOneArchive from '../../../api/patchOneArchive.js';

const ActivityList = ({ feed }) => {
  const navigate = useNavigate();
  const handleClick = (activity) => {
    navigate('/' + activity.id);
  };

  const handleArchived = (activity) => {
    patchOneArchive(activity.id, activity.is_archived);
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
        {feed?.map((activity, index) => (
          <ListItem
            key={activity.id}
            disablePadding
            secondaryAction={
              index === 0 ? (
                <IconButton
                  edge='end'
                  aria-label='comments'
                  onClick={() => handleArchived(activity)}
                >
                  {activity.is_archived ? (
                    <CommentIcon style={{ color: 'blue' }} />
                  ) : (
                    <CommentIcon />
                  )}
                </IconButton>
              ) : (
                ''
              )
            }
          >
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

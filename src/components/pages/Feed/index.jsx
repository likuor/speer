import React, { useEffect, useState } from 'react';
import getActivities from '../../../api/getActivities.js';
import ActivityList from '../../../components/ActivityList/index.jsx';
import BasicButton from '../../../components/BasicButton/index.jsx';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import FeedController from './controller.js';

const Feed = () => {
  const { filterdFeed: feed, isLoading } = FeedController();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Typography variant='h6' component={'h2'}>
          Feed
        </Typography>
        <BasicButton text={'All archived'} color={'primary'} feed={feed} />
      </Stack>
      <ActivityList feed={feed} />
    </Box>
  );
};

export default Feed;

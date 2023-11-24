import React, { useEffect, useState } from 'react';
import getActivities from '../api/getActivities.js';
import ActivityList from '../components/ActivityList/index.jsx';
import BasicButton from '../components/BasicButton/index.jsx';
import Typography from '../components/Typography/index.jsx';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const FeedIndex = () => {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      const data = await getActivities();
      const filterdNoNArchived = data
        .filter((activity) => activity.is_archived === false && activity.from)
        .reverse();
      console.log('Feed', filterdNoNArchived);
      setFeed(filterdNoNArchived);
    };

    fetchFeed();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Typography text={'Feed'} size='h6' heading='h2' />
        <BasicButton text={'All archived'} color={'primary'} feed={feed} />
      </Stack>
      <ActivityList feed={feed} />
    </Box>
  );
};

export default FeedIndex;

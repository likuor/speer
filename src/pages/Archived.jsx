import React, { useEffect, useState } from 'react';
import getActivities from '../api/getActivities.js';
import ActivityList from '../components/ActivityList/index.jsx';
import BasicButton from '../components/BasicButton/index.jsx';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Archived = () => {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const fetchArchives = async () => {
      const data = await getActivities();
      const filterdArchived = data
        .filter((activity) => activity.is_archived === true)
        .reverse();
      console.log('Archived', filterdArchived);
      setFeed(filterdArchived);
    };

    fetchArchives();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Typography variant='h6' component={'h2'}>
          Archived
        </Typography>
        <BasicButton text={'All unarchive'} color={'error'} feed={feed} />
      </Stack>
      <ActivityList feed={feed} />
    </Box>
  );
};

export default Archived;

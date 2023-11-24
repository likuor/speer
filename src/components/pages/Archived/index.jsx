import React, { useEffect, useState } from 'react';
import ActivityList from '../../../components/ActivityList/index.jsx';
import BasicButton from '../../../components/BasicButton/index.jsx';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ArchivedController from './controller.js';

const Archived = () => {
  const { filteredArchived: feed, isLoading } = ArchivedController();

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

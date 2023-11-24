import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import handleDateTime from '../helper/handleTime';
import handleDetail from '../helper/handleDetail';
import switchIcon from '../helper/switchIcon';
import getDetail from '../api/getDetail';
import Circular from '../components/Circular/index.jsx';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const Detail = () => {
  const { id } = useParams();
  const [detail, setDdetail] = useState('');

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await getDetail(id);
      setDdetail(data);
    };
    fetchDetail();
  }, [id]);

  if (!detail) return <Circular />;

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Stack direction='column' spacing={2} justifyContent='space-between'>
          <Typography variant='h6' component={'h2'}>
            Detail
          </Typography>
        </Stack>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Call type:
              {handleDetail(
                detail.direction,
                detail.call_type,
                detail.duration
              )}
            </Typography>
            <Typography
              variant='h5'
              component='div'
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              {switchIcon(detail.direction, detail.call_type)}
              {detail.from}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Date: {handleDateTime(detail.created_at)}
            </Typography>
            <Typography variant='body2'>
              To: {detail.to}
              <br />
              Via: {detail.via}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Detail;

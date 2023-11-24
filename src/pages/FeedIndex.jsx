import React, { useEffect, useState } from 'react';
import getActivities from '../api/getActivities.js';
import ActivityList from '../components/ActivityList/index.jsx';
import BasicButton from '../components/BasicButton/index.jsx';

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
    <div>
      <div>
        Feed
        <BasicButton text={'All archived'} color={'primary'} feed={feed} />
      </div>
      <ActivityList feed={feed} />
    </div>
  );
};

export default FeedIndex;

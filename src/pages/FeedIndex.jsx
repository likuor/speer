import React, { useEffect, useState } from 'react';
import getActivities from '../api/getActivities.js';
import ActivityList from '../components/Feed/ActivityList/index.jsx';

const FeedIndex = () => {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      const data = await getActivities();
      const filterdNoNArchived = data
        .filter((activity) => activity.is_archived === false && activity.from)
        .reverse();
      console.log('no Archived', filterdNoNArchived);
      setFeed(filterdNoNArchived);
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <ActivityList feed={feed} />
    </div>
  );
};

export default FeedIndex;

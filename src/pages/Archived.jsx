import React, { useEffect, useState } from 'react';
import getActivities from '../api/getActivities.js';
import ActivityList from '../components/Feed/ActivityList/index.jsx';

const Archived = () => {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      const data = await getActivities();
      const filterdArchived = data
        .filter((activity) => activity.is_archived === true)
        .reverse();
      console.log('Archived', filterdArchived);
      setFeed(filterdArchived);
    };

    fetchActivities();
  }, []);

  return (
    <div>
      Archived
      <ActivityList feed={feed} />
    </div>
  );
};

export default Archived;

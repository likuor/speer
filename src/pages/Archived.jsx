import React, { useEffect, useState } from 'react';
import getActivities from '../api/getActivities.js';
import ActivityList from '../components/Feed/ActivityList/index.jsx';
import BasicButton from '../components/BasicButton/index.js';

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
    <div>
      <div>
        Feed
        <BasicButton text={'All unarchive'} color={'error'} />
      </div>
      <ActivityList feed={feed} />
    </div>
  );
};

export default Archived;

import React, { useEffect, useState } from 'react';
import getActivities from '../api/getActivities.js';
import ActivityList from '../components/ActivityList/index.jsx';
import BasicButton from '../components/BasicButton/index.jsx';

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
    <>
      <div>
        Feed
        <BasicButton text={'All unarchive'} color={'error'} feed={feed} />
      </div>
      <ActivityList feed={feed} />
    </>
  );
};

export default Archived;

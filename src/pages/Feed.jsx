import React, { useEffect, useState } from 'react';
import getActivities from '../api/getActivities';

const Feed = () => {
  const [allFeed, setAllFeed] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      const data = await getActivities();
      console.log(data);
      setAllFeed(data);
    };

    fetchActivities();
  }, []);

  return <div>{allFeed ? 'Feed' : 'Loading...'}</div>;
};

export default Feed;

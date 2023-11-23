import React, { useEffect, useState } from 'react';
import getActivities from '../api/getActivities';
import ActivityList from '../components/Feed/ActivityList/index.jsx';

const Feed = () => {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      const data = await getActivities();
      // const filterdFrom = data.filter((activity) => activity.from);
      const filterdArchived = data.filter(
        (activity) => activity.is_archived === true
      );
      console.log(filterdArchived);
      setFeed(filterdArchived);
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <ActivityList feed={feed} />
    </div>
  );
};

export default Feed;

import getActivities from '../../../api/getActivities';

const FeedController = async () => {
  const allFeed = await getActivities();

  return {
    allFeed,
  };
};

export default FeedController;

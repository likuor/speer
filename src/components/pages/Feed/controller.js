import { useQuery } from '@tanstack/react-query';
import getActivities from '../../../api/getActivities.js';

const FeedController = () => {
  const { data: feed, isLoading } = useQuery({
    queryFn: () => getActivities(),
    queryKey: ['activites'],
  });

  const filterdFeed =
    !isLoading && feed
      ? feed
          .filter((activity) => activity.is_archived === false && activity.from)
          .reverse()
      : [];
  console.log(filterdFeed);

  return { filterdFeed, isLoading };
};

export default FeedController;

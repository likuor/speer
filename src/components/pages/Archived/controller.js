import { useQuery } from '@tanstack/react-query';
import getActivities from '../../../api/getActivities.js';

const ArchivedController = () => {
  const { data: feed, isLoading } = useQuery({
    queryFn: () => getActivities(),
    queryKey: ['activites'],
  });

  const filteredArchived =
    !isLoading && feed
      ? feed.filter((activity) => activity.is_archived).reverse()
      : [];

  return { filteredArchived, isLoading };
};

export default ArchivedController;

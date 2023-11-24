import { useNavigate } from 'react-router-dom';
import patchOneArchive from '../../api/patchOneArchive.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const ActivityListController = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: patchOneArchive,
    onSuccess: () => {
      queryClient.invalidateQueries(['activites']);
    },
  });

  const handleClick = (activity) => {
    navigate('/' + activity.id);
  };

  const handleArchived = (activity) => {
    mutate({
      id: activity.id,
      isArchived: activity.is_archived,
    });
  };

  return { handleClick, handleArchived };
};

export default ActivityListController;

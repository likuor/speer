import patchAllArchives from '../../api/patchAllArchives';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const BasicButtonController = (feed) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: patchAllArchives,
    onSuccess: () => {
      queryClient.invalidateQueries(['activites']);
    },
  });

  const handleClick = () => {
    mutate(feed);
  };

  return { handleClick };
};

export default BasicButtonController;

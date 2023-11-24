import { useNavigate } from 'react-router-dom';
import patchOneArchive from '../../api/patchOneArchive.js';

const ActivityListController = () => {
  const navigate = useNavigate();

  const handleClick = (activity) => {
    navigate('/' + activity.id);
  };

  const handleArchived = (activity) => {
    patchOneArchive(activity.id, activity.is_archived);
  };

  return { handleClick, handleArchived };
};

export default ActivityListController;

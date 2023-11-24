import patchAllArchives from '../../api/patchAllArchives';

const BasicButtonController = (feed) => {
  const handleClick = () => {
    patchAllArchives(feed);
  };

  return { handleClick };
};

export default BasicButtonController;

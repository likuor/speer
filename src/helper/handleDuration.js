const handleDuration = (seconds) => {
  if (seconds < 60) {
    return `${seconds} seconds`;
  }

  if (61 < seconds && seconds < 120) {
    return `${Math.floor(seconds / 60)}min ${seconds % 60} seconds`;
  }

  return `${Math.floor(seconds / 60)}mins ${seconds % 60} seconds`;
};

export default handleDuration;

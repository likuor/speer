const handleTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();

  // time is going to be desplayed if it's today
  if (date.toDateString() === now.toDateString()) {
    return date.toLocaleTimeString('en-US');
  }

  return date.toLocaleDateString('en-US');
};

export default handleTime;

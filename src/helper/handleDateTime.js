const handleDateTime = (dateString) => {
  const date = new Date(dateString);
  const dateTime = `${date.toLocaleTimeString(
    'en-US'
  )} ${date.toLocaleDateString('en-US')}`;
  return dateTime;
};

export default handleDateTime;

const getActivities = async () => {
  try {
    const response = await fetch(
      'https://cerulean-marlin-wig.cyclic.app/activities'
    );
    if (!response.ok) {
      throw new Error('Error: response is not ok');
    }
    const allFeed = await response.json();
    return allFeed;
  } catch (error) {
    console.error('Error: get', error);
    return null;
  }
};

export default getActivities;

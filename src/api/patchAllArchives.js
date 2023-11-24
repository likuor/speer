const patchAllArchives = async (feed) => {
  const fetchPromises = feed.map(async (activity) => {
    const response = await fetch(
      `https://cerulean-marlin-wig.cyclic.app/activities/${activity.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          is_archived: !activity.is_archived,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Error: response is not ok');
    }

    return 'Success';
  });

  try {
    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    console.error('Error: path all archives', error);
    return null;
  }
};

export default patchAllArchives;

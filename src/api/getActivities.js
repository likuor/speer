const getActivities = async () => {
  const res = await fetch('https://cerulean-marlin-wig.cyclic.app/activities');
  return { res };
};

export default getActivities;

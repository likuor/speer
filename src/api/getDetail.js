const getDetail = async (id) => {
  try {
    const response = await fetch(
      `https://cerulean-marlin-wig.cyclic.app/activities/${id}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error: get detail', error);
    return null;
  }
};

export default getDetail;

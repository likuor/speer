const patchOneArchive = async (id, isArchived) => {
  try {
    const response = await fetch(
      `https://cerulean-marlin-wig.cyclic.app/activities/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          is_archived: !isArchived,
        }),
      }
    );

    return response;
  } catch (error) {
    console.error('Error: patch one archive', error);
    return null;
  }
};

export default patchOneArchive;

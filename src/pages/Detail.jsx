import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [callId, setCallId] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://cerulean-marlin-wig.cyclic.app/activities/${id}`
      );
      const data = await res.json();
      setCallId(data);
    };
    fetchPost();
  }, [id]);

  return (
    <>
      <div>Detail</div>
    </>
  );
};

export default Detail;

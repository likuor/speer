import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import handleDateTime from '../components/Feed/helper/handleTime';
import handleDetail from '../components/Feed/helper/handleDetail';
import switchIcon from '../components/Feed/helper/switchIcon';

const Detail = () => {
  const { id } = useParams();
  const [detail, setDdetail] = useState('');

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await fetch(
        `https://cerulean-marlin-wig.cyclic.app/activities/${id}`
      );
      const data = await res.json();
      setDdetail(data);
    };
    fetchDetail();
  }, [id]);

  return (
    <>
      <div>Detail</div>
      <div>
        <span>
          Call type:
          {switchIcon(detail.direction, detail.call_type)}
          {handleDetail(detail.direction, detail.call_type, detail.duration)}
        </span>
        <span></span>
        <br />
        <span>From: {detail.from}</span>
        <br />
        <span>Date: {handleDateTime(detail.created_at)}</span>
        <br />
        <span>To: {detail.to}</span>
        <br />
        <span>Via: {detail.via}</span>
      </div>
    </>
  );
};

export default Detail;

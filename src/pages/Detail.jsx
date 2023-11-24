import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import handleDateTime from '../helper/handleTime';
import handleDetail from '../helper/handleDetail';
import switchIcon from '../helper/switchIcon';
import getDetail from '../api/getDetail';
import Circular from '../components/Circular/index.jsx';

const Detail = () => {
  const { id } = useParams();
  const [detail, setDdetail] = useState('');

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await getDetail(id);
      setDdetail(data);
    };
    fetchDetail();
  }, [id]);

  if (!detail) return <Circular />;

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

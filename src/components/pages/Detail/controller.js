import { useQuery } from '@tanstack/react-query';
import getDetail from '../../../api/getDetail';
import { useParams } from 'react-router-dom';

const DetailController = () => {
  const { id } = useParams(id);
  const { data: detail, isLoading } = useQuery({
    queryFn: () => getDetail(id),
    queryKey: ['detail'],
  });

  return { detail, isLoading };
};

export default DetailController;

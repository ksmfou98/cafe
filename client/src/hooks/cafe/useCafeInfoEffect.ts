import { cafeInfoAPI } from 'lib/api/cafe';
import { reduxStateStore } from 'modules';
import { SetCafe } from 'modules/cafe';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useCafeInfoEffect(route: string, userId: string) {
  const cafeInfo = useSelector((state: reduxStateStore) => state.cafe);
  const dispatch = useDispatch();
  const [isMember, setIsMember] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await cafeInfoAPI(route, userId);
        dispatch(SetCafe(response.cafeInfo));
        setIsMember(response.member);
      } catch (e) {
        console.log(e);
        alert('카페 정보를 불러오는데 실패했습니다. 다시 접속해주세요');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [route, dispatch, userId]);

  return {
    cafeInfo,
    isMember,
    loading,
  };
}

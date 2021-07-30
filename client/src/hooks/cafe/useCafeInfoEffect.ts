import { cafeInfoAPI } from 'lib/api/cafe';
import { reduxStateStore } from 'modules';
import { SetCafe } from 'modules/cafe';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useCafeInfoEffect(route: string, userId: string) {
  const cafeInfo = useSelector((state: reduxStateStore) => state.cafe);
  const dispatch = useDispatch();
  const [isMember, setIsMember] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await cafeInfoAPI(route, userId);
        console.log(response);
        dispatch(SetCafe(response.cafeInfo));
        setIsMember(response.member);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [route, dispatch, userId]);

  return {
    cafeInfo,
    isMember,
  };
}

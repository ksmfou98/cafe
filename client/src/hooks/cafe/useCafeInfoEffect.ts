import { cafeInfoAPI } from 'lib/api/cafe';
import { reduxStateStore } from 'modules';
import { SetCafe } from 'modules/cafe';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useCafeInfoEffect(route: string) {
  const cafeInfo = useSelector((state: reduxStateStore) => state.cafe);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await cafeInfoAPI(route);
        console.log(response);
        dispatch(SetCafe(response));
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [route, dispatch]);

  return {
    cafeInfo,
  };
}

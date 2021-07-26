import { reduxStateStore } from 'modules';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function useLoginEffect() {
  const history = useHistory();
  const user = useSelector((state: reduxStateStore) => state.user);

  useEffect(() => {
    if (user._id) {
      history.push('/');
      try {
        sessionStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('세션 스토리지 저장에 실패했습니다');
      }
    }
  }, [history, user]);
}

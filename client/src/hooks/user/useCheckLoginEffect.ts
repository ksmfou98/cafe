import { reduxStateStore } from 'modules';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function useCheckLoginEffect() {
  const user = useSelector((state: reduxStateStore) => state.user);
  const history = useHistory();
  useEffect(() => {
    if (!user._id) {
      history.push('/login');
    }
  }, [history, user._id]);
}

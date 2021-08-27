import { SetWrite } from 'modules/write';
import { useDispatch } from 'react-redux';

export default function useInputs() {
  const dispatch = useDispatch();

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value, name } = e.target;
    let body = {
      key: name,
      value,
    };
    dispatch(SetWrite(body));
  };
  return {
    onChange,
  };
}

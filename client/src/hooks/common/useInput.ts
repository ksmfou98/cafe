import { useCallback, useState } from 'react';

type OnChange = (e: any) => void;
type ReturnTypes<T = any> = [T, OnChange];

export default function useInput<T = any>(initialValue: T): ReturnTypes {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange];
}

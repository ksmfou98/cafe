import { cafeCreateAPI, cafeThumbnailAPI } from 'lib/api/cafe';
import { reduxStateStore } from 'modules';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function useCreateCafe() {
  const [name, setName] = useState('');
  const [route, setRoute] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [formValid, setFormValid] = useState({
    nameValid: 'none', // "none" , "success", "error"
    routeValid: 'none',
  });

  const { nameValid, routeValid } = formValid;

  const user = useSelector((state: reduxStateStore) => state.user);
  const history = useHistory();

  const imgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setImgURL(e.target.value);
    //빈파일이 아닌 경우 함수 진행
    if (e.target.files !== null) {
      //FormData 생성
      const fd = new FormData();
      //FormData에 key, value 추가하기
      fd.append('cafe_img', e.target.files[0]);
      // axios 사용해서 백엔드에게 파일 보내기
      try {
        const image = await cafeThumbnailAPI(fd);
        setImgURL(image);
      } catch (e) {
        alert('이미지 업로드에 실패했습니다.');
      }
    }
  };

  const onCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await cafeCreateAPI(name, route, imgURL, user._id);
      history.push('/');
    } catch (e) {
      alert('카페생성에 실패했습니다');
    }
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 30) {
      return;
    }
    setName(e.target.value);
  };

  const onChangeRoute = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20) {
      return;
    }
    setRoute(e.target.value);
  };

  return {
    onCreate,
    imgUpload,
    name,
    onChangeName,
    route,
    onChangeRoute,
    imgURL,
    nameValid,
  };
}

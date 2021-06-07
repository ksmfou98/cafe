import axios from 'axios';
import AuthForm from 'components/auth/AuthForm';
import { ChangeField } from 'modules/auth';
import { SetUser, UserStateTypes } from 'modules/user';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

interface FormBody {
  form: string;
  key: string;
  value: string;
}

interface LoginFormProps {
  dispatchChangeField: (FormBody: FormBody) => void;
  dispatchSetUser: (UserBody: UserStateTypes) => void;
  form: {
    username: string;
    password: string;
  };
  user: UserStateTypes;
  history: RouteComponentProps['history'];
}

const LoginForm = ({
  dispatchChangeField,
  form,
  user,
  dispatchSetUser,
  history,
}: LoginFormProps) => {
  // 인풋 변경 이벤트 핸들러
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    let FormBody = {
      form: 'login',
      key: name,
      value,
    };
    dispatchChangeField(FormBody);
  };

  // 폼 등록 이벤트 핸들러

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = form;

    let body = {
      username,
      password,
    };

    axios
      .post('/api/auth/login', body)
      .then((response) => {
        console.log(response.data);

        if (response.data.success) {
          let body = {
            _id: response.data.user._id,
            username: response.data.user.username,
          };
          dispatchSetUser(body);
        }
      })
      .catch(function (error: any) {
        // status 코드가 200이 아닌경우 처리
        if (error) {
          alert('로그인에 실패했습니다');
        }
      });
  };

  useEffect(() => {
    if (user.username) {
      console.log('유저가 있습니다');
      history.push('/'); // 홈화면으로 이동
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    } else {
      console.log('유저가 없습니다');
    }
  }, [history, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

function mapStateToProps(state: any) {
  // redux state로 부터 state를 component의 props으로 전달해줌
  // store의 값을 여기 state로 가져올수 있음
  return { form: state.auth.login, user: state.user };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchChangeField: (FormBody: FormBody) =>
      dispatch(ChangeField(FormBody)),
    dispatchSetUser: (UserBody: UserStateTypes) => dispatch(SetUser(UserBody)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

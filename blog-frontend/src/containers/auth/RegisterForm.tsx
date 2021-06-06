import AuthForm from 'components/auth/AuthForm';
import { ChangeField } from 'modules/auth';
import React from 'react';
import { connect } from 'react-redux';

interface FormBody {
  form: string;
  key: string;
  value: string;
}

interface RegisterFormProps {
  dispatchChangeField: (FormBody: FormBody) => void;
  form: {
    username: string;
    password: string;
    passwordConfirm: string;
  };
}

const RegisterForm = ({ dispatchChangeField, form }: RegisterFormProps) => {
  // 인풋 변경 이벤트 핸들러
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    let FormBody = {
      form: 'register',
      key: name,
      value,
    };
    dispatchChangeField(FormBody);
  };

  // 폼 등록 이벤트 핸들러

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 구현 예정
  };

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

function mapStateToProps(state: any) {
  // redux state로 부터 state를 component의 props으로 전달해줌
  // store의 값을 여기 state로 가져올수 있음
  return { form: state.auth.register };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchChangeField: (FormBody: FormBody) =>
      dispatch(ChangeField(FormBody)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

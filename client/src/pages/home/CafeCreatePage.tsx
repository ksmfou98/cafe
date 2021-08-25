import CafeCreateForm from 'components/cafe/CafeCreateForm';
import styled from 'styled-components';

const CafeCreatePage = () => {
  return (
    <CafeCreatePageBlock>
      <div className="form-tit">
        <span className="title">카페 만들기</span>
        <p className="description">
          나와 같은 관심사를 가진 멤버를 모집하고 열심히 운영하여 카페를
          성장시켜보세요.
        </p>
      </div>
      <CafeCreateForm />
    </CafeCreatePageBlock>
  );
};

const CafeCreatePageBlock = styled.div`
  overflow: hidden;
  width: 800px;
  margin: 50px auto 0;
  .form-tit {
    margin-bottom: 40px;
    .title {
      font-size: 20px;
      color: #000;
    }
    .description {
      padding-top: 10px;
      font-size: 13px;
      color: #666;
    }
  }
`;

export default CafeCreatePage;

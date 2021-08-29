import styled from 'styled-components';
import Modal from './Modal';

interface DeleteModalProps {
  onToggleModal: () => void;
  isModal: boolean;
}

const DeleteModal = ({ onToggleModal, isModal }: DeleteModalProps) => {
  return (
    <Modal
      title="알림"
      onModalToggle={onToggleModal}
      buttonName="삭제"
      size="small"
      isModal={isModal}
    >
      <DeleteModalBlock>
        <span>정말 삭제하시겠습니까?</span>
      </DeleteModalBlock>
    </Modal>
  );
};

const DeleteModalBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    line-height: 1.5;
    font-size: 1rem;
    color: rgb(73, 80, 87);
    margin-top: 1rem;
    margin-bottom: 1rem;
    white-space: pre-wrap;
  }
`;

export default DeleteModal;

import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import useBoardListEffect from 'hooks/board/useBoardListEffect';
import { boardState } from 'modules/board';
import { useDispatch } from 'react-redux';
import { SetPost } from 'modules/post';
import useHandlePost from 'hooks/post/useHandlePost';
import styled from 'styled-components';
import Button from 'components/common/Button';

const PostWriteForm = ({ onSubmit }: any) => {
  const { boards } = useBoardListEffect();
  const dispatch = useDispatch();

  const { onChange, title, content, boardId } = useHandlePost();
  return (
    <PostWriteFormBlock>
      <div className="list-title">
        <h3 className="title">카페 글쓰기</h3>
      </div>
      <div className="cont-write">
        <div className="form">
          <div className="board-select">
            <select name="boardId" value={boardId} onChange={onChange}>
              <option value="">게시판을 선택해주세요</option>
              {boards.map((board: boardState, index) => (
                <option key={index} value={board._id}>
                  {board.name}
                </option>
              ))}
            </select>
          </div>
          <div className="post-title">
            <input
              type="text"
              value={title}
              onChange={onChange}
              name="title"
              placeholder="제목을 입력해주세요"
            />
          </div>
          <div className="write-cont">
            <CKEditor
              onReady={(editor: any) => {
                editor.ui
                  .getEditableElement()
                  .parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement(),
                  );
              }}
              config={{ placeholder: '게시물을 작성해주세요' }}
              onChange={(event: any, editor: any) => {
                const data = editor.getData();
                let body = {
                  key: 'content',
                  value: data,
                };
                dispatch(SetPost(body));
              }}
              editor={DecoupledEditor}
              data={content}
            />
          </div>
        </div>
      </div>
      <div className="submit-btn">
        <StyledButton color="true" type="button" onClick={onSubmit}>
          완료
        </StyledButton>
      </div>
    </PostWriteFormBlock>
  );
};

const PostWriteFormBlock = styled.div`
  .cont-write {
    padding-top: 12px;
    padding-bottom: 50px;
    .board-select {
      select {
        display: block;
        position: relative;
        width: 100%;
        padding: 0 25px 0 11px;
        border: 1px solid #ebecef;
        background: #fff;
        text-align: left;
        box-sizing: border-box;
        color: #000;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 40px;
        font-size: 15px;
      }
    }
    .post-title {
      margin-top: 12px;
      input {
        display: block;
        width: 100%;
        min-height: 40px;
        padding: 11px 12px 10px;
        border: 1px solid #ebecef;
        box-sizing: border-box;
        overflow: hidden;
        resize: none;
        word-break: break-all;
        font-size: 15px;
        letter-spacing: -0.23px;
        line-height: 17px;
        outline: none;
        height: 40px;
      }
    }

    .write-cont {
      margin-top: 12px;
      border: 1px solid #ebecef;
      .ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners {
        height: 40vh;
        overflow-y: scroll;
      }
    }
  }

  .submit-btn {
    display: flex;
    justify-content: center;
  }
`;

const StyledButton = styled(Button)`
  height: 40px;
  width: 100px;
  font-size: 16px;
`;

export default PostWriteForm;

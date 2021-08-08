import React from 'react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import './styles.scss';
import useBoardListEffect from 'hooks/board/useBoardListEffect';
import { boardState } from 'modules/board';
import { useDispatch, useSelector } from 'react-redux';
import { SetPost } from 'modules/post';
import { reduxStateStore } from 'modules';
import { postCreateAPI } from 'lib/api/post';
import { useHistory } from 'react-router-dom';

const PostWriteForm = () => {
  const { boards } = useBoardListEffect();

  const dispatch = useDispatch();
  const history = useHistory();
  const post = useSelector((state: reduxStateStore) => state.post);
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const { boardId, title, content } = post;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value, name } = e.target;
    let body = {
      key: name,
      value,
    };
    dispatch(SetPost(body));
  };

  const onCreate = async () => {
    try {
      await postCreateAPI(cafe._id, title, content, boardId);
      history.push(`/cafe/${cafe.route}`);
    } catch (e) {
      alert('게시물 작성에 실패했습니다');
      console.log(e);
    }
  };
  return (
    <>
      <div id="PostWriteForm">
        <div className="list-title">
          <h3 className="title">카페 글쓰기</h3>
          <button className="title-btn" type="button" onClick={onCreate}>
            등록
          </button>
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
      </div>
    </>
  );
};

export default PostWriteForm;

import React from 'react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import './styles.scss';

const PostWriteForm = () => {
  return (
    <>
      <div id="PostWriteForm">
        <div className="list-title">
          <h3 className="title">카페 글쓰기</h3>
          <button className="write-post">등록</button>
        </div>
        <div className="cont-write">
          <form action="">
            <div className="board-select">
              <select name="" id="">
                <option value="">게시판을 선택해주세요</option>
                <option value="">자유게시판</option>
                <option value="">질문 답변 게시판</option>
              </select>
            </div>
            <div className="post-title">
              <input type="text" placeholder="제목을 입력해주세요" />
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
                }}
                editor={DecoupledEditor}
                data=""
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostWriteForm;

/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import Header from 'components/common/Header';
import React from 'react';

const PostListPage = () => {
  return (
    <div>
      <Header />
      <div css={test}>안녕하세요.</div>
    </div>
  );
};

const test = css`
  color: red;
`;
export default PostListPage;

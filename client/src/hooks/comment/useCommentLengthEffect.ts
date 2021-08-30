import { reduxStateStore } from 'modules';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function useCommentLengthEffect() {
  const comments = useSelector((state: reduxStateStore) => state.comment);
  const [commentLength, setCommentLength] = useState(0);

  const onCalculate = useCallback(() => {
    let commentLen = 0;
    comments.map(
      (comment) => (commentLen = commentLen + comment.reply.length + 1),
    );
    return commentLen;
  }, [comments]);

  useEffect(() => {
    setCommentLength(onCalculate());
  }, [onCalculate]);

  return {
    commentLength,
  };
}

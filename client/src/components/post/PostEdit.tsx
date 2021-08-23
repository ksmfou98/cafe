import PostWriteForm from 'components/post/PostWriteForm';
import useHandlePost from 'hooks/post/useHandlePost';
import usePostEditEffect from 'hooks/post/usePostEditEffect';

const PostEdit = () => {
  usePostEditEffect();
  const { onUpdate } = useHandlePost();
  return (
    <div>
      <PostWriteForm onSubmit={onUpdate} />
    </div>
  );
};

export default PostEdit;

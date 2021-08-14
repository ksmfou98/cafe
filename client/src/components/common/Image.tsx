import styled from 'styled-components';

interface ImageProps {
  text?: string;
  img?: string;
}

const Image = ({ text, img }: ImageProps) => {
  return (
    <ImageBlock>
      <div className="Image-img">
        <img src={img} alt={text} />
      </div>
      <div className="txt">{text}</div>
    </ImageBlock>
  );
};

const ImageBlock = styled.div`
  padding: 40px 0 15px;
  .Image-img {
    width: 250px;
    margin: 0 auto;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .txt {
    text-align: center;
    color: rgb(114, 130, 138);
    font-weight: 700;
    font-size: 20px;
  }
`;

export default Image;

import { palette } from 'lib/styles/palette';
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ButtonProps {
  color: boolean;
  to?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ color, to, children, onClick, ...rest }: ButtonProps) => {
  if (to) {
    return (
      <StyledLink color={color} to={to} {...rest}>
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledButton color={color} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

interface commonStyleProps {
  color: boolean;
}

const commonStyle = css`
  border-radius: 5px;
  margin-right: 10px;
  font-weight: 700;
  font-size: 14px;
  ${(props: commonStyleProps) =>
    props.color
      ? css`
          background-color: ${palette.mainColor};
          color: #fff;
          border: none;
        `
      : css`
          border: 1px solid ${palette.mainColor};
          color: ${palette.mainColor};
        `}
`;

const StyledLink = styled(Link)`
  ${commonStyle}
  padding: 3px 13px;
`;

const StyledButton = styled.button`
  ${commonStyle}
  padding: 6px 13px;
`;

export default Button;

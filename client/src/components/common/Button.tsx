import { palette } from 'lib/styles/palette';
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ButtonProps {
  color: 'true' | 'false';
  to?: string;
  children?: React.ReactNode;
  type?: 'button' | 'reset' | 'submit' | undefined;
  onClick?: () => void;
}

const Button = ({
  color,
  to,
  type,
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  if (to) {
    return (
      <StyledLink color={color} to={to} onClick={onClick} {...rest}>
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledButton color={color} type={type} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

const commonStyle = css<{ color: 'true' | 'false' }>`
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  ${(props) =>
    props.color === 'true'
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
  display:flex;
  align-items: center;
  justify-content: center;
  line-height: 15px;
`;

const StyledButton = styled.button`
  ${commonStyle}
`;

export default Button;

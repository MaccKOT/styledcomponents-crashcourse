import React from 'react';
import styled, { css, keyframes } from 'styled-components';

// пример анимации
const rotateAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
100% {
    transform: rotateZ(360deg);
}
`;

const bounceAnimation = keyframes`
0%, 100%, 20%, 50%, 80% {
  -webkit-transform: translateY(0);
  -ms-transform:     translateY(0);
  transform:         translateY(0);
}
40% {
  -webkit-transform: translateY(-30px);
  -ms-transform:     translateY(-30px);
  transform:         translateY(-30px);
}
60% {
  -webkit-transform: translateY(-15px);
  -ms-transform:     translateY(-15px);
  transform:         translateY(-15px);
}
`;

const StyledButton = styled.button.attrs((props) => ({
  outlined: true, // дефолтные параметры
}))`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &: hover {
    animation: ${bounceAnimation} 1s linear;
  }
  align-self: ${(props) => props.align || 'stretch'};

  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || 'white'};
      background: ${(props) => props.background || 'white'};
    `}
  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || 'white'};
      border: 1px solid ${(props) => props.color || 'white'};
      background: transparent;
    `}
`;

// пример наследования свойств в новом компоненте
const LargeButton = styled(StyledButton)`
  font-size: 32px;
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;

import styled from 'styled-components';

const IconButtonStyle = styled.button`
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ background, theme: { colors } }) =>
    background ? colors[background] : 'transparent'};
  color: ${({ background, theme: { colors } }) =>
    background ? colors.white : 'inherit'};

  & svg {
    display: block;
  }

  &:hover {
    background-color: ${({ background, theme: { colors } }) =>
      background ? colors.lightgrey : 'transparent'};
    outline: 1px solid
      ${({ background, theme: { colors } }) =>
        background ? colors[background] : 'none'};
    color: ${({ background, color, theme: { colors } }) =>
      background ? colors[background] : colors[color]};
  }
`;

export { IconButtonStyle };

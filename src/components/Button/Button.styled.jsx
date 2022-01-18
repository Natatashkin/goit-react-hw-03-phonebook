import styled from 'styled-components';

const FormButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(4)}`};
  border: none;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.blue};
  color: ${({ theme: { colors } }) => colors.white};

  /* &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.ligthgrey};
    color: ${({ theme: { colors } }) => colors.wihite};
    outline-color: 1px solid ${({ theme: { colors } }) => colors.blue};
  }
 */
  &:active {
    background-color: ${({ theme: { colors } }) => colors.ligthgrey};
    outline-color: 1px solid ${({ theme: { colors } }) => colors.blue};
    box-shadow: ${({ theme: { options } }) => options.shadow};
  }
`;

export default FormButton;

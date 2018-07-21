import styled, { css } from 'styled-components';

const Div = styled.div`
  ${props => props.navLogo && css`
    width: 33%;
  `}
  ${props => props.navLinks && css`
    width: 77%;
  `}
`;

export default Div;

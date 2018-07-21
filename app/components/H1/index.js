import styled, { css } from 'styled-components';

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.25em;

  ${props => props.logo && css`
    font-size: 1.25em;
    font-family: proxima-nova, sans-serif;
    font-weight: 200;
    text-align: left;
    padding: 0.25em 2em;
    color: #f3f3f3;
  `}
`;

export default H1;

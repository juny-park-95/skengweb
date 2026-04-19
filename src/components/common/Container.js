import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: ${({ theme, $wide }) => ($wide ? theme.layout.containerWide : theme.layout.container)};
  margin: 0 auto;
  padding-left: clamp(1rem, 5vw, 2.5rem);
  padding-right: clamp(1rem, 5vw, 2.5rem);
`;

export default Container;

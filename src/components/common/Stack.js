import styled from 'styled-components';

const Stack = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'column'};
  gap: ${({ theme, $gap }) => theme.spacing[$gap || 4]};
  align-items: ${({ $align }) => $align || 'stretch'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
`;

export default Stack;

import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({ $min }) => $min || '260px'}, 1fr));
  gap: ${({ theme, $gap }) => theme.spacing[$gap || 6]};
`;

export default Grid;

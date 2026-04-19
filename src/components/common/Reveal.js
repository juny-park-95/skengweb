import React from 'react';
import styled from 'styled-components';
import useReveal from '../../hooks/useReveal';

const Wrapper = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '24px')});
  transition: opacity 0.7s ${({ theme }) => theme.transitions.easeOut},
    transform 0.7s ${({ theme }) => theme.transitions.easeOut};
  transition-delay: ${({ $delay }) => $delay || '0ms'};
  will-change: transform, opacity;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
  }
`;

function Reveal({ children, delay, as = 'div', ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Wrapper as={as} ref={ref} $visible={visible} $delay={delay} {...rest}>
      {children}
    </Wrapper>
  );
}

export default Reveal;

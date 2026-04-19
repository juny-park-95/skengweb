import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  min-height: clamp(260px, 42vh, 420px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: clamp(4rem, 10vw, 7rem) clamp(1rem, 5vw, 2.5rem) clamp(3rem, 8vw, 5rem);
  color: #ffffff;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: ${({ $image }) => ($image ? `url('${$image}')` : 'none')};
    background-size: cover;
    background-position: center;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 30, 70, 0.82) 0%,
      rgba(0, 66, 128, 0.68) 100%
    );
    z-index: -1;
  }
`;

const Inner = styled.div`
  max-width: 780px;
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.palette.blue[200]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  color: inherit;
  margin: 0;
`;

const Description = styled.p`
  margin-top: ${({ theme }) => theme.spacing[5]};
  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: rgba(255, 255, 255, 0.86);
`;

function PageBanner({ eyebrow, title, description, image }) {
  return (
    <Wrapper $image={image}>
      <Inner>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Inner>
    </Wrapper>
  );
}

export default PageBanner;

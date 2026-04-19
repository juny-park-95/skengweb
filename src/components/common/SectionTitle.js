import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  text-align: ${({ $align }) => $align || 'center'};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  max-width: ${({ $align }) => ($align === 'left' ? 'none' : '720px')};
  margin-left: ${({ $align }) => ($align === 'left' ? '0' : 'auto')};
  margin-right: ${({ $align }) => ($align === 'left' ? '0' : 'auto')};
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.brand};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const Title = styled.h2`
  font-size: clamp(1.75rem, 3.4vw, 2.5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  color: inherit;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${({ $align }) => ($align === 'left' ? '0' : '50%')};
    transform: ${({ $align }) => ($align === 'left' ? 'none' : 'translateX(-50%)')};
    width: 48px;
    height: 3px;
    border-radius: ${({ theme }) => theme.radii.full};
    background: ${({ theme }) => theme.colors.brand};
  }
`;

const Subtitle = styled.p`
  margin-top: ${({ theme }) => theme.spacing[5]};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

function SectionTitle({ eyebrow, title, subtitle, align = 'center', as = 'h2' }) {
  return (
    <Wrapper $align={align}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Title as={as} $align={align}>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  );
}

export default SectionTitle;

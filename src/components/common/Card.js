import React from 'react';
import styled, { css } from 'styled-components';

const interactive = css`
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base},
    border-color ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.brandSoftAlt};
  }
`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${({ $interactive }) => $interactive && interactive};
`;

const MediaFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $ratio }) => $ratio || '16 / 10'};
  background-color: ${({ theme }) => theme.colors.bgMuted};
  overflow: hidden;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: ${({ $fit }) => $fit || 'cover'};
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  ${Card}:hover & img {
    transform: scale(1.04);
  }
`;

export function CardMedia({ image, alt = '', ratio, fit, eager = false, ...rest }) {
  return (
    <MediaFrame $ratio={ratio} $fit={fit} {...rest}>
      {image && (
        <img
          src={image}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
    </MediaFrame>
  );
}

export const CardBody = styled.div`
  padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[6]}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
`;

export default Card;

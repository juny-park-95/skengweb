import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  height: 40px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.bgMuted};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  transition: background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.brandSoft};
    color: ${({ theme }) => theme.colors.brand};
  }

  span.on {
    color: ${({ theme }) => theme.colors.brand};
  }

  span.divider {
    color: ${({ theme }) => theme.colors.borderStrong};
  }
`;

function LanguageToggle({ lang, onToggle, label }) {
  return (
    <Button type="button" onClick={onToggle} aria-label={label} title={label}>
      <span className={lang === 'ko' ? 'on' : ''}>KO</span>
      <span className="divider">/</span>
      <span className={lang === 'en' ? 'on' : ''}>EN</span>
    </Button>
  );
}

export default LanguageToggle;

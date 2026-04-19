import styled, { css } from 'styled-components';

const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  `,
};

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.textInverse};
    &:hover { background: ${({ theme }) => theme.colors.brandHover}; }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.brand};
    border: 1px solid ${({ theme }) => theme.colors.brand};
    &:hover {
      background: ${({ theme }) => theme.colors.brandSoft};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    &:hover { background: ${({ theme }) => theme.colors.bgMuted}; }
  `,
  inverse: css`
    background: ${({ theme }) => theme.colors.textInverse};
    color: ${({ theme }) => theme.colors.brand};
    &:hover { background: ${({ theme }) => theme.colors.bgAlt}; }
  `,
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid transparent;
  text-decoration: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};

  ${({ $size = 'md' }) => sizeStyles[$size]};
  ${({ $variant = 'primary' }) => variantStyles[$variant]};

  &:active { transform: translateY(1px); }
  &:disabled { opacity: 0.55; cursor: not-allowed; }
`;

export default Button;

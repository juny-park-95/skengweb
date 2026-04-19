import styled from 'styled-components';

const Section = styled.section`
  padding: clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 2.5rem);
  background-color: ${({ theme, $variant }) => {
    if ($variant === 'muted') return theme.colors.bgAlt;
    if ($variant === 'brand') return theme.colors.brandSoft;
    if ($variant === 'dark')  return theme.colors.palette.neutral[900];
    return theme.colors.bg;
  }};
  color: ${({ theme, $variant }) =>
    $variant === 'dark' ? theme.colors.textInverse : theme.colors.text};
`;

export default Section;

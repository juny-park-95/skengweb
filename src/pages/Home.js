import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Section,
  SectionTitle,
  Grid,
  Card,
  CardMedia,
  CardBody,
  CardTitle,
  CardDescription,
  Container,
  Button,
  Reveal,
} from '../components/common';
import { useI18n } from '../i18n';

const BUSINESS_IMAGES = [
  '/images/power_equipment.jpg',
  '/images/automation_components.jpg',
  '/images/measuring_instruments.jpg',
  '/images/cables_parts.jpg',
];

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
  40% { transform: translate(-50%, -14px); }
  60% { transform: translate(-50%, -8px); }
`;

const PageWrapper = styled.main`
  padding-top: ${({ theme }) => theme.layout.headerHeight};
`;

const Hero = styled.section`
  position: relative;
  min-height: min(100vh, 760px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: clamp(4rem, 12vh, 8rem) clamp(1rem, 5vw, 2.5rem);
  color: #ffffff;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('/images/hero-background.jpg') center/cover no-repeat;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 24, 60, 0.85) 0%,
      rgba(0, 66, 128, 0.7) 55%,
      rgba(0, 102, 204, 0.55) 100%
    );
    z-index: -1;
  }
`;

const HeroInner = styled.div`
  max-width: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const HeroEyebrow = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.palette.blue[100]};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: ${({ theme }) => theme.radii.full};
  backdrop-filter: blur(6px);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.25rem, 5.5vw, 3.75rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  color: inherit;
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: rgba(255, 255, 255, 0.92);
  margin: 0;
`;

const HeroDescription = styled.p`
  font-size: clamp(0.95rem, 1.3vw, 1.0625rem);
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: rgba(255, 255, 255, 0.85);
  max-width: 640px;
  margin: 0;
`;

const HeroActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing[8]};
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  animation: ${bounce} 2.2s infinite;
  color: rgba(255, 255, 255, 0.8);
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  text-transform: uppercase;

  svg {
    width: 26px;
    height: 26px;
  }
`;

function Home() {
  const { t } = useI18n();
  const hero = t.home.hero;
  const biz = t.home.business;

  return (
    <PageWrapper id="main-content">
      <Hero>
        <HeroInner>
          <HeroEyebrow>{hero.eyebrow}</HeroEyebrow>
          <HeroTitle>{hero.title}</HeroTitle>
          <HeroSubtitle>{hero.subtitle}</HeroSubtitle>
          <HeroDescription>{hero.description}</HeroDescription>
          <HeroActions>
            <Button as="a" href="/business" $variant="inverse" $size="lg">
              {hero.primaryCta}
            </Button>
            <Button
              as="a"
              href="/location"
              $variant="ghost"
              $size="lg"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
            >
              {hero.secondaryCta}
            </Button>
          </HeroActions>
        </HeroInner>
        <ScrollIndicator>
          <span>{t.common.scroll}</span>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </ScrollIndicator>
      </Hero>

      <Section $variant="muted">
        <Container>
          <SectionTitle
            eyebrow={biz.eyebrow}
            title={biz.title}
            subtitle={biz.subtitle}
          />
          <Grid $min="260px">
            {biz.cards.map((card, idx) => (
              <Reveal key={card.title} delay={`${idx * 100}ms`}>
                <Card $interactive>
                  <CardMedia
                    image={BUSINESS_IMAGES[idx]}
                    alt={card.title}
                    fit="contain"
                    ratio="4 / 3"
                  />
                  <CardBody>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardBody>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </Section>
    </PageWrapper>
  );
}

export default Home;

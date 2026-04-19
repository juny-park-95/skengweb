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

const BUSINESS_CARDS = [
  {
    title: '주요 전기 기계·장비',
    description:
      '발전소의 안정적인 전력 생산 및 공급에 필수적인 변압기, 차단기, 보호 계전기 등 고품질의 핵심 전기 기계 및 장비를 공급합니다.',
    image: '/images/power_equipment.jpg',
  },
  {
    title: '제어 시스템 및 전자 부품',
    description:
      '발전 설비의 정밀 제어 및 자동화 시스템 구축에 필요한 PLC, 센서, 제어 모듈 등 다양한 고성능 전자 부품 및 시스템 솔루션을 제공합니다.',
    image: '/images/automation_components.jpg',
  },
  {
    title: '계측기기 및 시험 장비',
    description:
      '설비 상태의 정확한 측정, 진단 및 감시를 위한 전압/전류계, 온도/압력계 등 신뢰성 높은 산업용 계측기기와 시험 장비를 공급합니다.',
    image: '/images/measuring_instruments.jpg',
  },
  {
    title: '관련 기자재 및 부품',
    description:
      '케이블, 커넥터, 배관 자재, 예비 부품 등 발전소 운영 및 유지보수에 필요한 다양한 종류의 고품질 관련 기자재와 소모품을 취급합니다.',
    image: '/images/cables_parts.jpg',
  },
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
  color: ${({ theme }) => theme.colors.textInverse};
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
  return (
    <PageWrapper id="main-content">
      <Hero>
        <HeroInner>
          <HeroEyebrow>Since 1999 · Power Engineering Partner</HeroEyebrow>
          <HeroTitle>(주)에스앤케이이엔지</HeroTitle>
          <HeroSubtitle>전기·전자 기자재 전문 공급 파트너</HeroSubtitle>
          <HeroDescription>
            (주)에스앤케이이엔지는 두온시스템(주) 발전소 대리점입니다.
            다년간의 경험과 전문성을 바탕으로 신뢰할 수 있는 공급 파트너가 되겠습니다.
          </HeroDescription>
          <HeroActions>
            <Button as="a" href="/business" $variant="inverse" $size="lg">
              사업영역 보기
            </Button>
            <Button as="a" href="/location" $variant="ghost" $size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
              문의하기
            </Button>
          </HeroActions>
        </HeroInner>
        <ScrollIndicator>
          <span>Scroll</span>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </ScrollIndicator>
      </Hero>

      <Section $variant="muted">
        <Container>
          <SectionTitle
            eyebrow="Business"
            title="사업영역"
            subtitle="발전소의 안정적이고 효율적인 운영에 필요한 전기·전자 핵심 솔루션을 공급합니다."
          />
          <Grid $min="260px">
            {BUSINESS_CARDS.map((card, idx) => (
              <Reveal key={card.title} delay={`${idx * 100}ms`}>
                <Card $interactive>
                  <CardMedia image={card.image} alt={card.title} fit="contain" ratio="4 / 3" />
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

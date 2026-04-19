import React from 'react';
import styled from 'styled-components';
import {
  PageBanner,
  Section,
  SectionTitle,
  Container,
  Grid,
  Card,
  CardBody,
  CardDescription,
} from '../components/common';

const TALENTS = [
  {
    title: '창의적 인재',
    description:
      '기존의 틀에서 벗어나 새로운 관점으로 문제를 바라보고, 혁신적인 아이디어를 도출하며 지속적인 변화와 발전을 추구합니다.',
    svg: (
      <path d="M13.5 1.5 15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm3-0.75v7.5h4.5v-7.5h-4.5zm-3 15L15 14.25h7.5l1.5 1.5v7.5L22.5 24.75H15l-1.5-1.5v-7.5zm3-0.75v7.5h4.5v-7.5h-4.5zM0 14.25l1.5-1.5h7.5l1.5 1.5v7.5l-1.5 1.5H1.5L0 21.75v-7.5zm3 0.75v7.5h4.5V15H3zm0-14.25v7.5h4.5v-7.5H3z" />
    ),
  },
  {
    title: '전문적 인재',
    description:
      '자신의 분야에서 최고의 전문성을 추구하고, 끊임없는 학습과 자기계발을 통해 역량을 강화하며 글로벌 시장에서 경쟁력을 갖춘 인재입니다.',
    svg: (
      <path d="M10 16.5l-4-4 4-4L9 7 4 12l5 5 1-0.5zm4-9 4 4-4 4 1 1.5 5-5.5-5-5L14 7.5z" />
    ),
  },
  {
    title: '협력적 인재',
    description:
      '다양한 배경과 관점을 존중하며 조직 내외부와 원활하게 소통하고, 시너지를 창출할 수 있는 협업 역량을 갖춘 인재입니다.',
    svg: (
      <path d="M12 5.5C13.11 5.5 14 6.39 14 7.5 14 8.61 13.11 9.5 12 9.5c-1.11 0-2-.89-2-2 0-1.11.89-2 2-2M5 8c.18 0 .35.03.5.05C6.41 5.88 9.07 4.5 12 4.5c2.93 0 5.59 1.38 6.5 3.55.15-.02.32-.05.5-.05 1.11 0 2 .9 2 2s-.9 2-2 2c-.04 0-.09 0-.13-.03C18.09 15 15.28 17 12 17s-6.09-2-6.87-5.03C5.09 12 5.04 12 5 12c-1.11 0-2-.9-2-2s.9-2 2-2m7 6.5c2.14 0 3.5-1.13 3.5-3v-.5c0-1.87-1.64-3-4-3-2 0-3.5 1.13-3.5 3 0 1.87 1.5 3.5 4 3.5M9 18c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
    ),
  },
];

const STEPS = [
  { n: 1, title: '서류전형',  description: '지원서 및 자기소개서 검토' },
  { n: 2, title: '1차 면접', description: '실무진 면접 (직무역량 평가)' },
  { n: 3, title: '2차 면접', description: '임원진 면접 (종합역량 평가)' },
  { n: 4, title: '최종합격', description: '신체검사 및 입사' },
];

const Lead = styled.p`
  max-width: 780px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0 auto ${({ theme }) => theme.spacing[10]};
  text-align: center;
`;

const TalentCard = styled(Card)`
  text-align: center;
`;

const TalentIcon = styled.div`
  height: 160px;
  background: linear-gradient(135deg,
    ${({ theme }) => theme.colors.brand} 0%,
    ${({ theme }) => theme.colors.palette.blue[800]} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  svg {
    width: 68px;
    height: 68px;
  }
`;

const Steps = styled.ol`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing[10]} 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 36px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: ${({ theme }) => theme.colors.palette.blue[100]};
    z-index: 0;
  }

  ${({ theme }) => theme.media.mdDown} {
    grid-template-columns: 1fr;
    &::before { display: none; }
  }
`;

const Step = styled.li`
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const StepCircle = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.textInverse};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text};
`;

const StepDesc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  max-width: 220px;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

function HumanResources() {
  return (
    <main id="main-content">
      <PageBanner
        eyebrow="Careers"
        title="인재채용"
        description="열정적이고 도전적인 인재, 전문성과 협업 역량을 갖춘 인재를 찾습니다."
        image="/images/hr-banner.jpg"
      />

      <Section id="talent">
        <Container>
          <SectionTitle eyebrow="People" title="인재상" />
          <Lead>
            (주)에스앤케이이엔지는 열정적이고 도전적인 인재, 창의적이고 혁신적인 사고를 가진 인재,
            전문성과 글로벌 역량을 갖춘 인재를 소중히 여깁니다.
          </Lead>

          <Grid $min="280px">
            {TALENTS.map((t) => (
              <TalentCard key={t.title}>
                <TalentIcon>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {t.svg}
                  </svg>
                </TalentIcon>
                <CardBody>
                  <h3 style={{ textAlign: 'center' }}>{t.title}</h3>
                  <CardDescription>{t.description}</CardDescription>
                </CardBody>
              </TalentCard>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="recruitment" $variant="muted">
        <Container>
          <SectionTitle eyebrow="Process" title="채용 프로세스" />
          <Lead>공정하고 투명한 채용 프로세스를 통해 우수한 인재를 선발합니다.</Lead>

          <Steps>
            {STEPS.map((s) => (
              <Step key={s.n}>
                <StepCircle>{s.n}</StepCircle>
                <StepTitle>{s.title}</StepTitle>
                <StepDesc>{s.description}</StepDesc>
              </Step>
            ))}
          </Steps>
        </Container>
      </Section>
    </main>
  );
}

export default HumanResources;

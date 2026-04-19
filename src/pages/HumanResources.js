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
import { useI18n } from '../i18n';

const TALENT_ICONS = [
  <path key="creative" d="M13.5 1.5 15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm3-0.75v7.5h4.5v-7.5h-4.5zm-3 15L15 14.25h7.5l1.5 1.5v7.5L22.5 24.75H15l-1.5-1.5v-7.5zm3-0.75v7.5h4.5v-7.5h-4.5zM0 14.25l1.5-1.5h7.5l1.5 1.5v7.5l-1.5 1.5H1.5L0 21.75v-7.5zm3 0.75v7.5h4.5V15H3zm0-14.25v7.5h4.5v-7.5H3z" />,
  <path key="expert"   d="M10 16.5l-4-4 4-4L9 7 4 12l5 5 1-0.5zm4-9 4 4-4 4 1 1.5 5-5.5-5-5L14 7.5z" />,
  <path key="collab"   d="M12 5.5C13.11 5.5 14 6.39 14 7.5 14 8.61 13.11 9.5 12 9.5c-1.11 0-2-.89-2-2 0-1.11.89-2 2-2M5 8c.18 0 .35.03.5.05C6.41 5.88 9.07 4.5 12 4.5c2.93 0 5.59 1.38 6.5 3.55.15-.02.32-.05.5-.05 1.11 0 2 .9 2 2s-.9 2-2 2c-.04 0-.09 0-.13-.03C18.09 15 15.28 17 12 17s-6.09-2-6.87-5.03C5.09 12 5.04 12 5 12c-1.11 0-2-.9-2-2s.9-2 2-2m7 6.5c2.14 0 3.5-1.13 3.5-3v-.5c0-1.87-1.64-3-4-3-2 0-3.5 1.13-3.5 3 0 1.87 1.5 3.5 4 3.5M9 18c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />,
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
  const { t } = useI18n();
  const h = t.hr;

  return (
    <main id="main-content">
      <PageBanner
        eyebrow={h.banner.eyebrow}
        title={h.banner.title}
        description={h.banner.description}
        image="/images/hr-banner.jpg"
      />

      <Section id="talent">
        <Container>
          <SectionTitle eyebrow={h.talentEyebrow} title={h.talentTitle} />
          <Lead>{h.talentLead}</Lead>

          <Grid $min="280px">
            {h.talents.map((talent, idx) => (
              <TalentCard key={talent.title}>
                <TalentIcon>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {TALENT_ICONS[idx]}
                  </svg>
                </TalentIcon>
                <CardBody>
                  <h3 style={{ textAlign: 'center' }}>{talent.title}</h3>
                  <CardDescription>{talent.description}</CardDescription>
                </CardBody>
              </TalentCard>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="recruitment" $variant="muted">
        <Container>
          <SectionTitle eyebrow={h.processEyebrow} title={h.processTitle} />
          <Lead>{h.processLead}</Lead>

          <Steps>
            {h.steps.map((s, idx) => (
              <Step key={s.title}>
                <StepCircle>{idx + 1}</StepCircle>
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

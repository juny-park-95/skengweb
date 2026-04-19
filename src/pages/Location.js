import React from 'react';
import styled from 'styled-components';
import {
  PageBanner,
  Section,
  SectionTitle,
  Container,
  Grid,
  Card,
} from '../components/common';

const TRANSPORT = [
  {
    icon: '🚗',
    title: '자가용 이용 시',
    lines: ['서해안고속도로 안산 IC에서 15분', '주차장 무료 이용 가능'],
  },
  {
    icon: '🚍',
    title: '버스 이용 시',
    lines: ['안산역/안산터미널 정류장 하차', '123 · 456번 버스 이용', '‘신촌사거리’ 하차 후 도보 5분'],
  },
  {
    icon: '🚆',
    title: '지하철 이용 시',
    lines: ['4호선 안산역 하차', '2번 출구에서 도보 15분', '또는 123 · 456번 버스 환승'],
  },
];

const InfoLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.spacing[8]};

  ${({ theme }) => theme.media.mdDown} {
    grid-template-columns: 1fr;
  }
`;

const AddressCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[8]};
  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: ${({ theme }) => theme.colors.brand};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
  p {
    color: ${({ theme }) => theme.colors.textMuted};
    margin: 0 0 ${({ theme }) => theme.spacing[2]};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  }
`;

const MapFrame = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};

  iframe {
    width: 100%;
    height: 460px;
    border: 0;
    display: block;
    ${({ theme }) => theme.media.mdDown} {
      height: 340px;
    }
  }
`;

const TransportCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[8]};
  align-items: flex-start;

  .icon {
    font-size: 2rem;
    width: 52px;
    height: 52px;
    border-radius: ${({ theme }) => theme.radii.md};
    background: ${({ theme }) => theme.colors.brandSoft};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    margin: 0 0 ${({ theme }) => theme.spacing[1]};
  }
`;

function Location() {
  return (
    <main id="main-content">
      <PageBanner
        eyebrow="Contact"
        title="오시는 길"
        description="안산 본사 위치와 교통 안내입니다."
        image="/images/location-banner.jpg"
      />

      <Section>
        <Container>
          <SectionTitle eyebrow="Visit" title="찾아오시는 방법" />
          <InfoLayout>
            <AddressCard>
              <h3>주소</h3>
              <p>경기 안산시 단원구 신촌5길 28</p>
              <p>우편번호: 15443</p>
              <p>전화: 070-8270-0665</p>
              <p>이메일: sk5559611@hanmail.net</p>
              <p>영업시간: 평일 09:00 – 18:00</p>
              <p>토·일·공휴일 휴무</p>
            </AddressCard>
            <MapFrame>
              <iframe
                title="에스앤케이이엔지 오시는 길"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7777430184738!2d126.81750527184691!3d37.31454205827108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6e53e53fe145%3A0x7bd617d6a3522ffd!2z6rK96riw64-EIOyViOyCsOyLnCDri6jsm5Dqtawg7Iug7LSMNeq4uCAyOA!5e0!3m2!1sko!2skr!4v1744726564468!5m2!1sko!2skr"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapFrame>
          </InfoLayout>
        </Container>
      </Section>

      <Section $variant="muted">
        <Container>
          <SectionTitle eyebrow="Transport" title="교통 안내" />
          <Grid $min="260px">
            {TRANSPORT.map((t) => (
              <TransportCard key={t.title}>
                <span className="icon" role="img" aria-label={t.title}>{t.icon}</span>
                <h3>{t.title}</h3>
                {t.lines.map((line, idx) => <p key={idx}>{line}</p>)}
              </TransportCard>
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

export default Location;

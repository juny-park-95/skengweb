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
  CardTitle,
  CardDescription,
} from '../components/common';

const HISTORY = [
  { year: '2025', items: ['디지털 제어·분석 플랫폼 구축', '중부발전·KPS 디지털 컨버터·레벨전송기 대규모 공급'] },
  { year: '2023', items: ['AI·로봇 제어시스템 상용화', '중부발전 지능형 IoT 로봇 시스템 (₩52M)'] },
  { year: '2020', items: ['스마트 팩토리용 계측장비 확대', '대산전력 전기팀 계측장비 & 수공구 패키지 (₩32M)'] },
  { year: '2017', items: ['IoT·스마트 제어시장 진출', '중부발전 FAN 계통 온도 TX, 자동화 액추에이터 공급'] },
  { year: '2015', items: ['고신뢰성 트랜스미터 솔루션 확산', '중부발전 Transmitter 9종 (₩90M)', '사명 변경 – 주식회사 에스앤케이이엔지'] },
  { year: '2013', items: ['초음파·레이더 계측기 대량 공급', '서부발전·중부발전 초음파 Level Tx 대량 프로젝트', '법인 설립 – 주식회사 에스케이이엔지'] },
  { year: '2010', items: ['핵심 제어설비 공급 역량 검증', '남동발전 탈황제어 설비용 Speed Switch (₩260M)'] },
  { year: '2007', items: ['첫 대형 플랜트 수주', '중부발전 295품목 공급 (₩150M 규모)', '설립 – 에스케이이엔지'] },
];

const AWARDS = [
  {
    image: '/images/prize_01.png',
    title: '한국중부발전 인천화력본부 감사패',
    lines: [
      '기력 1, 2호기 터빈 취약설비 보강을 위한 부품 납품 및 설비 운영 기여',
      '한국중부발전㈜ 인천화력본부는 에스앤케이이엔지의 탁월한 기술력과 신속한 대응으로 설비 안전성 향상 및 발전소 안정적 운영에 기여한 공로를 인정하여 감사패를 수여하였습니다.',
    ],
    date: '2013년 11월 29일',
  },
  {
    image: '/images/prize_02.png',
    title: '한국동서발전(주) 실증참여확인서',
    lines: [
      '배관 압력 전송기 국산화 주도 및 발전 설비 국산화 실증 완료',
      '한국동서발전(주)는 에스앤케이이엔지가 수행한 배관 압력 전송기 국산화 개발 및 실증 사업에 참여하여 국내 발전소 설비 국산화에 기여한 성과를 인정하여 실증참여확인서를 발급하였습니다.',
    ],
    date: '2020년 11월 27일',
  },
];

const CERTIFICATIONS = [
  {
    image: '/images/iso_korean.png',
    title: 'ISO 9001:2008 / KS Q ISO 9001:2009 인증',
    desc: '품질경영시스템 국제 표준 인증. 제품 및 서비스의 국제 품질 표준 준수를 인증받아 고객에게 일관된 품질의 제품과 서비스를 제공합니다.',
    meta: '인증기관: 한국표준협회(ITS) · 인증번호: ITS-KQ-00563',
  },
  {
    image: '/images/iso_eng.png',
    title: 'ISO 9001:2008 / KS Q ISO 9001:2009 Certificate',
    desc: 'International Standard for Quality Management Systems. Certified to provide consistent quality products and services according to international standards.',
    meta: 'Certification Body: ITS · Certificate No: ITS-KQ-00563',
  },
];

const TRANSPORT = [
  { icon: '🚗', title: '자가용', lines: ['서해안고속도로 안산 IC → 15분 소요', '사내 주차장 무료 이용 가능'] },
  { icon: '🚌', title: '버스', lines: ['안산역/안산터미널 정류장 하차', '123 · 456번 버스 → ‘신촌사거리’ 하차 → 도보 5분'] },
  { icon: '🚆', title: '지하철', lines: ['4호선 안산역 2번 출구 → 도보 15분', '또는 123 · 456번 버스 환승 후 ‘신촌사거리’ 하차'] },
];

const Lead = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  max-width: 760px;
  margin-bottom: ${({ theme }) => theme.spacing[8]};

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  }
`;

const DocumentsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

const DocumentCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[5]};
  align-items: center;

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    color: ${({ theme }) => theme.colors.brand};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    text-align: center;
  }

  img {
    width: 100%;
    max-height: 320px;
    object-fit: contain;
    background: ${({ theme }) => theme.colors.bgAlt};
    padding: ${({ theme }) => theme.spacing[4]};
    border-radius: ${({ theme }) => theme.radii.md};
  }
`;

const Timeline = styled.ol`
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 3px;
    background: ${({ theme }) => theme.colors.palette.blue[100]};
    transform: translateX(-50%);
  }

  ${({ theme }) => theme.media.mdDown} {
    &::before { left: 20px; }
  }
`;

const TimelineItem = styled.li`
  position: relative;
  width: 50%;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[10]}`};
  box-sizing: border-box;

  &:nth-child(odd)  { left: 0; text-align: right; }
  &:nth-child(even) { left: 50%; text-align: left; }

  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.colors.bg};
    border: 3px solid ${({ theme }) => theme.colors.brand};
    border-radius: ${({ theme }) => theme.radii.full};
    top: ${({ theme }) => theme.spacing[5]};
  }

  &:nth-child(odd)::after  { right: -8px; }
  &:nth-child(even)::after { left: -8px; }

  ${({ theme }) => theme.media.mdDown} {
    width: 100%;
    padding-left: ${({ theme }) => theme.spacing[12]};
    padding-right: ${({ theme }) => theme.spacing[4]};
    text-align: left;

    &:nth-child(odd),
    &:nth-child(even) {
      left: 0;
      text-align: left;
    }
    &:nth-child(odd)::after,
    &:nth-child(even)::after { left: 12px; right: auto; }
  }
`;

const TimelineBubble = styled.div`
  display: inline-block;
  text-align: left;
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing[5]};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    color: ${({ theme }) => theme.colors.brand};
    margin: 0 0 ${({ theme }) => theme.spacing[3]};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    margin: 0 0 ${({ theme }) => theme.spacing[1]};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  }
`;

const AwardCard = styled(Card)`
  overflow: hidden;
`;

const AwardImage = styled.div`
  height: 220px;
  background: ${({ theme }) => theme.colors.bgAlt} url('${({ $image }) => $image}') no-repeat center/contain;
`;

const AwardBody = styled(CardBody)`
  h3 {
    color: ${({ theme }) => theme.colors.brand};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin: 0;
  }
  .date {
    display: block;
    margin-top: ${({ theme }) => theme.spacing[3]};
    color: ${({ theme }) => theme.colors.textSubtle};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const CertImage = styled.div`
  height: 320px;
  background: ${({ theme }) => theme.colors.bgAlt} url('${({ $image }) => $image}') no-repeat center/contain;
  padding: ${({ theme }) => theme.spacing[6]};
`;

const AddressCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[8]};
  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: ${({ theme }) => theme.colors.brand};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }
  p {
    color: ${({ theme }) => theme.colors.textMuted};
    margin: 0 0 ${({ theme }) => theme.spacing[2]};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  }
`;

const MapFrame = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};

  iframe {
    width: 100%;
    height: 420px;
    border: 0;
    display: block;

    ${({ theme }) => theme.media.mdDown} {
      height: 320px;
    }
  }
`;

const TransportCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[6]};
  align-items: flex-start;

  .icon {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
    display: inline-flex;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radii.md};
    background: ${({ theme }) => theme.colors.brandSoft};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    margin: 0 0 ${({ theme }) => theme.spacing[1]};
  }
`;

function About() {
  return (
    <main id="main-content">
      <PageBanner
        eyebrow="About Us"
        title="기업소개"
        description="(주)에스앤케이이엔지는 발전소 설비 운영에 필수적인 전기·전자 기자재를 공급합니다."
        image="/images/about-banner.jpg"
      />

      <Section id="company">
        <Container>
          <SectionTitle align="left" eyebrow="Company" title="회사소개" />
          <Lead>
            (주)에스앤케이이엔지는 <strong>두온시스템(주) 발전소 대리점</strong>으로,
            발전소 설비 운영에 필요한 핵심 전기·전자 기자재를 공급합니다.
          </Lead>
          <DocumentsRow>
            <DocumentCard>
              <h3>사업자 등록증</h3>
              <img src="/images/saup.png" alt="사업자 등록증" loading="lazy" decoding="async" />
            </DocumentCard>
            <DocumentCard>
              <h3>중소기업 확인서 (소상공인)</h3>
              <img src="/images/sosang.png" alt="중소기업 확인서 (소상공인)" loading="lazy" decoding="async" />
            </DocumentCard>
          </DocumentsRow>
        </Container>
      </Section>

      <Section id="history" $variant="muted">
        <Container>
          <SectionTitle eyebrow="History" title="연혁" />
          <Timeline>
            {HISTORY.map((item) => (
              <TimelineItem key={item.year}>
                <TimelineBubble>
                  <h3>{item.year}년</h3>
                  {item.items.map((line, idx) => (
                    <p key={idx}>• {line}</p>
                  ))}
                </TimelineBubble>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Section>

      <Section id="awards">
        <Container>
          <SectionTitle eyebrow="Awards" title="수상 내역" />
          <Grid $min="320px">
            {AWARDS.map((award) => (
              <AwardCard key={award.title}>
                <AwardImage $image={award.image} />
                <AwardBody>
                  <h3>{award.title}</h3>
                  {award.lines.map((line, idx) => (
                    <CardDescription key={idx}>{line}</CardDescription>
                  ))}
                  <span className="date">{award.date}</span>
                </AwardBody>
              </AwardCard>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="certification" $variant="muted">
        <Container>
          <SectionTitle eyebrow="Certification" title="품질 인증" />
          <Lead>
            국제 표준화 기구(ISO)의 품질 경영 시스템 인증을 획득하여,
            제품과 서비스의 일관된 품질을 보장합니다.
          </Lead>
          <Grid $min="320px">
            {CERTIFICATIONS.map((cert) => (
              <AwardCard key={cert.title}>
                <CertImage $image={cert.image} />
                <AwardBody>
                  <h3>{cert.title}</h3>
                  <CardDescription>{cert.desc}</CardDescription>
                  <span className="date">{cert.meta}</span>
                </AwardBody>
              </AwardCard>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="location">
        <Container>
          <SectionTitle eyebrow="Location" title="오시는 길" />
          <AddressCard>
            <h3>주소</h3>
            <p>경기 안산시 단원구 신촌5길 28 (우) 15443</p>
            <p>Tel : 070-8270-0665 · E-mail : sk5559611@hanmail.net</p>
            <p>근무시간 : 평일 09:00 – 18:00 (토·일·공휴일 휴무)</p>
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

          <div id="transport" style={{ marginTop: '4rem' }}>
            <SectionTitle eyebrow="Transport" title="교통 안내" />
            <Grid $min="260px">
              {TRANSPORT.map((t) => (
                <TransportCard key={t.title}>
                  <span className="icon" role="img" aria-label={t.title}>{t.icon}</span>
                  <CardTitle as="h3">{t.title}</CardTitle>
                  {t.lines.map((line, idx) => <p key={idx}>{line}</p>)}
                </TransportCard>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default About;

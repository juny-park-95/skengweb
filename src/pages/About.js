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
import { useI18n } from '../i18n';

const HISTORY_DATA = [
  { year: '2025', items: { ko: ['디지털 제어·분석 플랫폼 구축', '중부발전·KPS 디지털 컨버터·레벨전송기 대규모 공급'],                                             en: ['Launched a digital control & analytics platform', 'Large-scale supply of digital converters and level transmitters to KOMIPO and KEPCO KPS'] } },
  { year: '2023', items: { ko: ['AI·로봇 제어시스템 상용화', '중부발전 지능형 IoT 로봇 시스템 (₩52M)'],                                                             en: ['Commercialized AI & robotic control systems', 'KOMIPO intelligent IoT robotic system (KRW 52M)'] } },
  { year: '2020', items: { ko: ['스마트 팩토리용 계측장비 확대', '대산전력 전기팀 계측장비 & 수공구 패키지 (₩32M)'],                                            en: ['Expanded instrumentation for smart factories', 'CGN Daesan electrical team — measurement instruments & tools package (KRW 32M)'] } },
  { year: '2017', items: { ko: ['IoT·스마트 제어시장 진출', '중부발전 FAN 계통 온도 TX, 자동화 액추에이터 공급'],                                                en: ['Entered the IoT & smart-control market', 'KOMIPO FAN system temperature transmitters and automation actuators'] } },
  { year: '2015', items: { ko: ['고신뢰성 트랜스미터 솔루션 확산', '중부발전 Transmitter 9종 (₩90M)', '사명 변경 – 주식회사 에스앤케이이엔지'],              en: ['Rolled out high-reliability transmitter solutions', 'KOMIPO — 9 transmitter models (KRW 90M)', 'Renamed SNK ENG Co., Ltd.'] } },
  { year: '2013', items: { ko: ['초음파·레이더 계측기 대량 공급', '서부발전·중부발전 초음파 Level Tx 대량 프로젝트', '법인 설립 – 주식회사 에스케이이엔지'], en: ['Bulk supply of ultrasonic and radar instruments', 'Large ultrasonic Level Tx projects with KOWEPO and KOMIPO', 'Incorporated as SK ENG Co., Ltd.'] } },
  { year: '2010', items: { ko: ['핵심 제어설비 공급 역량 검증', '남동발전 탈황제어 설비용 Speed Switch (₩260M)'],                                                en: ['Proven capability in critical control equipment', 'KOEN — Speed Switch for FGD control system (KRW 260M)'] } },
  { year: '2007', items: { ko: ['첫 대형 플랜트 수주', '중부발전 295품목 공급 (₩150M 규모)', '설립 – 에스케이이엔지'],                                         en: ['First major plant contract', 'KOMIPO — supply of 295 items (KRW 150M)', 'Founded as SK ENG'] } },
];

const AWARD_IMAGES = ['/images/prize_01.png', '/images/prize_02.png'];
const CERT_IMAGES  = ['/images/iso_korean.png', '/images/iso_eng.png'];

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

function renderLead(lead) {
  const parts = lead.split(/\[strong\]|\[\/strong\]/);
  return parts.map((piece, idx) => (idx % 2 === 1 ? <strong key={idx}>{piece}</strong> : piece));
}

function About() {
  const { t, lang } = useI18n();
  const a = t.about;
  const TRANSPORT_ICONS = ['🚗', '🚌', '🚆'];

  return (
    <main id="main-content">
      <PageBanner
        eyebrow={a.banner.eyebrow}
        title={a.banner.title}
        description={a.banner.description}
        image="/images/about-banner.jpg"
      />

      <Section id="company">
        <Container>
          <SectionTitle align="left" eyebrow={a.companyEyebrow} title={a.companyTitle} />
          <Lead>{renderLead(a.companyLead)}</Lead>
          <DocumentsRow>
            <DocumentCard>
              <h3>{a.docs.license}</h3>
              <img src="/images/saup.png" alt={a.docs.license} loading="lazy" decoding="async" />
            </DocumentCard>
            <DocumentCard>
              <h3>{a.docs.sme}</h3>
              <img src="/images/sosang.png" alt={a.docs.sme} loading="lazy" decoding="async" />
            </DocumentCard>
          </DocumentsRow>
        </Container>
      </Section>

      <Section id="history" $variant="muted">
        <Container>
          <SectionTitle eyebrow={a.historyEyebrow} title={a.historyTitle} />
          <Timeline>
            {HISTORY_DATA.map((item) => (
              <TimelineItem key={item.year}>
                <TimelineBubble>
                  <h3>{item.year}{a.yearSuffix}</h3>
                  {item.items[lang].map((line, idx) => (
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
          <SectionTitle eyebrow={a.awardsEyebrow} title={a.awardsTitle} />
          <Grid $min="320px">
            {a.awards.map((award, idx) => (
              <AwardCard key={award.title}>
                <AwardImage $image={AWARD_IMAGES[idx]} role="img" aria-label={award.title} />
                <AwardBody>
                  <h3>{award.title}</h3>
                  {award.lines.map((line, i) => (
                    <CardDescription key={i}>{line}</CardDescription>
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
          <SectionTitle eyebrow={a.certEyebrow} title={a.certTitle} />
          <Lead>{a.certLead}</Lead>
          <Grid $min="320px">
            {a.certs.map((cert, idx) => (
              <AwardCard key={cert.title}>
                <CertImage $image={CERT_IMAGES[idx]} role="img" aria-label={cert.title} />
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
          <SectionTitle eyebrow={a.locationEyebrow} title={a.locationTitle} />
          <AddressCard>
            <h3>{a.address.heading}</h3>
            <p>{a.address.line1}</p>
            <p>{a.address.line2}</p>
            <p>{a.address.line3}</p>
          </AddressCard>
          <MapFrame>
            <iframe
              title={a.mapTitle}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7777430184738!2d126.81750527184691!3d37.31454205827108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6e53e53fe145%3A0x7bd617d6a3522ffd!2z6rK96riw64-EIOyViOyCsOyLnCDri6jsm5Dqtawg7Iug7LSMNeq4uCAyOA!5e0!3m2!1sko!2skr!4v1744726564468!5m2!1sko!2skr"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapFrame>

          <div id="transport" style={{ marginTop: '4rem' }}>
            <SectionTitle eyebrow={a.transportEyebrow} title={a.transportTitle} />
            <Grid $min="260px">
              {a.transport.map((item, i) => (
                <TransportCard key={item.title}>
                  <span className="icon" role="img" aria-label={item.title}>{TRANSPORT_ICONS[i]}</span>
                  <CardTitle as="h3">{item.title}</CardTitle>
                  {item.lines.map((line, idx) => <p key={idx}>{line}</p>)}
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

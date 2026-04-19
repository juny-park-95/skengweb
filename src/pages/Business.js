import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  PageBanner,
  Section,
  SectionTitle,
  Container,
} from '../components/common';

const PARTNER_LOGOS = [
  { id: 1, src: '/images/nambu.png',   alt: '남부발전' },
  { id: 2, src: '/images/namdong.png', alt: '남동발전' },
  { id: 3, src: '/images/dongseo.png', alt: '동서발전' },
  { id: 4, src: '/images/seobu.png',   alt: '서부발전' },
  { id: 5, src: '/images/jungboo.png', alt: '중부발전' },
  { id: 6, src: '/images/CGN.png',     alt: 'CGN 대산전력' },
];

const DELIVERIES = [
  { name: 'CGN 대산전력', percent: 5 },
  { name: '남부발전',     percent: 10 },
  { name: '남동발전',     percent: 10 },
  { name: '동서발전',     percent: 17.3 },
  { name: '서부발전',     percent: 22.6 },
  { name: '중부발전',     percent: 30 },
  { name: '기타',         percent: 5.1 },
];

const BUSINESS_AREAS = [
  {
    id: 'power-equipment',
    title: '주요 전기 기계·장비',
    image: '/images/power_equipment_detail.jpg',
    description:
      '세계적 제조사와 파트너십을 통해 고신뢰 발전기·변압기·스위치기어 등을 공급, 무중단 운영과 효율 향상에 기여합니다.',
    items: ['발전기 및 터빈 설비', '고/저압 변압기·리액터', 'GIS·스위치기어', '보호 계전 시스템', 'UPS 및 축전지'],
  },
  {
    id: 'control-systems',
    title: '제어 시스템 및 전자 부품',
    image: '/images/control_systems_detail.jpg',
    description:
      'DCS·PLC·HMI 및 산업용 센서, 액추에이터를 통해 플랜트 자동화·지능화를 지원합니다.',
    items: ['DCS, PLC, HMI', '온도·압력·유량 센서', '제어 밸브·액추에이터', '인버터·드라이브', '산업용 네트워크 장비'],
  },
  {
    id: 'instruments',
    title: '계측기기 및 시험 장비',
    image: '/images/instruments_detail.jpg',
    description:
      '정밀 계측·진단 장비를 제공하여 예방 정비와 설비 신뢰성 향상을 지원합니다.',
    items: ['전력 분석기·품질 측정기', '절연/접지 저항계', '공정 계측기 (T/P/F 등)', '진동 분석기', '휴대용 시험 장비'],
  },
  {
    id: 'materials',
    title: '관련 기자재 및 부품',
    image: '/images/materials_parts_detail.jpg',
    description: '케이블·커넥터·밸브 등 소모성 부품까지 안정적 공급망으로 즉시 지원합니다.',
    items: ['전력·제어·광 케이블', '커넥터·배선 자재', '배관 밸브·피팅', '필터·베어링', '공구·안전장비'],
  },
];

const scrollX = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(calc(-100% - 4vw)); }
`;

const Lead = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  max-width: 760px;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const LogoCarousel = styled.div`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => `${theme.spacing[10]} 0`};
  margin-top: ${({ theme }) => theme.spacing[6]};
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
  }
  &::before { left: 0;  background: linear-gradient(90deg, ${({ theme }) => theme.colors.surface}, transparent); }
  &::after  { right: 0; background: linear-gradient(-90deg, ${({ theme }) => theme.colors.surface}, transparent); }
`;

const Track = styled.div`
  display: flex;
  gap: 4vw;
  padding: 0 40px;
  animation: ${scrollX} 28s linear infinite;

  ${({ theme }) => theme.media.mdDown} {
    gap: 6vw;
    animation-duration: 24s;
  }
`;

const LogoBox = styled.div`
  flex: 0 0 auto;
  width: clamp(200px, 20vw, 320px);
  height: clamp(110px, 11vw, 180px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.bgAlt};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: transform ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-4px);
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
`;

const DeliveryWrap = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing[8]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

const BarBg = styled.div`
  background: ${({ theme }) => theme.colors.bgMuted};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  height: 32px;
  position: relative;

  ${({ theme }) => theme.media.mdDown} {
    display: none;
  }
`;

const Bar = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: ${({ $w }) => $w}%;
  background: ${({ $idx }) => `linear-gradient(
    90deg,
    hsl(${210 + $idx * 8} 72% 46%),
    hsl(${210 + $idx * 8 + 15} 72% 58%)
  )`};
  border-radius: ${({ theme }) => theme.radii.md};
  z-index: ${({ $idx }) => $idx};
  transition: width 1.1s ease-out;

  &::after {
    content: '${({ $w }) => $w}%';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    font-weight: 700;
    font-size: clamp(11px, 2.8vw, 13px);
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.45);
  }
`;

const BarRows = styled.ul`
  list-style: none;
  margin: ${({ theme }) => theme.spacing[6]} 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
`;

const BarRow = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[3]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  span:last-child {
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.brand};
  }
`;

const AreaCard = styled.article`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  transition: box-shadow ${({ theme }) => theme.transitions.base};

  &:hover { box-shadow: ${({ theme }) => theme.shadows.md}; }

  ${({ theme }) => theme.media.mdDown} {
    flex-direction: column;
  }
`;

const AreaImage = styled.div`
  flex: 1;
  min-height: 360px;
  background: ${({ theme }) => theme.colors.bgAlt} url('${({ $image }) => $image}') no-repeat center/contain;
  transition: transform ${({ theme }) => theme.transitions.slow};

  ${AreaCard}:hover & {
    transform: scale(1.03);
  }

  ${({ theme }) => theme.media.mdDown} {
    min-height: 240px;
  }
`;

const AreaText = styled.div`
  flex: 1;
  padding: clamp(1.5rem, 3vw, 2.5rem);

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    color: ${({ theme }) => theme.colors.brand};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    margin-bottom: ${({ theme }) => theme.spacing[5]};
  }

  ul {
    padding: 0;
    margin: 0;
    display: grid;
    gap: ${({ theme }) => theme.spacing[2]};
  }

  li {
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    padding-left: ${({ theme }) => theme.spacing[5]};

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.6em;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.brand};
    }
  }
`;

function Business() {
  const deliveryRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll('[data-width]')
            .forEach((bar) => (bar.style.width = bar.dataset.width));
        }
      });
    }, { threshold: 0.3 });

    if (deliveryRef.current) io.observe(deliveryRef.current);
    return () => io.disconnect();
  }, []);

  const logosForScroll = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  const accumulated = (index) =>
    DELIVERIES.slice(0, index).reduce((sum, d) => sum + d.percent, 0);

  return (
    <main id="main-content">
      <PageBanner
        eyebrow="Business"
        title="사업영역"
        description="발전소 설비 운영 전반에 필요한 전기·전자 솔루션을 통합적으로 공급합니다."
        image="/images/business-banner.jpg"
      />

      <Section id="partners">
        <Container>
          <SectionTitle align="left" eyebrow="Partners" title="주요 파트너사" />
          <Lead>
            (주)에스앤케이이엔지는 국내외 발전사를 비롯한 다양한 전력 기업과 긴밀한
            협력 관계를 유지하며 신뢰를 쌓아왔습니다.
          </Lead>
          <LogoCarousel>
            <Track>
              {logosForScroll.map((l, idx) => (
                <LogoBox key={`${l.id}-${idx}`}>
                  <img src={l.src} alt={l.alt} loading="lazy" decoding="async" />
                </LogoBox>
              ))}
            </Track>
          </LogoCarousel>
        </Container>
      </Section>

      <Section id="delivery" $variant="muted">
        <div ref={deliveryRef}>
          <Container>
            <SectionTitle align="left" eyebrow="Deliveries" title="파트너사 납품 현황" />
            <Lead>당사가 공급한 물량을 파트너사 비율로 환산한 수치입니다 (총 100 기준).</Lead>

            <DeliveryWrap>
              <BarBg>
                {DELIVERIES.map((d, idx) => (
                  <Bar
                    key={d.name}
                    $idx={DELIVERIES.length - idx}
                    $w={d.percent}
                    data-width={`${d.percent}%`}
                    style={{ width: 0, left: `${accumulated(idx)}%` }}
                  />
                ))}
              </BarBg>

              <BarRows>
                {DELIVERIES.map((d) => (
                  <BarRow key={d.name}>
                    <span>{d.name}</span>
                    <span>{d.percent}%</span>
                  </BarRow>
                ))}
              </BarRows>
            </DeliveryWrap>
          </Container>
        </div>
      </Section>

      <Section id="business-areas">
        <Container>
          <SectionTitle align="left" eyebrow="Areas" title="(주)에스앤케이이엔지의 사업영역" />
          <Lead>
            발전소 핵심 설비부터 제어·계측 솔루션까지 통합적으로 공급하여
            고객의 안정적 전력 생산을 지원합니다.
          </Lead>

          {BUSINESS_AREAS.map((area, idx) => (
            <AreaCard key={area.id} id={area.id} $reverse={idx % 2 === 1}>
              <AreaImage $image={area.image} role="img" aria-label={area.title} />
              <AreaText>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <ul>
                  {area.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </AreaText>
            </AreaCard>
          ))}
        </Container>
      </Section>
    </main>
  );
}

export default Business;

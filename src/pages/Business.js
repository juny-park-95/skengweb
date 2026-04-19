import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  PageBanner,
  Section,
  SectionTitle,
  Container,
} from '../components/common';
import { useI18n } from '../i18n';

const PARTNER_LOGOS = [
  { id: 1, src: '/images/nambu.png',   alt: { ko: '남부발전',  en: 'KOSPO' } },
  { id: 2, src: '/images/namdong.png', alt: { ko: '남동발전',  en: 'KOEN' } },
  { id: 3, src: '/images/dongseo.png', alt: { ko: '동서발전',  en: 'EWP' } },
  { id: 4, src: '/images/seobu.png',   alt: { ko: '서부발전',  en: 'KOWEPO' } },
  { id: 5, src: '/images/jungboo.png', alt: { ko: '중부발전',  en: 'KOMIPO' } },
  { id: 6, src: '/images/CGN.png',     alt: { ko: 'CGN 대산전력', en: 'CGN Daesan Power' } },
];

const DELIVERIES = [
  { key: { ko: 'CGN 대산전력', en: 'CGN Daesan Power' }, percent: 5 },
  { key: { ko: '남부발전',     en: 'KOSPO' },            percent: 10 },
  { key: { ko: '남동발전',     en: 'KOEN' },             percent: 10 },
  { key: { ko: '동서발전',     en: 'EWP' },              percent: 17.3 },
  { key: { ko: '서부발전',     en: 'KOWEPO' },           percent: 22.6 },
  { key: { ko: '중부발전',     en: 'KOMIPO' },           percent: 30 },
  { key: { ko: '기타',         en: 'Other' },            percent: 5.1 },
];

const AREA_IMAGES = [
  '/images/power_equipment_detail.jpg',
  '/images/control_systems_detail.jpg',
  '/images/instruments_detail.jpg',
  '/images/materials_parts_detail.jpg',
];

const AREA_IDS = ['power-equipment', 'control-systems', 'instruments', 'materials'];

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
  const { t, lang } = useI18n();
  const b = t.business;
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
        eyebrow={b.banner.eyebrow}
        title={b.banner.title}
        description={b.banner.description}
        image="/images/business-banner.jpg"
      />

      <Section id="partners">
        <Container>
          <SectionTitle align="left" eyebrow={b.partnersEyebrow} title={b.partnersTitle} />
          <Lead>{b.partnersLead}</Lead>
          <LogoCarousel>
            <Track>
              {logosForScroll.map((l, idx) => (
                <LogoBox key={`${l.id}-${idx}`}>
                  <img src={l.src} alt={l.alt[lang]} loading="lazy" decoding="async" />
                </LogoBox>
              ))}
            </Track>
          </LogoCarousel>
        </Container>
      </Section>

      <Section id="delivery" $variant="muted">
        <div ref={deliveryRef}>
          <Container>
            <SectionTitle align="left" eyebrow={b.deliveryEyebrow} title={b.deliveryTitle} />
            <Lead>{b.deliveryLead}</Lead>

            <DeliveryWrap>
              <BarBg>
                {DELIVERIES.map((d, idx) => (
                  <Bar
                    key={d.key[lang]}
                    $idx={DELIVERIES.length - idx}
                    $w={d.percent}
                    data-width={`${d.percent}%`}
                    style={{ width: 0, left: `${accumulated(idx)}%` }}
                  />
                ))}
              </BarBg>

              <BarRows>
                {DELIVERIES.map((d) => (
                  <BarRow key={d.key[lang]}>
                    <span>{d.key[lang]}</span>
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
          <SectionTitle align="left" eyebrow={b.areasEyebrow} title={b.areasTitle} />
          <Lead>{b.areasLead}</Lead>

          {b.areas.map((area, idx) => (
            <AreaCard key={AREA_IDS[idx]} id={AREA_IDS[idx]} $reverse={idx % 2 === 1}>
              <AreaImage $image={AREA_IMAGES[idx]} role="img" aria-label={area.title} />
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

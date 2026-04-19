import React, { useState } from 'react';
import styled from 'styled-components';
import {
  PageBanner,
  Section,
  SectionTitle,
  Container,
  Grid,
  Card,
  CardMedia,
  CardBody,
  CardTitle,
} from '../components/common';

const FEATURED = [
  {
    title: '고정밀 압력 전송기 공급',
    image: '/images/delivery_01.png',
    description: '고진공 환경 및 고열 조건에서 안정적인 성능을 제공하는 맞춤형 설계 제품',
    items: ['Absolute Pressure Transmitter APT3200-A — 570EA', 'Flow Transmitter (Differential Pressure Type) APT3500-D — 30EA'],
    specs: [
      { label: '제품 특성', value: '고진공 고열 환경 내성 설계로 극한 환경에서도 안정 성능 유지' },
      { label: '적용 분야', value: '진공 시스템 제어 및 유량 정밀 측정' },
    ],
    tags: ['압력 전송기', '유량 측정', '고진공', '고열 환경'],
  },
  {
    title: '특수 환경용 정밀 압력 전송기',
    image: '/images/delivery_02.png',
    description: '방사선 및 전자기 간섭이 있는 극한 환경에서도 정확한 측정이 가능한 고신뢰성 전송기',
    items: ['Absolute Pressure Transmitter APT3200-A', 'Differential Transmitter APT3100-D'],
    specs: [
      { label: '제품 특성', value: '고진공 · 방사선 · 전자기 내성 설계 기반' },
      { label: '적용 분야', value: '원자력 발전소, 의료 방사선 시설, 고정밀 공정 제어' },
    ],
    tags: ['정밀 측정', '방사선 내성', '전자기 차폐', '극한 환경'],
  },
  {
    title: '초고온·고압용 절대압 전송기',
    image: '/images/delivery_03.png',
    description: '600°C 초고온 및 최대 50bar 고압 환경에서도 안정적 성능을 제공',
    items: ['Absolute Pressure Transmitter APT3200-A'],
    specs: [
      { label: '제품 특성', value: '온도 최대 600°C · 압력 최대 50 bar 대응' },
      { label: '적용 분야', value: '진공 시스템 제어 · 유량 정밀 측정' },
    ],
    tags: ['초고온', '고압', '절대압 전송기', '진공 제어'],
  },
  {
    title: 'e-fuel 파일럿 플랜트',
    image: '/images/delivery_04.png',
    description: '수소와 이산화탄소를 활용한 그린 메탄 생산을 위한 고정밀 압력 측정 솔루션',
    items: ['Absolute Pressure Transmitter APT3200-G'],
    specs: [
      { label: '제품 특성', value: 'H₂ + CO₂ → Green Methane 공정에 최적화' },
      { label: '적용 분야', value: '진공 시스템 · 유량 · 합성연료 생산공정' },
    ],
    tags: ['그린 메탄', 'e-fuel', '수소', '탄소중립'],
  },
  {
    title: '리튬이온 2차전지 LIELSORT 라인',
    image: '/images/delivery_05.png',
    description: '배터리 셀 제조 공정에 최적화된 고정밀 압력 측정 및 제어 시스템',
    items: ['Absolute Pressure Transmitter ALT6210', 'Pressure Transmitter APT3200-LED, APT3100-LEC'],
    specs: [
      { label: '제품 특성', value: '고진공·고열 환경 내성, 600°C · 50 bar 대응' },
      { label: '적용 분야', value: '전극 코팅 · 전해질 주입 · 셀 활성화' },
    ],
    tags: ['2차전지', '리튬이온', '배터리 생산', '고진공 공정'],
  },
  {
    title: '발전기 응용 시스템',
    image: '/images/delivery_06.png',
    description: '발전 설비 주변 장치에 최적화된 고정밀 압력 측정 솔루션',
    items: ['Absolute Pressure Transmitter APT3100-G'],
    specs: [
      { label: '제품 특성', value: '장기간 연속 운전 환경에서 높은 신뢰성' },
      { label: '적용 분야', value: '터빈 압력 모니터링 · 냉각시스템 제어' },
    ],
    tags: ['발전 설비', '터빈 제어', '고정밀 측정', '시스템 안정성'],
  },
];

const CONTRACTS = [
  { year: 2025, client: '한국중부발전㈜', contractNumber: '소액(보일러전기)-20250115', items: '3–6호기 보일러 저압전동기', scale: 'small' },
  { year: 2025, client: '한전KPS㈜',     contractNumber: '제R102500447호',          items: 'DC-DC Converter Power Supply', scale: 'small' },
  { year: 2024, client: '한국중부발전㈜', contractNumber: '제2024-3',                  items: 'Pr Switch 등 4품목', scale: 'small' },
  { year: 2024, client: '한국동서발전㈜', contractNumber: '제S515330-00514호',        items: '8# 제어설비 정비용', scale: 'small' },
  { year: 2023, client: '씨지앤 대산전력㈜', contractNumber: '제PO-883호',              items: 'PUMP 스페어파트', scale: 'medium' },
  { year: 2023, client: '현대그린파워㈜',   contractNumber: '제20231158호',            items: 'VCB 오조작 방지용 경보장치 (1–8호기)', scale: 'small' },
  { year: 2022, client: '씨지앤 대산전력㈜', contractNumber: '제PO-560호',              items: 'I&S ASH 및 소방설비 스페어파트', scale: 'medium' },
  { year: 2022, client: '한국서부발전㈜',   contractNumber: '제R02222100821호',        items: '군산 O/H 제어전문자재', scale: 'large' },
  { year: 2021, client: '한국서부발전㈜',   contractNumber: '제2000068313호',          items: '태안5·6호기 암모니아 압력전송기', scale: 'small' },
  { year: 2021, client: '씨지앤 대산전력㈜', contractNumber: '제PO-210801호',           items: 'HRSG 송신기 24SET 외 11종', scale: 'medium' },
  { year: 2020, client: '한국중부발전㈜',   contractNumber: '보령2발 제어기술부-1308', items: '3.6호기 압력전송기', scale: 'small' },
  { year: 2020, client: '씨지앤 대산전력㈜', contractNumber: '제PO-DB-200608호',        items: '전기팀 계측장비 및 수공구', scale: 'medium' },
  { year: 2019, client: '한국서부발전㈜',   contractNumber: '제R102001036호',          items: '#1.2 HRSG 온도전송기', scale: 'small' },
  { year: 2018, client: '한국중부발전㈜',   contractNumber: '제R051801121호',          items: '현장 제어설비 경상자재', scale: 'medium' },
  { year: 2018, client: '한국서부발전㈜',   contractNumber: '제R021-800272호',         items: 'Solenoid Valve 등 21종 (IGCC 플랜트)', scale: 'large' },
  { year: 2017, client: '한국서부발전㈜',   contractNumber: '제C0217000371호',         items: '압력전송기 16EA', scale: 'small' },
  { year: 2017, client: '한국중부발전㈜',   contractNumber: '제C051700463호',          items: 'BRG TEMP TX (4.6호기 FAN 계통)', scale: 'medium' },
  { year: 2016, client: '한국중부발전㈜',   contractNumber: '제R051-600050호',         items: 'RTD & WELL Transmitter 126SET', scale: 'large' },
  { year: 2015, client: '한국가스공사㈜',   contractNumber: '제2015-HD-0115호',        items: '해수위 검출용 레벨전송기', scale: 'medium' },
  { year: 2015, client: '한국중부발전㈜',   contractNumber: '제R051-500271호',         items: 'Transmitter 9품목', scale: 'large' },
  { year: 2014, client: '한국중부발전㈜',   contractNumber: '제R051-400809호',         items: 'Guided Radar Transmitter 등 4품목', scale: 'large' },
  { year: 2014, client: '한국서부발전㈜',   contractNumber: '제R021-400640호',         items: '차압전송기 등 203품목', scale: 'large' },
  { year: 2013, client: '한국중부발전㈜',   contractNumber: '제R051-301146호',         items: 'GWR 레벨전송기 5품목', scale: 'medium' },
  { year: 2013, client: '한국서부발전㈜',   contractNumber: '제R021-300151호',         items: '초음파 Level Tx 등 175품목', scale: 'large' },
  { year: 2012, client: '한국동서발전㈜',   contractNumber: '제R081-200303호',         items: '가이드 레이다 수위전송기 등 10종', scale: 'medium' },
  { year: 2012, client: '한국서부발전㈜',   contractNumber: '제R021-200173호',         items: 'Data Logger 등 24종', scale: 'medium' },
  { year: 2011, client: '한국동서발전㈜',   contractNumber: '제R081-100273호',         items: '볼베어링 외 149종', scale: 'large' },
  { year: 2011, client: '한국중부발전㈜',   contractNumber: '제R051-100329호',         items: 'GWR Level Transmitter 28Set', scale: 'large' },
  { year: 2010, client: '한국남동발전㈜',   contractNumber: '제R061-000011호',         items: '#1 탈황제어설비 Speed Switch 외 98종', scale: 'large' },
  { year: 2010, client: '한국남동발전㈜',   contractNumber: '제R061-000254호',         items: '#2 Mechanical Trip Solenoid Valve 외 102종', scale: 'large' },
  { year: 2009, client: '한국중부발전㈜',   contractNumber: '제R050-909699호',         items: 'PLC 베이스모듈 외 32품목', scale: 'large' },
  { year: 2009, client: '한국중부발전㈜',   contractNumber: '제R050-901764호',         items: 'BRG #1 Cable 외 78품목', scale: 'large' },
  { year: 2007, client: '한국중부발전㈜',   contractNumber: '제R050-703870호',         items: 'Bolt Nut Washer 등 295품목', scale: 'large' },
];

const FILTERS = ['전체', '중부발전', '서부발전', '동서발전', '남동발전', '기타'];

const scaleLabel = { small: '소형', medium: '중형', large: '대형' };

const filterBy = (filter) => (c) => {
  if (filter === '전체') return true;
  if (filter === '기타') return !['중부발전', '서부발전', '동서발전', '남동발전'].some((k) => c.client.includes(k));
  return c.client.includes(filter);
};

const FeaturedCard = styled(Card)`
  overflow: hidden;
`;

const FeaturedBody = styled(CardBody)`
  gap: ${({ theme }) => theme.spacing[4]};

  .description {
    margin: 0;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  }

  .detail-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: ${({ theme }) => theme.spacing[2]};

    li {
      position: relative;
      padding-left: ${({ theme }) => theme.spacing[5]};
      color: ${({ theme }) => theme.colors.textMuted};
      line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};

      &::before {
        content: '';
        position: absolute;
        left: 0; top: 0.6em;
        width: 6px; height: 6px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.brand};
      }
    }
  }

  .specs {
    padding-top: ${({ theme }) => theme.spacing[4]};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    display: grid;
    gap: ${({ theme }) => theme.spacing[3]};

    h4 {
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      color: ${({ theme }) => theme.colors.textMuted};
      margin: 0 0 ${({ theme }) => theme.spacing[1]};
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
      text-transform: uppercase;
      letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
    }

    p {
      margin: 0;
      color: ${({ theme }) => theme.colors.text};
      line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    }
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.brandSoft};
  color: ${({ theme }) => theme.colors.brand};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const Lead = styled.p`
  max-width: 780px;
  margin: 0 auto ${({ theme }) => theme.spacing[8]};
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const FilterButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[5]}`};
  background: ${({ theme, $active }) => ($active ? theme.colors.brand : theme.colors.brandSoft)};
  color: ${({ theme, $active }) => ($active ? theme.colors.textInverse : theme.colors.brand)};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme, $active }) => ($active ? theme.colors.brandHover : theme.colors.brandSoftAlt)};
  }
`;

const TableScroll = styled.div`
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const ContractTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${({ theme }) => theme.colors.surface};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  thead {
    background: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.textInverse};
  }

  th, td {
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
    text-align: left;
    vertical-align: top;
  }

  th { font-weight: ${({ theme }) => theme.typography.fontWeight.semibold}; }

  tbody tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    transition: background ${({ theme }) => theme.transitions.fast};

    &:hover { background: ${({ theme }) => theme.colors.bgAlt}; }
    &:last-child { border-bottom: none; }
  }

  td:first-child {
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.brand};
    text-align: center;
    white-space: nowrap;
  }

  td:last-child { text-align: center; white-space: nowrap; }
`;

const ScaleBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  background: ${({ $scale, theme }) => {
    if ($scale === 'large')  return 'rgba(22, 163, 74, 0.12)';
    if ($scale === 'medium') return 'rgba(245, 158, 11, 0.16)';
    return theme.colors.bgMuted;
  }};
  color: ${({ $scale, theme }) => {
    if ($scale === 'large')  return theme.colors.success;
    if ($scale === 'medium') return theme.colors.warning;
    return theme.colors.textMuted;
  }};
`;

function Projects() {
  const [filter, setFilter] = useState('전체');
  const contracts = CONTRACTS.filter(filterBy(filter));

  return (
    <main id="main-content">
      <PageBanner
        eyebrow="Projects"
        title="주요 납품 실적"
        description="국내 주요 발전소 및 산업 현장에 공급한 계측·제어 솔루션의 대표 사례입니다."
        image="/images/projects-banner.jpg"
      />

      <Section>
        <Container>
          <SectionTitle eyebrow="Highlights" title="프로젝트 이력" />
          <Lead>
            (주)에스앤케이이엔지는 국내 주요 발전소 및 산업 현장에 고품질의 계측·제어 장비를
            공급하며 맞춤형 솔루션을 제공합니다.
          </Lead>

          <Grid $min="320px">
            {FEATURED.map((p) => (
              <FeaturedCard key={p.title}>
                <CardMedia image={p.image} alt={p.title} fit="cover" ratio="16 / 10" />
                <FeaturedBody>
                  <CardTitle>{p.title}</CardTitle>
                  <p className="description">{p.description}</p>
                  <ul className="detail-list">
                    {p.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="specs">
                    {p.specs.map((s) => (
                      <div key={s.label}>
                        <h4>{s.label}</h4>
                        <p>{s.value}</p>
                      </div>
                    ))}
                  </div>
                  <TagList>
                    {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </TagList>
                </FeaturedBody>
              </FeaturedCard>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section $variant="muted">
        <Container>
          <SectionTitle eyebrow="Contracts" title="계약 이력" />
          <Lead>2007년부터 현재까지 국내 주요 발전소 및 산업 현장에 납품한 제품의 상세 계약 이력입니다.</Lead>

          <FilterButtons>
            {FILTERS.map((f) => (
              <FilterButton key={f} $active={filter === f} onClick={() => setFilter(f)}>
                {f}
              </FilterButton>
            ))}
          </FilterButtons>

          <TableScroll>
            <ContractTable>
              <thead>
                <tr>
                  <th>연도</th>
                  <th>발주처</th>
                  <th>계약번호</th>
                  <th>주요 품명</th>
                  <th>규모</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((c, i) => (
                  <tr key={`${c.contractNumber}-${i}`}>
                    <td>{c.year}</td>
                    <td>{c.client}</td>
                    <td>{c.contractNumber}</td>
                    <td>{c.items}</td>
                    <td><ScaleBadge $scale={c.scale}>{scaleLabel[c.scale]}</ScaleBadge></td>
                  </tr>
                ))}
                {contracts.length === 0 && (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: '2rem' }}>
                      검색 결과가 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </ContractTable>
          </TableScroll>
        </Container>
      </Section>
    </main>
  );
}

export default Projects;

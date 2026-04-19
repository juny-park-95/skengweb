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
import { useI18n } from '../i18n';

const FEATURED_IMAGES = [
  '/images/delivery_01.png',
  '/images/delivery_02.png',
  '/images/delivery_03.png',
  '/images/delivery_04.png',
  '/images/delivery_05.png',
  '/images/delivery_06.png',
];

const CONTRACTS = [
  { year: 2025, bucket: 'utility_a', itemsKo: '보일러 저압전동기 외',                itemsEn: 'Boiler LV motors and related items',                             scale: 'small' },
  { year: 2025, bucket: 'public',    itemsKo: 'DC-DC 컨버터 전원공급기',              itemsEn: 'DC-DC converter power supplies',                                 scale: 'small' },
  { year: 2024, bucket: 'utility_a', itemsKo: '압력 스위치 외 4품목',                 itemsEn: 'Pressure switches (4 items)',                                    scale: 'small' },
  { year: 2024, bucket: 'utility_c', itemsKo: '제어설비 정비 자재',                   itemsEn: 'Control equipment — maintenance parts',                          scale: 'small' },
  { year: 2023, bucket: 'ipp',       itemsKo: '펌프 스페어파트',                       itemsEn: 'Pump spare parts',                                              scale: 'medium' },
  { year: 2023, bucket: 'ipp',       itemsKo: 'VCB 오조작 방지 경보장치',             itemsEn: 'VCB misoperation alarm system',                                  scale: 'small' },
  { year: 2022, bucket: 'ipp',       itemsKo: 'I&S 애시·소방설비 스페어파트',        itemsEn: 'I&S ash and fire-protection spare parts',                        scale: 'medium' },
  { year: 2022, bucket: 'utility_b', itemsKo: 'O/H 제어 전문 자재',                   itemsEn: 'Overhaul control materials',                                    scale: 'large' },
  { year: 2021, bucket: 'utility_b', itemsKo: '암모니아 압력전송기',                  itemsEn: 'Ammonia pressure transmitters',                                  scale: 'small' },
  { year: 2021, bucket: 'ipp',       itemsKo: 'HRSG 송신기 외 11종',                  itemsEn: 'HRSG transmitters + 11 other items',                             scale: 'medium' },
  { year: 2020, bucket: 'utility_a', itemsKo: '압력전송기 (다수)',                    itemsEn: 'Pressure transmitters (multiple units)',                         scale: 'small' },
  { year: 2020, bucket: 'ipp',       itemsKo: '계측장비·수공구 패키지',                itemsEn: 'Measurement instruments and hand-tool package',                  scale: 'medium' },
  { year: 2019, bucket: 'utility_b', itemsKo: 'HRSG 온도전송기',                      itemsEn: 'HRSG temperature transmitters',                                  scale: 'small' },
  { year: 2018, bucket: 'utility_a', itemsKo: '현장 제어설비 경상자재',                itemsEn: 'Field control equipment — consumables',                          scale: 'medium' },
  { year: 2018, bucket: 'utility_b', itemsKo: 'IGCC 솔레노이드 밸브 외 21종',         itemsEn: 'IGCC — solenoid valves and 21 other items',                     scale: 'large' },
  { year: 2017, bucket: 'utility_b', itemsKo: '압력전송기 16개',                      itemsEn: 'Pressure transmitters — 16 EA',                                  scale: 'small' },
  { year: 2017, bucket: 'utility_a', itemsKo: 'FAN 계통 베어링 온도 TX',              itemsEn: 'FAN system — bearing temperature transmitters',                  scale: 'medium' },
  { year: 2016, bucket: 'utility_a', itemsKo: 'RTD & WELL 트랜스미터 126세트',        itemsEn: 'RTD & thermowell transmitters — 126 sets',                      scale: 'large' },
  { year: 2015, bucket: 'public',    itemsKo: '해수위 검출용 레벨전송기',              itemsEn: 'Sea-water level transmitters',                                  scale: 'medium' },
  { year: 2015, bucket: 'utility_a', itemsKo: '트랜스미터 9품목',                     itemsEn: 'Transmitters — 9 items',                                         scale: 'large' },
  { year: 2014, bucket: 'utility_a', itemsKo: '가이디드 레이더 트랜스미터 외 4품목',  itemsEn: 'Guided radar transmitters and 3 other items',                   scale: 'large' },
  { year: 2014, bucket: 'utility_b', itemsKo: '차압전송기 외 203품목',                itemsEn: 'Differential-pressure transmitters and 203 items',               scale: 'large' },
  { year: 2013, bucket: 'utility_a', itemsKo: 'GWR 레벨전송기 5품목',                 itemsEn: 'GWR level transmitters — 5 items',                              scale: 'medium' },
  { year: 2013, bucket: 'utility_b', itemsKo: '초음파 레벨 TX 외 175품목',            itemsEn: 'Ultrasonic Level Tx and 175 items',                              scale: 'large' },
  { year: 2012, bucket: 'utility_c', itemsKo: '가이드 레이다 수위전송기 외 10종',     itemsEn: 'Guided-radar level transmitters and 10 items',                  scale: 'medium' },
  { year: 2012, bucket: 'utility_b', itemsKo: '데이터 로거 외 24종',                  itemsEn: 'Data loggers and 24 other items',                                scale: 'medium' },
  { year: 2011, bucket: 'utility_c', itemsKo: '볼베어링 외 149종',                     itemsEn: 'Ball bearings and 149 other items',                              scale: 'large' },
  { year: 2011, bucket: 'utility_a', itemsKo: 'GWR 레벨전송기 28세트',                itemsEn: 'GWR level transmitters — 28 sets',                              scale: 'large' },
  { year: 2010, bucket: 'utility_d', itemsKo: '탈황제어설비 스피드 스위치 외 98종',   itemsEn: 'FGD — Speed Switch and 98 other items',                          scale: 'large' },
  { year: 2010, bucket: 'utility_d', itemsKo: '메커니컬 트립 솔레노이드 밸브 외 102종', itemsEn: 'Mechanical trip solenoid valves and 102 items',               scale: 'large' },
  { year: 2009, bucket: 'utility_a', itemsKo: 'PLC 베이스모듈 외 32품목',             itemsEn: 'PLC base modules and 32 other items',                            scale: 'large' },
  { year: 2009, bucket: 'utility_a', itemsKo: '베어링 케이블 외 78품목',              itemsEn: 'Bearing cables and 78 other items',                              scale: 'large' },
  { year: 2007, bucket: 'utility_a', itemsKo: '볼트·너트·와셔 외 295품목',            itemsEn: 'Bolts, nuts, washers and 295 other items',                      scale: 'large' },
];

const FILTER_KEYS = ['all', 'utility_a', 'utility_b', 'utility_c', 'utility_d', 'other'];
const NAMED_BUCKETS = ['utility_a', 'utility_b', 'utility_c', 'utility_d'];

const filterBy = (filterKey) => (c) => {
  if (filterKey === 'all') return true;
  if (filterKey === 'other') return !NAMED_BUCKETS.includes(c.bucket);
  return c.bucket === filterKey;
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

const Disclaimer = styled.p`
  margin-top: ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.textSubtle};
  text-align: right;
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
  const { t, lang } = useI18n();
  const p = t.projects;
  const [filter, setFilter] = useState('all');
  const contracts = CONTRACTS.filter(filterBy(filter));

  const renderClient = (bucket) => p.clientBuckets[bucket] || p.clientBuckets.ipp;
  const renderItems = (contract) => (lang === 'en' ? contract.itemsEn : contract.itemsKo);

  return (
    <main id="main-content">
      <PageBanner
        eyebrow={p.banner.eyebrow}
        title={p.banner.title}
        description={p.banner.description}
        image="/images/projects-banner.jpg"
      />

      <Section>
        <Container>
          <SectionTitle eyebrow={p.highlightsEyebrow} title={p.highlightsTitle} />
          <Lead>{p.highlightsLead}</Lead>

          <Grid $min="320px">
            {p.featured.map((item, idx) => (
              <FeaturedCard key={item.title}>
                <CardMedia image={FEATURED_IMAGES[idx]} alt={item.title} fit="cover" ratio="16 / 10" />
                <FeaturedBody>
                  <CardTitle>{item.title}</CardTitle>
                  <p className="description">{item.description}</p>
                  <ul className="detail-list">
                    {item.items.map((entry) => <li key={entry}>{entry}</li>)}
                  </ul>
                  <div className="specs">
                    {item.specs.map((s) => (
                      <div key={s.label}>
                        <h4>{s.label}</h4>
                        <p>{s.value}</p>
                      </div>
                    ))}
                  </div>
                  <TagList>
                    {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                  </TagList>
                </FeaturedBody>
              </FeaturedCard>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section $variant="muted">
        <Container>
          <SectionTitle eyebrow={p.contractsEyebrow} title={p.contractsTitle} />
          <Lead>{p.contractsLead}</Lead>

          <FilterButtons>
            {FILTER_KEYS.map((key) => (
              <FilterButton key={key} $active={filter === key} onClick={() => setFilter(key)}>
                {p.filters[key]}
              </FilterButton>
            ))}
          </FilterButtons>

          <TableScroll>
            <ContractTable>
              <thead>
                <tr>
                  <th>{p.table.year}</th>
                  <th>{p.table.client}</th>
                  <th>{p.table.items}</th>
                  <th>{p.table.scale}</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((c, i) => (
                  <tr key={`${c.year}-${i}`}>
                    <td>{c.year}</td>
                    <td>{renderClient(c.bucket)}</td>
                    <td>{renderItems(c)}</td>
                    <td><ScaleBadge $scale={c.scale}>{p.scaleLabels[c.scale]}</ScaleBadge></td>
                  </tr>
                ))}
                {contracts.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center', padding: '2rem' }}>
                      {p.table.empty}
                    </td>
                  </tr>
                )}
              </tbody>
            </ContractTable>
          </TableScroll>
          <Disclaimer>{p.table.disclaimer}</Disclaimer>
        </Container>
      </Section>
    </main>
  );
}

export default Projects;

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

const CLIENT_EN = {
  '한국중부발전㈜': 'KOMIPO',
  '한국서부발전㈜': 'KOWEPO',
  '한국동서발전㈜': 'EWP',
  '한국남동발전㈜': 'KOEN',
  '한국남부발전㈜': 'KOSPO',
  '한국가스공사㈜': 'KOGAS',
  '한전KPS㈜': 'KEPCO KPS',
  '씨지앤 대산전력㈜': 'CGN Daesan Power',
  '현대그린파워㈜': 'Hyundai Green Power',
};

const CONTRACTS = [
  { year: 2025, client: '한국중부발전㈜', contractNumber: '소액(보일러전기)-20250115', itemsKo: '3–6호기 보일러 저압전동기',            itemsEn: 'Boiler LV motors (Units 3–6)',                                  scale: 'small' },
  { year: 2025, client: '한전KPS㈜',     contractNumber: '제R102500447호',            itemsKo: 'DC-DC Converter Power Supply',            itemsEn: 'DC-DC converter power supply',                                  scale: 'small' },
  { year: 2024, client: '한국중부발전㈜', contractNumber: '제2024-3',                   itemsKo: 'Pr Switch 등 4품목',                        itemsEn: 'Pressure switches (4 items)',                                    scale: 'small' },
  { year: 2024, client: '한국동서발전㈜', contractNumber: '제S515330-00514호',          itemsKo: '8# 제어설비 정비용',                         itemsEn: 'Unit 8 control equipment — maintenance parts',                   scale: 'small' },
  { year: 2023, client: '씨지앤 대산전력㈜', contractNumber: '제PO-883호',              itemsKo: 'PUMP 스페어파트',                            itemsEn: 'Pump spare parts',                                              scale: 'medium' },
  { year: 2023, client: '현대그린파워㈜',   contractNumber: '제20231158호',             itemsKo: 'VCB 오조작 방지용 경보장치 (1–8호기)',         itemsEn: 'VCB misoperation alarm system (Units 1–8)',                     scale: 'small' },
  { year: 2022, client: '씨지앤 대산전력㈜', contractNumber: '제PO-560호',              itemsKo: 'I&S ASH 및 소방설비 스페어파트',              itemsEn: 'I&S ash and fire-protection spare parts',                        scale: 'medium' },
  { year: 2022, client: '한국서부발전㈜',   contractNumber: '제R02222100821호',         itemsKo: '군산 O/H 제어전문자재',                       itemsEn: 'Gunsan O/H — control materials',                                scale: 'large' },
  { year: 2021, client: '한국서부발전㈜',   contractNumber: '제2000068313호',           itemsKo: '태안5·6호기 암모니아 압력전송기',              itemsEn: 'Taean Units 5/6 — ammonia pressure transmitters',                scale: 'small' },
  { year: 2021, client: '씨지앤 대산전력㈜', contractNumber: '제PO-210801호',            itemsKo: 'HRSG 송신기 24SET 외 11종',                   itemsEn: 'HRSG transmitters (24 sets) + 11 other items',                   scale: 'medium' },
  { year: 2020, client: '한국중부발전㈜',   contractNumber: '보령2발 제어기술부-1308',  itemsKo: '3.6호기 압력전송기',                          itemsEn: 'Units 3/6 pressure transmitters',                                scale: 'small' },
  { year: 2020, client: '씨지앤 대산전력㈜', contractNumber: '제PO-DB-200608호',         itemsKo: '전기팀 계측장비 및 수공구',                    itemsEn: 'Electrical team — measurement instruments and hand tools',       scale: 'medium' },
  { year: 2019, client: '한국서부발전㈜',   contractNumber: '제R102001036호',           itemsKo: '#1.2 HRSG 온도전송기',                        itemsEn: 'Units 1/2 — HRSG temperature transmitters',                     scale: 'small' },
  { year: 2018, client: '한국중부발전㈜',   contractNumber: '제R051801121호',           itemsKo: '현장 제어설비 경상자재',                       itemsEn: 'Field control equipment — consumables',                          scale: 'medium' },
  { year: 2018, client: '한국서부발전㈜',   contractNumber: '제R021-800272호',          itemsKo: 'Solenoid Valve 등 21종 (IGCC 플랜트)',        itemsEn: 'IGCC — solenoid valves and 21 other items',                     scale: 'large' },
  { year: 2017, client: '한국서부발전㈜',   contractNumber: '제C0217000371호',          itemsKo: '압력전송기 16EA',                              itemsEn: 'Pressure transmitters — 16 EA',                                  scale: 'small' },
  { year: 2017, client: '한국중부발전㈜',   contractNumber: '제C051700463호',           itemsKo: 'BRG TEMP TX (4.6호기 FAN 계통)',              itemsEn: 'Units 4/6 FAN system — bearing temperature transmitters',        scale: 'medium' },
  { year: 2016, client: '한국중부발전㈜',   contractNumber: '제R051-600050호',          itemsKo: 'RTD & WELL Transmitter 126SET',                itemsEn: 'RTD & thermowell transmitters — 126 sets',                      scale: 'large' },
  { year: 2015, client: '한국가스공사㈜',   contractNumber: '제2015-HD-0115호',         itemsKo: '해수위 검출용 레벨전송기',                     itemsEn: 'Sea-water level transmitters',                                  scale: 'medium' },
  { year: 2015, client: '한국중부발전㈜',   contractNumber: '제R051-500271호',          itemsKo: 'Transmitter 9품목',                            itemsEn: 'Transmitters — 9 items',                                         scale: 'large' },
  { year: 2014, client: '한국중부발전㈜',   contractNumber: '제R051-400809호',          itemsKo: 'Guided Radar Transmitter 등 4품목',           itemsEn: 'Guided radar transmitters and 3 other items',                   scale: 'large' },
  { year: 2014, client: '한국서부발전㈜',   contractNumber: '제R021-400640호',          itemsKo: '차압전송기 등 203품목',                        itemsEn: 'Differential-pressure transmitters and 203 items',               scale: 'large' },
  { year: 2013, client: '한국중부발전㈜',   contractNumber: '제R051-301146호',          itemsKo: 'GWR 레벨전송기 5품목',                         itemsEn: 'GWR level transmitters — 5 items',                              scale: 'medium' },
  { year: 2013, client: '한국서부발전㈜',   contractNumber: '제R021-300151호',          itemsKo: '초음파 Level Tx 등 175품목',                  itemsEn: 'Ultrasonic Level Tx and 175 items',                              scale: 'large' },
  { year: 2012, client: '한국동서발전㈜',   contractNumber: '제R081-200303호',          itemsKo: '가이드 레이다 수위전송기 등 10종',             itemsEn: 'Guided-radar level transmitters and 10 items',                  scale: 'medium' },
  { year: 2012, client: '한국서부발전㈜',   contractNumber: '제R021-200173호',          itemsKo: 'Data Logger 등 24종',                          itemsEn: 'Data loggers and 24 other items',                                scale: 'medium' },
  { year: 2011, client: '한국동서발전㈜',   contractNumber: '제R081-100273호',          itemsKo: '볼베어링 외 149종',                             itemsEn: 'Ball bearings and 149 other items',                              scale: 'large' },
  { year: 2011, client: '한국중부발전㈜',   contractNumber: '제R051-100329호',          itemsKo: 'GWR Level Transmitter 28Set',                  itemsEn: 'GWR level transmitters — 28 sets',                              scale: 'large' },
  { year: 2010, client: '한국남동발전㈜',   contractNumber: '제R061-000011호',          itemsKo: '#1 탈황제어설비 Speed Switch 외 98종',         itemsEn: 'Unit 1 FGD — Speed Switch and 98 other items',                   scale: 'large' },
  { year: 2010, client: '한국남동발전㈜',   contractNumber: '제R061-000254호',          itemsKo: '#2 Mechanical Trip Solenoid Valve 외 102종',  itemsEn: 'Unit 2 — mechanical trip solenoid valves and 102 items',        scale: 'large' },
  { year: 2009, client: '한국중부발전㈜',   contractNumber: '제R050-909699호',          itemsKo: 'PLC 베이스모듈 외 32품목',                     itemsEn: 'PLC base modules and 32 other items',                            scale: 'large' },
  { year: 2009, client: '한국중부발전㈜',   contractNumber: '제R050-901764호',          itemsKo: 'BRG #1 Cable 외 78품목',                      itemsEn: 'Bearing #1 cables and 78 other items',                          scale: 'large' },
  { year: 2007, client: '한국중부발전㈜',   contractNumber: '제R050-703870호',          itemsKo: 'Bolt Nut Washer 등 295품목',                   itemsEn: 'Bolts, nuts, washers and 295 other items',                      scale: 'large' },
];

const FILTER_KEYS = ['all', 'jungbu', 'seobu', 'dongseo', 'namdong', 'other'];
const FILTER_CLIENT_MATCH = { jungbu: '중부발전', seobu: '서부발전', dongseo: '동서발전', namdong: '남동발전' };

const filterBy = (filterKey) => (c) => {
  if (filterKey === 'all') return true;
  if (filterKey === 'other')
    return !['중부발전', '서부발전', '동서발전', '남동발전'].some((k) => c.client.includes(k));
  return c.client.includes(FILTER_CLIENT_MATCH[filterKey]);
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
  const { t, lang } = useI18n();
  const p = t.projects;
  const [filter, setFilter] = useState('all');
  const contracts = CONTRACTS.filter(filterBy(filter));

  const renderClient = (c) => (lang === 'en' ? CLIENT_EN[c] || c : c);
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
                  <th>{p.table.contractNumber}</th>
                  <th>{p.table.items}</th>
                  <th>{p.table.scale}</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((c, i) => (
                  <tr key={`${c.contractNumber}-${i}`}>
                    <td>{c.year}</td>
                    <td>{renderClient(c.client)}</td>
                    <td>{c.contractNumber}</td>
                    <td>{renderItems(c)}</td>
                    <td><ScaleBadge $scale={c.scale}>{p.scaleLabels[c.scale]}</ScaleBadge></td>
                  </tr>
                ))}
                {contracts.length === 0 && (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: '2rem' }}>
                      {p.table.empty}
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

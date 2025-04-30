import React, { useState } from 'react';
import styled from 'styled-components';

/*
  (주)에스앤케이이엔지 프로젝트 페이지
  -------------------------------------------------
  주요 납품 실적 및 프로젝트 소개
  고객사별 납품 이력 및 특화 기술 적용 사례 등 포함
*/

// --------------------------- Styled Components --------------------------- //
const ProjectsContainer = styled.div`
  width: 100%;
  padding-top: 70px; /* 고정 헤더 높이 보정 */
`;

const PageBanner = styled.div`
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('/images/projects-banner.jpg') no-repeat center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const ContentSection = styled.section`
  padding: 5rem 10%;
  &:nth-child(odd) {
    background-color: #f5f5f5;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 15px;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #0066cc;
  }
`;

const SectionDescription = styled.p`
  margin-bottom: 3rem;
  line-height: 1.6;
  color: #555;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #eaeaea;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.5rem;
    color: #0066cc;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    text-align: left;
  }
`;

const ProjectDetailsList = styled.ul`
  margin: 1.5rem 0;
  padding-left: 1.2rem;
  
  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    color: #555;
  }
`;

const ProjectSpecifications = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eaeaea;
  
  h4 {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background-color: #e6f0ff;
  color: #0066cc;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ContractHistorySection = styled.div`
  margin-top: 4rem;
  overflow-x: auto;
`;

const ContractTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const TableHead = styled.thead`
  background-color: #0066cc;
  color: white;
  
  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    
    &:first-child {
      text-align: center;
    }
  }
`;

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #eaeaea;
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: #f9f9f9;
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  td {
    padding: 1rem;
    vertical-align: top;
    
    &:first-child {
      text-align: center;
      font-weight: 600;
      color: #0066cc;
    }
  }
`;

const ProjectScale = styled.span`
  display: inline-block;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  background-color: ${props => {
    if (props.scale === 'large') return '#e6f7ee';
    if (props.scale === 'medium') return '#fff4e6';
    return '#f0f0f0';
  }};
  color: ${props => {
    if (props.scale === 'large') return '#00a86b';
    if (props.scale === 'medium') return '#ff9c33';
    return '#666666';
  }};
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: ${props => props.active ? '#0066cc' : '#e6f0ff'};
  color: ${props => props.active ? '#fff' : '#0066cc'};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#0055aa' : '#d1e5ff'};
  }
`;

// --------------------------- Component --------------------------- //
function Projects() {
  // 필터링을 위한 상태 관리
  const [activeFilter, setActiveFilter] = useState('전체');
  
  // 필터 변경 핸들러
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  
  // 계약 데이터 (실제 프로젝트에서는 별도 파일이나 API로 관리하는 것이 좋습니다)
  const contractData = [
    {
      year: 2025,
      client: '한국중부발전㈜',
      contractNumber: '소액(보일러전기)-20250115',
      items: '3–6호기 보일러 저압전동기',
      scale: 'small'
    },
    {
      year: 2025,
      client: '한전KPS㈜',
      contractNumber: '제R102500447호',
      items: 'DC-DC Converter Power Supply',
      scale: 'small'
    },
    {
      year: 2024,
      client: '한국중부발전㈜',
      contractNumber: '제2024-3',
      items: 'Pr Switch 등 4품목',
      scale: 'small'
    },
    {
      year: 2024,
      client: '한국동서발전㈜',
      contractNumber: '제S515330-00514호',
      items: '8# 제어설비 정비용',
      scale: 'small'
    },
    {
      year: 2023,
      client: '씨지앤 대산전력㈜',
      contractNumber: '제PO-883호',
      items: 'PUMP 스페어파트',
      scale: 'medium'
    },
    {
      year: 2023,
      client: '현대그린파워㈜',
      contractNumber: '제20231158호',
      items: 'VCB 오조작 방지용 경보장치 (1–8호기)',
      scale: 'small'
    },
    {
      year: 2022,
      client: '씨지앤 대산전력㈜',
      contractNumber: '제PO-560호',
      items: 'I&S ASH 및 소방설비 스페어파트',
      scale: 'medium'
    },
    {
      year: 2022,
      client: '한국서부발전㈜',
      contractNumber: '제R02222100821호',
      items: '군산 O/H 제어전문자재',
      scale: 'large'
    },
    {
      year: 2021,
      client: '한국서부발전㈜',
      contractNumber: '제2000068313호',
      items: '태안5·6호기 암모니아 압력전송기',
      scale: 'small'
    },
    {
      year: 2021,
      client: '씨지앤 대산전력㈜',
      contractNumber: '제PO-210801호',
      items: 'HRSG 송신기 24SET 외 11종',
      scale: 'medium'
    },
    {
      year: 2020,
      client: '한국중부발전㈜',
      contractNumber: '보령2발 제어기술부-1308',
      items: '3.6호기 압력전송기',
      scale: 'small'
    },
    {
      year: 2020,
      client: '씨지앤 대산전력㈜',
      contractNumber: '제PO-DB-200608호',
      items: '전기팀 계측장비 및 수공구 (샘플검사 자동화)',
      scale: 'medium'
    },
    {
      year: 2019,
      client: '한국서부발전㈜',
      contractNumber: '제R102001036호',
      items: '#1.2 HRSG 온도전송기',
      scale: 'small'
    },
    {
      year: 2018,
      client: '한국중부발전㈜',
      contractNumber: '제R051801121호',
      items: '현장 제어설비 경상자재',
      scale: 'medium'
    },
    {
      year: 2018,
      client: '한국서부발전㈜',
      contractNumber: '제R021-800272호',
      items: 'Solenoid Valve 등 21종 (IGCC 플랜트)',
      scale: 'large'
    },
    {
      year: 2017,
      client: '한국서부발전㈜',
      contractNumber: '제C0217000371호',
      items: '압력전송기 16EA',
      scale: 'small'
    },
    {
      year: 2017,
      client: '한국중부발전㈜',
      contractNumber: '제C051700463호',
      items: 'BRG TEMP TX (4.6호기 FAN 계통)',
      scale: 'medium'
    },
    {
      year: 2016,
      client: '한국중부발전㈜',
      contractNumber: '제R051-600050호',
      items: 'RTD & WELL Transmitter 126SET',
      scale: 'large'
    },
    {
      year: 2015,
      client: '한국가스공사㈜',
      contractNumber: '제2015-HD-0115호',
      items: '해수위 검출용 레벨전송기',
      scale: 'medium'
    },
    {
      year: 2015,
      client: '한국중부발전㈜',
      contractNumber: '제R051-500271호',
      items: 'Transmitter 9품목',
      scale: 'large'
    },
    {
      year: 2014,
      client: '한국중부발전㈜',
      contractNumber: '제R051-400809호',
      items: 'Guided Radar Transmitter 등 4품목',
      scale: 'large'
    },
    {
      year: 2014,
      client: '한국서부발전㈜',
      contractNumber: '제R021-400640호',
      items: '차압전송기 등 203품목',
      scale: 'large'
    },
    {
      year: 2013,
      client: '한국중부발전㈜',
      contractNumber: '제R051-301146호',
      items: 'GWR 레벨전송기 5품목',
      scale: 'medium'
    },
    {
      year: 2013,
      client: '한국서부발전㈜',
      contractNumber: '제R021-300151호',
      items: '초음파 Level Tx 등 175품목',
      scale: 'large'
    },
    {
      year: 2012,
      client: '한국동서발전㈜',
      contractNumber: '제R081-200303호',
      items: '가이드 레이다 수위전송기 등 10종',
      scale: 'medium'
    },
    {
      year: 2012,
      client: '한국서부발전㈜',
      contractNumber: '제R021-200173호',
      items: 'Data Logger 등 24종',
      scale: 'medium'
    },
    {
      year: 2011,
      client: '한국동서발전㈜',
      contractNumber: '제R081-100273호',
      items: '볼베어링 외 149종',
      scale: 'large'
    },
    {
      year: 2011,
      client: '한국중부발전㈜',
      contractNumber: '제R051-100329호',
      items: 'GWR Level Transmitter 28Set',
      scale: 'large'
    },
    {
      year: 2010,
      client: '한국남동발전㈜',
      contractNumber: '제R061-000011호',
      items: '#1 탈황제어설비 Speed Switch 외 98종',
      scale: 'large'
    },
    {
      year: 2010,
      client: '한국남동발전㈜',
      contractNumber: '제R061-000254호',
      items: '#2 Mechanical Trip Solenoid Valve 외 102종',
      scale: 'large'
    },
    {
      year: 2009,
      client: '한국중부발전㈜',
      contractNumber: '제R050-909699호',
      items: 'PLC 베이스모듈 외 32품목',
      scale: 'large'
    },
    {
      year: 2009,
      client: '한국중부발전㈜',
      contractNumber: '제R050-901764호',
      items: 'BRG #1 Cable 외 78품목',
      scale: 'large'
    },
    {
      year: 2007,
      client: '한국중부발전㈜',
      contractNumber: '제R050-703870호',
      items: 'Bolt Nut Washer 등 295품목',
      scale: 'large'
    }
  ];
  
  // 필터링된 계약 데이터
  const filteredContracts = 
    activeFilter === '전체' 
      ? contractData 
      : contractData.filter(contract => {
          if (activeFilter === '중부발전') return contract.client.includes('중부발전');
          if (activeFilter === '서부발전') return contract.client.includes('서부발전');
          if (activeFilter === '동서발전') return contract.client.includes('동서발전');
          if (activeFilter === '남동발전') return contract.client.includes('남동발전');
          if (activeFilter === '기타') {
            return !contract.client.includes('중부발전') && 
                   !contract.client.includes('서부발전') && 
                   !contract.client.includes('동서발전') && 
                   !contract.client.includes('남동발전');
          }
          return true;
        });
  
  return (
    <ProjectsContainer>
      {/* ========================================================================= */}
      {/* 배너 */}
      {/* ========================================================================= */}
      <PageBanner>
        <BannerTitle>주요 납품 실적</BannerTitle>
      </PageBanner>
      
      {/* ========================================================================= */}
      {/* 주요 납품 실적 소개 */}
      {/* ========================================================================= */}
      <ContentSection>
        <SectionTitle>프로젝트 이력</SectionTitle>
        <SectionDescription>
          (주)에스앤케이이엔지는 국내 주요 발전소 및 산업 현장에 고품질의 계측·제어 장비를 
          공급하며 맞춤형 솔루션을 제공하고 있습니다. 아래는 당사의 주요 납품 실적입니다.
        </SectionDescription>
        
        <ProjectsGrid>
          {/* 프로젝트 카드 1 */}
          <ProjectCard>
            <ProjectImage style={{ backgroundImage: `url('/images/delivery_01.png')` }} />
            <ProjectContent>
              <h3>고정밀 압력 전송기 공급</h3>
              <p>고진공 환경 및 고열 조건에서 안정적인 성능을 제공하는 맞춤형 설계 제품</p>
              
              <ProjectDetailsList>
                <li><strong>Absolute Pressure Transmitter APT3200-A</strong> - 570EA</li>
                <li><strong>Flow Transmitter (Differential Pressure Type) APT3500-D</strong> - 30EA</li>
              </ProjectDetailsList>
              
              <ProjectSpecifications>
                <h4>제품 특성</h4>
                <p>고진공 고열 환경 내성 설계 제품 적용으로 극한 환경에서도 안정적인 성능 유지</p>
                
                <h4>적용 분야</h4>
                <p>진공 시스템 제어 및 유량 정밀 측정</p>
              </ProjectSpecifications>
              
              <TagsContainer>
                <Tag>압력 전송기</Tag>
                <Tag>유량 측정</Tag>
                <Tag>고진공</Tag>
                <Tag>고열 환경</Tag>
              </TagsContainer>
            </ProjectContent>
          </ProjectCard>
          
          {/* 프로젝트 카드 2 */}
          <ProjectCard>
            <ProjectImage style={{ backgroundImage: `url('/images/delivery_02.png')` }} />
            <ProjectContent>
              <h3>특수 환경용 정밀 압력 전송기</h3>
              <p>방사선 및 전자기 간섭이 있는 극한 환경에서도 정확한 측정이 가능한 고신뢰성 전송기</p>
              
              <ProjectDetailsList>
                <li><strong>Absolute Pressure Transmitter APT3200-A</strong></li>
                <li><strong>Differential Transmitter (Differential Pressure Type) APT3100-D</strong></li>
              </ProjectDetailsList>
              
              <ProjectSpecifications>
                <h4>제품 특성</h4>
                <p>• 고진공 환경 및 극한 정밀도 요구 조건 대응</p>
                <p>• 방사선 및 전자기 내성 설계 기반 제품 적용</p>
                
                <h4>적용 분야</h4>
                <p>원자력 발전소, 의료 방사선 시설, 산업용 고정밀 공정 제어</p>
              </ProjectSpecifications>
              
              <TagsContainer>
                <Tag>정밀 측정</Tag>
                <Tag>방사선 내성</Tag>
                <Tag>전자기 차폐</Tag>
                <Tag>극한 환경</Tag>
              </TagsContainer>
            </ProjectContent>
          </ProjectCard>
          
          {/* 프로젝트 카드 3 */}
          <ProjectCard>
            <ProjectImage style={{ backgroundImage: `url('/images/delivery_03.png')` }} />
            <ProjectContent>
              <h3>초고온·고압용 절대압 전송기</h3>
              <p>600°C 초고온 및 최대 50bar 고압 환경에서도 안정적 성능을 제공하는 산업용 압력 전송기</p>
              
              <ProjectDetailsList>
                <li><strong>Absolute Pressure Transmitter APT3200-A</strong></li>
              </ProjectDetailsList>
              
              <ProjectSpecifications>
                <h4>제품 특성</h4>
                <p>• 고진공 고열 환경 내성 설계 제품 적용</p>
                <p>• 온도: 최대 600°C 환경 지원</p>
                <p>• 압력: 최대 50 bar 측정 가능</p>
                
                <h4>적용 분야</h4>
                <p>진공 시스템 제어 • 유량 정밀 측정</p>
              </ProjectSpecifications>
              
              <TagsContainer>
                <Tag>초고온</Tag>
                <Tag>고압</Tag>
                <Tag>절대압 전송기</Tag>
                <Tag>진공 제어</Tag>
              </TagsContainer>
            </ProjectContent>
          </ProjectCard>
          
          {/* 프로젝트 카드 4 */}
          <ProjectCard>
            <ProjectImage style={{ backgroundImage: `url('/images/delivery_04.png')` }} />
            <ProjectContent>
              <h3>e-fuel 파일럿 플랜트</h3>
              <p>수소와 이산화탄소를 활용한 그린 메탄 생산을 위한 고정밀 압력 측정 솔루션</p>
              
              <ProjectDetailsList>
                <li><strong>Absolute Pressure Transmitter APT3200-G</strong></li>
              </ProjectDetailsList>
              
              <ProjectSpecifications>
                <h4>제품 특성</h4>
                <p>• 고진공 환경 및 극한 정밀도 요구 조건 대응</p>
                <p>• H₂ + CO₂ = Green Methane 공정에 최적화된 설계</p>
                <p>• 친환경 e-fuel 생산 시스템 적용 가능</p>
                
                <h4>적용 분야</h4>
                <p>진공 시스템 제어 • 유량 정밀 측정 • 합성연료 생산공정</p>
              </ProjectSpecifications>
              
              <TagsContainer>
                <Tag>그린 메탄</Tag>
                <Tag>e-fuel</Tag>
                <Tag>수소</Tag>
                <Tag>탄소중립</Tag>
              </TagsContainer>
            </ProjectContent>
          </ProjectCard>
          
          {/* 프로젝트 카드 5 */}
          <ProjectCard>
            <ProjectImage style={{ backgroundImage: `url('/images/delivery_05.png')` }} />
            <ProjectContent>
              <h3>리튬이온 2차전지용 LIELSORT 2차 생산라인</h3>
              <p>배터리 셀 제조 공정에 최적화된 고정밀 압력 측정 및 제어 시스템</p>
              
              <ProjectDetailsList>
                <li><strong>Absolute Pressure Transmitter ALT6210</strong></li>
                <li><strong>Pressure Transmitter APT3200-LED, APT3100-LEC</strong></li>
              </ProjectDetailsList>
              
              <ProjectSpecifications>
                <h4>제품 특성</h4>
                <p>• 고진공 고열 환경 내성 설계 제품 적용</p>
                <p>• 온도: 최대 600°C 환경 지원</p>
                <p>• 압력: 최대 50 bar 측정 가능</p>
                
                <h4>적용 분야</h4>
                <p>리튬이온 배터리 생산 공정 • 전극 코팅 설비 • 전해질 주입 공정 • 셀 활성화 시스템</p>
              </ProjectSpecifications>
              
              <TagsContainer>
                <Tag>2차전지</Tag>
                <Tag>리튬이온</Tag>
                <Tag>배터리 생산</Tag>
                <Tag>고진공 공정</Tag>
              </TagsContainer>
            </ProjectContent>
          </ProjectCard>
          
          {/* 프로젝트 카드 6 */}
          <ProjectCard>
            <ProjectImage style={{ backgroundImage: `url('/images/delivery_06.png')` }} />
            <ProjectContent>
              <h3>발전기 응용 시스템</h3>
              <p>발전 설비 주변 장치에 최적화된 고정밀 압력 측정 솔루션</p>
              
              <ProjectDetailsList>
                <li><strong>Absolute Pressure Transmitter APT3100-G</strong></li>
              </ProjectDetailsList>
              
              <ProjectSpecifications>
                <h4>제품 특성</h4>
                <p>• 고진공 환경 및 극한 정밀도 요구 조건 대응</p>
                <p>• 발전 시스템 특화 설계로 안정적 성능 보장</p>
                <p>• 장기간 연속 운전 환경에서 높은 신뢰성 제공</p>
                
                <h4>적용 분야</h4>
                <p>진공 시스템 제어 • 유량 정밀 측정 • 터빈 압력 모니터링 • 냉각시스템 제어</p>
              </ProjectSpecifications>
              
              <TagsContainer>
                <Tag>발전 설비</Tag>
                <Tag>터빈 제어</Tag>
                <Tag>고정밀 측정</Tag>
                <Tag>시스템 안정성</Tag>
              </TagsContainer>
            </ProjectContent>
          </ProjectCard>
          
          {/* 추가 프로젝트 카드 자리 - 향후 확장 가능 */}
        </ProjectsGrid>
      </ContentSection>

      {/* ========================================================================= */}
      {/* 계약 이력 */}
      {/* ========================================================================= */}
      <ContentSection>
        <SectionTitle>계약 이력</SectionTitle>
        <SectionDescription>
          2007년부터 현재까지 국내 주요 발전소 및 산업 현장에 납품한 
          제품 및 서비스의 상세 계약 이력입니다.
        </SectionDescription>
        
        <FilterButtons>
          <FilterButton 
            active={activeFilter === '전체'} 
            onClick={() => handleFilterChange('전체')}
          >
            전체
          </FilterButton>
          <FilterButton 
            active={activeFilter === '중부발전'} 
            onClick={() => handleFilterChange('중부발전')}
          >
            중부발전
          </FilterButton>
          <FilterButton 
            active={activeFilter === '서부발전'} 
            onClick={() => handleFilterChange('서부발전')}
          >
            서부발전
          </FilterButton>
          <FilterButton 
            active={activeFilter === '동서발전'} 
            onClick={() => handleFilterChange('동서발전')}
          >
            동서발전
          </FilterButton>
          <FilterButton 
            active={activeFilter === '남동발전'} 
            onClick={() => handleFilterChange('남동발전')}
          >
            남동발전
          </FilterButton>
          <FilterButton 
            active={activeFilter === '기타'} 
            onClick={() => handleFilterChange('기타')}
          >
            기타
          </FilterButton>
        </FilterButtons>
        
        <ContractHistorySection>
          <ContractTable>
            <TableHead>
              <tr>
                <th>연도</th>
                <th>발주처</th>
                <th>계약번호</th>
                <th>주요 품명</th>
                <th>규모</th>
              </tr>
            </TableHead>
            <TableBody>
              {filteredContracts.map((contract, index) => (
                <tr key={index}>
                  <td>{contract.year}</td>
                  <td>{contract.client}</td>
                  <td>{contract.contractNumber}</td>
                  <td>{contract.items}</td>
                  <td>
                    <ProjectScale scale={contract.scale}>
                      {contract.scale === 'large' ? '대형' : contract.scale === 'medium' ? '중형' : '소형'}
                    </ProjectScale>
                  </td>
                </tr>
              ))}
              {filteredContracts.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '2rem' }}>
                    검색 결과가 없습니다.
                  </td>
                </tr>
              )}
            </TableBody>
          </ContractTable>
        </ContractHistorySection>
      </ContentSection>

    </ProjectsContainer>
  );
}

export default Projects;

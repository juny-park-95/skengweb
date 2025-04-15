import React from 'react';
import styled from 'styled-components';

const BusinessContainer = styled.div`
  width: 100%;
  padding-top: 70px; /* To account for fixed header */
`;

const PageBanner = styled.div`
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('/images/business-banner.jpg') no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
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

const BusinessArea = styled.div`
  margin-top: 3rem;
`;

const BusinessCard = styled.div`
  display: flex;
  flex-direction: ${props => props.reversed ? 'row-reverse' : 'row'};
  margin-bottom: 4rem;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BusinessImage = styled.div`
  flex: 1;
  min-height: 400px;
  background-size: cover;
  background-position: center;
  
  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

const BusinessContent = styled.div`
  flex: 1;
  padding: 2.5rem;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #0066cc;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: #444;
  }
  
  ul {
    padding-left: 20px;
    margin-bottom: 1.5rem;
    
    li {
      margin-bottom: 0.8rem;
    }
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 25px;
  background-color: #0066cc;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-weight: 500;
  
  &:hover {
    background-color: #0055aa;
  }
`;

function Business() {
  return (
    <BusinessContainer>
      <PageBanner>
        {/* 배너 타이틀은 그대로 두거나, '전문 공급 분야' 등으로 수정 가능 */}
        <BannerTitle>사업영역</BannerTitle> 
      </PageBanner>
      
      <ContentSection>
        <SectionTitle>(주)에스앤케이이엔지의 사업영역</SectionTitle>
        {/* 서론 수정: 회사의 새로운 정체성 반영 */}
        <p>(주)에스앤케이이엔지는 발전소 운영에 필수적인 전기·전자 설비 및 부품 공급 분야의 전문성을 바탕으로, 
        고객사의 안정적이고 효율적인 전력 생산을 지원하는 신뢰할 수 있는 파트너입니다. 
        다년간의 경험과 기술력을 통해 최적의 솔루션을 제공하며 고객 가치 실현에 기여합니다.</p>
        
        <BusinessArea>
          {/* 영역 1: 주요 전기 기계/장비 */}
          <BusinessCard>
            {/* TODO: 이미지 URL을 관련 이미지로 변경하세요 (예: /images/power_equipment_detail.jpg) */}
            <BusinessImage style={{ backgroundImage: `url('/images/power_equipment_detail.jpg')` }} /> 
            <BusinessContent>
              <h3>주요 전기 기계·장비</h3>
              <p>
                발전소의 심장부인 전력 생산 시스템과 안정적인 송배전망 구축에 필요한 핵심 전기 기계 및 장비를 전문적으로 공급합니다. 
                세계적인 제조사와의 파트너십과 엄격한 품질 관리를 통해 최고 수준의 신뢰성과 성능을 보장하는 제품만을 취급하여,
                발전소의 무중단 운영과 효율성 향상에 기여합니다.
              </p>
              <ul>
                <li>발전기 및 터빈 관련 설비</li>
                <li>고압/저압 변압기 및 리액터</li>
                <li>가스절연개폐장치(GIS), 스위치기어</li>
                <li>보호 계전 시스템 및 배전반</li>
                <li>무정전 전원 장치(UPS) 및 축전지</li>
              </ul>
              {/* <Button href="#">제품 보기</Button> -- 필요시 링크 수정 또는 삭제 */}
            </BusinessContent>
          </BusinessCard>
          
          {/* 영역 2: 제어 시스템 및 전자 부품 */}
          <BusinessCard reversed> 
            {/* TODO: 이미지 URL을 관련 이미지로 변경하세요 (예: /images/control_systems_detail.jpg) */}
            <BusinessImage style={{ backgroundImage: `url('/images/control_systems_detail.jpg')` }} />
            <BusinessContent>
              <h3>제어 시스템 및 전자 부품</h3>
              <p>
                발전소 운영의 효율성과 안전성을 극대화하는 최신 제어 및 자동화 솔루션을 제공합니다. 
                분산제어시스템(DCS), 프로그래머블 로직 컨트롤러(PLC)부터 각종 센서, 액추에이터, 산업용 통신 장비에 이르기까지, 
                운영 환경에 최적화된 솔루션과 고신뢰성 부품을 공급하여 플랜트 자동화 및 지능화를 지원합니다.
              </p>
              <ul>
                <li>분산제어시스템(DCS), PLC 및 HMI 시스템</li>
                <li>각종 산업용 센서 (온도, 압력, 유량 등)</li>
                <li>제어 밸브 및 액추에이터</li>
                <li>인버터 및 드라이브 시스템</li>
                <li>산업용 네트워크 및 통신 장비</li>
              </ul>
              {/* <Button href="#">제품 보기</Button> -- 필요시 링크 수정 또는 삭제 */}
            </BusinessContent>
          </BusinessCard>
          
          {/* 영역 3: 계측기기 및 시험 장비 */}
          <BusinessCard>
            {/* TODO: 이미지 URL을 관련 이미지로 변경하세요 (예: /images/instruments_detail.jpg) */}
            <BusinessImage style={{ backgroundImage: `url('/images/instruments_detail.jpg')` }} /> 
            <BusinessContent>
              <h3>계측기기 및 시험 장비</h3>
              <p>
                발전 설비의 상태를 정확하게 진단하고 최적의 성능을 유지하기 위한 필수적인 계측 및 시험 장비를 공급합니다. 
                정밀 계측기기부터 휴대용 진단 장비, 교정 장비까지 다양한 제품군을 통해 
                예방 정비와 신속한 문제 해결을 지원하여 설비의 신뢰도와 안전성을 높입니다.
              </p>
              <ul>
                <li>전력 분석기 및 품질 측정기</li>
                <li>절연 저항계 및 접지 저항계</li>
                <li>온도, 압력, 유량 등 공정 계측기</li>
                <li>진동 분석기 및 예방 진단 장비</li>
                <li>각종 휴대용 시험 및 측정 장비</li>
              </ul>
              {/* <Button href="#">제품 보기</Button> -- 필요시 링크 수정 또는 삭제 */}
            </BusinessContent>
          </BusinessCard>
          
          {/* 영역 4: 관련 기자재 및 부품 */}
          <BusinessCard reversed> 
            {/* TODO: 이미지 URL을 관련 이미지로 변경하세요 (예: /images/materials_parts_detail.jpg) */}
            <BusinessImage style={{ backgroundImage: `url('/images/materials_parts_detail.jpg')` }} /> 
            <BusinessContent>
              <h3>관련 기자재 및 부품</h3>
              <p>
                발전소의 원활한 운영과 유지보수에 필요한 모든 종류의 관련 기자재와 부품을 포괄적으로 취급합니다. 
                고품질의 케이블, 커넥터, 배관 자재부터 신속한 교체가 필요한 예비 부품까지, 
                고객의 요구에 맞춘 안정적인 공급망과 경쟁력 있는 가격으로 최상의 서비스를 제공합니다.
              </p>
              <ul>
                <li>전력 및 제어 케이블, 광케이블</li>
                <li>각종 커넥터, 터미널 및 배선 자재</li>
                <li>밸브, 피팅 등 배관 관련 자재</li>
                <li>필터, 베어링 등 소모성 부품</li>
                <li>각종 공구 및 안전 장비</li>
              </ul>
              {/* <Button href="#">제품 보기</Button> -- 필요시 링크 수정 또는 삭제 */}
            </BusinessContent>
          </BusinessCard>
        </BusinessArea>
      </ContentSection>
    </BusinessContainer>
  );
}

export default Business;

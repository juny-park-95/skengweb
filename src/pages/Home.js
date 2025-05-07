import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 70px; /* To account for fixed header */
`;

const HeroSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  color: white;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 2s infinite;
  
  p {
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  svg {
    width: 30px;
    height: 30px;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`;

const BusinessSection = styled.section`
  padding: 5rem 10%;
  background-color:rgb(255, 255, 255);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #0066cc;
  }
`;

const BusinessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const BusinessCard = styled.div`
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const BusinessCardImage = styled.div`
  height: 200px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  transition: all 0.3s ease;
  
  ${BusinessCard}:hover & {
    transform: scale(1.05);
  }
`;

const BusinessCardContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #0066cc;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0055aa;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>(주)에스앤케이이엔지</HeroTitle>
        <HeroSubtitle>전기·전자 기자재 전문 공급 파트너</HeroSubtitle>
        <HeroDescription>
        (주)에스앤케이이엔지는 두온시스템(주) 발전소 대리점입니다. 
        다년간의 경험과 전문성을 바탕으로 신뢰할 수 있는 
        공급 파트너가 되겠습니다.
        </HeroDescription>
        <ScrollIndicator>
          <p>Scroll Down</p>
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </ScrollIndicator>
      </HeroSection>
      
      <BusinessSection>
      <SectionTitle>사업영역</SectionTitle>
      <BusinessGrid>
        {/* 카드 1: 주요 전기 기계/장비 */}
        <BusinessCard>
          {/* TODO: 이미지 URL을 관련 이미지로 변경하세요 (예: /images/electrical_equipment.jpg) */}
          <BusinessCardImage style={{ backgroundImage: `url('/images/power_equipment.jpg')` }} /> 
          <BusinessCardContent>
            <h3>주요 전기 기계·장비</h3>
            <p>발전소의 안정적인 전력 생산 및 공급에 필수적인 변압기, 차단기, 보호 계전기 등 고품질의 핵심 전기 기계 및 장비를 공급합니다.</p>
            {/* <Button href="#">자세히 보기</Button> -- 필요시 링크 추가 */}
          </BusinessCardContent>
        </BusinessCard>
        
        {/* 카드 2: 제어 시스템 및 전자 부품 */}
        <BusinessCard>
          {/* TODO: 이미지 URL을 관련 이미지로 변경하세요 (예: /images/control_systems.jpg) */}
          <BusinessCardImage style={{ backgroundImage: `url('/images/automation_components.jpg')` }} />
          <BusinessCardContent>
            <h3>제어 시스템 및 전자 부품</h3>
            <p>발전 설비의 정밀 제어 및 자동화 시스템 구축에 필요한 PLC, 센서, 제어 모듈 등 다양한 고성능 전자 부품 및 시스템 솔루션을 제공합니다.</p>
            {/* <Button href="#">자세히 보기</Button> -- 필요시 링크 추가 */}
          </BusinessCardContent>
        </BusinessCard>
        
        {/* 카드 3: 계측기기 및 시험 장비 */}
        <BusinessCard>
           {/* TODO: 이미지 URL을 관련 이미지로 변경하세요 (예: /images/instruments.jpg) */}
          <BusinessCardImage style={{ backgroundImage: `url('/images/measuring_instruments.jpg')` }} />
          <BusinessCardContent>
            <h3>계측기기 및 시험 장비</h3>
            <p>설비 상태의 정확한 측정, 진단 및 감시를 위한 전압/전류계, 온도/압력계 등 신뢰성 높은 산업용 계측기기와 시험 장비를 공급합니다.</p>
            {/* <Button href="#">자세히 보기</Button> -- 필요시 링크 추가 */}
          </BusinessCardContent>
        </BusinessCard>
        
        {/* 카드 4: 관련 기자재 및 부품 */}
        <BusinessCard>
          {/* TODO: 이미지 URL을 관련 이미지로 변경하세요 (예: /images/related_materials.jpg) */}
          <BusinessCardImage style={{ backgroundImage: `url('/images/cables_parts.jpg')` }} /> 
          <BusinessCardContent>
            <h3>관련 기자재 및 부품</h3>
            <p>케이블, 커넥터, 배관 자재, 예비 부품 등 발전소 운영 및 유지보수에 필요한 다양한 종류의 고품질 관련 기자재와 소모품을 취급합니다.</p>
            {/* <Button href="#">자세히 보기</Button> -- 필요시 링크 추가 */}
          </BusinessCardContent>
        </BusinessCard>
      </BusinessGrid>
    </BusinessSection>
    </HomeContainer>
  );
}

export default Home;

import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  width: 100%;
  padding-top: 70px; /* To account for fixed header */
`;

const PageBanner = styled.div`
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('/images/about-banner.jpg') no-repeat center;
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

const CompanyVision = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const VisionCard = styled.div`
  flex: 1;
  min-width: 250px;
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #0066cc;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const CompanyHistory = styled.div`
  margin-top: 3rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #0066cc;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  
  &:nth-child(odd) {
    left: 0;
  }
  
  &:nth-child(even) {
    left: 50%;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    
    &:nth-child(odd), &:nth-child(even) {
      left: 0;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 1.2rem;
    color: #0066cc;
    margin-bottom: 10px;
  }
  
  p {
    line-height: 1.6;
    color: #666;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: white;
    border: 4px solid #0066cc;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  
  ${TimelineItem}:nth-child(odd) &::after {
    right: -17px;
  }
  
  ${TimelineItem}:nth-child(even) &::after {
    left: -17px;
  }
  
  @media (max-width: 768px) {
    &::after {
      left: -17px;
    }
  }
`;

const LocationInfo = styled.div`
  margin-top: 3rem;
`;

const AddressCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0066cc;
`;

const InfoContent = styled.div`
  color: #666;
  line-height: 1.6;
`;

const MapContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  
  iframe {
    width: 100%;
    max-width: 100%;
    height: 450px;
    
    @media (max-width: 768px) {
      height: 350px;
    }
  }
`;

const TransportSection = styled.div`
  margin-top: 3rem;
`;

const TransportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TransportCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const TransportIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

function About() {
  return (
    <AboutContainer>
      <PageBanner>
        <BannerTitle>기업소개</BannerTitle>
      </PageBanner>
      
      <ContentSection>
        <SectionTitle>회사소개</SectionTitle>
        {/* 회사 소개 문구 수정 */}
        <p>(주)에스앤케이이엔지는 발전소의 안정적이고 효율적인 운영에 필수적인 전기·전자 기계, 부품 및 계측기기 분야의 전문 공급 기업입니다. 
        다년간 축적된 전문성과 신뢰를 바탕으로, 고품질의 제품과 최적화된 솔루션을 제공하여 국내외 발전 산업 발전에 기여하고 있습니다. 
        고객과의 상생을 최우선으로 생각하며, 지속적인 혁신을 통해 전력 산업의 든든한 파트너로 성장하고 있습니다.</p>
        
        <CompanyVision>
          {/* 비전, 미션, 핵심가치 수정 */}
          <VisionCard>
            <h3>VISION</h3>
            {/* 예시: 회사의 지향점을 명확히 */}
            <p>발전 산업 분야 최고의 신뢰를 받는 전기·전자 설비 솔루션 파트너</p> 
          </VisionCard>
          
          <VisionCard>
            <h3>MISSION</h3>
            {/* 예시: 회사의 역할과 기여 */}
            <p>최고 품질의 제품과 전문 기술 서비스를 통해 고객 발전소의 가동 효율성과 안정성 극대화에 기여한다.</p>
          </VisionCard>
          
          <VisionCard>
            <h3>CORE VALUES</h3>
            {/* 예시: 회사의 핵심 가치 */}
            <p>신뢰, 전문성, 품질, 고객 만족, 혁신</p> 
          </VisionCard>
        </CompanyVision>
      </ContentSection>
      
      <ContentSection>
        <SectionTitle>연혁</SectionTitle>
        <CompanyHistory>
          <Timeline>
            <TimelineItem>
              <TimelineContent>
                <h3>2015년 2월</h3>
                <p>- 2015년 2월 17일 주식회사 에스앤케이이엔지로 사명 변경</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineContent>
                <h3>2013년 8월</h3>
                <p>- 2013년 8월 9일 주식회사 에스케이이엔지 설립</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CompanyHistory>
      </ContentSection>
      
      <ContentSection>
        <SectionTitle>오시는 길</SectionTitle>
        <LocationInfo>
          <AddressCard>
            <InfoTitle>주소</InfoTitle>
            <InfoContent>
              <p>경기 안산시 단원구 신촌5길 28</p>
              <p>우편번호: 15443</p>
              <p>전화: 070-8270-0665</p>
              <p>이메일: sk5559611@hanmail.net</p>
              <p>영업시간: 평일 09:00 - 18:00</p>
              <p>토/일/공휴일 휴무</p>
            </InfoContent>
          </AddressCard>
          
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7777430184738!2d126.81750527184691!3d37.31454205827108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6e53e53fe145%3A0x7bd617d6a3522ffd!2z6rK96riw64-EIOyViOyCsOyLnCDri6jsm5Dqtawg7Iug7LSMNeq4uCAyOA!5e0!3m2!1sko!2skr!4v1744726564468!5m2!1sko!2skr" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </LocationInfo>
        
        <TransportSection>
          <SectionTitle>교통 안내</SectionTitle>
          <TransportGrid>
            <TransportCard>
              <TransportIcon>🚗</TransportIcon>
              <InfoTitle>자가용 이용 시</InfoTitle>
              <InfoContent>
                <p>- 서해안고속도로 안산IC에서 15분 거리</p>
                <p>- 주차장 이용 가능 (무료)</p>
              </InfoContent>
            </TransportCard>
            
            <TransportCard>
              <TransportIcon>🚍</TransportIcon>
              <InfoTitle>버스 이용 시</InfoTitle>
              <InfoContent>
                <p>- 안산역/안산터미널 정류장에서 하차</p>
                <p>- 123, 456번 버스 이용</p>
                <p>- '신촌사거리' 정류장에서 하차 후 도보 5분</p>
              </InfoContent>
            </TransportCard>
            
            <TransportCard>
              <TransportIcon>🚆</TransportIcon>
              <InfoTitle>지하철 이용 시</InfoTitle>
              <InfoContent>
                <p>- 4호선 안산역에서 하차</p>
                <p>- 2번 출구에서 도보 15분 또는</p>
                <p>- 안산역 앞에서 123, 456번 버스 이용</p>
              </InfoContent>
            </TransportCard>
          </TransportGrid>
        </TransportSection>
      </ContentSection>
    </AboutContainer>
  );
}

export default About;

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

function About() {
  return (
    <AboutContainer>
      <PageBanner>
        <BannerTitle>기업소개</BannerTitle>
      </PageBanner>
      
      <ContentSection>
        <SectionTitle>회사소개</SectionTitle>
        <p>SK E&C는 글로벌 종합건설회사로서 인프라, 건축/주택, 플랜트, 친환경 에너지 사업을 통해 
        인류의 삶의 질 향상과 지속가능한 발전에 기여하고 있습니다. 고객과 사회에 최고의 가치를 
        제공하며 미래를 선도하는 혁신적인 기업으로 성장하고 있습니다.</p>
        
        <CompanyVision>
          <VisionCard>
            <h3>VISION</h3>
            <p>지속가능한 미래를 창조하는 글로벌 건설 리더</p>
          </VisionCard>
          
          <VisionCard>
            <h3>MISSION</h3>
            <p>혁신적인 기술과 서비스로 고객과 사회에 가치를 창출하고, 
            더 나은 미래를 위한 인프라를 구축합니다.</p>
          </VisionCard>
          
          <VisionCard>
            <h3>CORE VALUES</h3>
            <p>고객중심, 혁신, 신뢰, 지속가능성, 전문성</p>
          </VisionCard>
        </CompanyVision>
      </ContentSection>
      
      <ContentSection>
        <SectionTitle>연혁</SectionTitle>
        <CompanyHistory>
          <Timeline>
            <TimelineItem>
              <TimelineContent>
                <h3>2022</h3>
                <p>- 친환경 에너지 사업 확대</p>
                <p>- 글로벌 ESG 경영 선포</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineContent>
                <h3>2018</h3>
                <p>- 스마트 건설 기술 도입</p>
                <p>- 베트남 지사 설립</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineContent>
                <h3>2014</h3>
                <p>- 중동 대형 프로젝트 수주</p>
                <p>- 매출 5조원 달성</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineContent>
                <h3>2010</h3>
                <p>- 글로벌 경영 전략 수립</p>
                <p>- 싱가포르 지사 설립</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineContent>
                <h3>2000</h3>
                <p>- SK그룹 편입</p>
                <p>- 회사명 변경 (SK E&C)</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineContent>
                <h3>1990</h3>
                <p>- 기업 공개</p>
                <p>- 해외 시장 진출</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineContent>
                <h3>1977</h3>
                <p>- 회사 설립</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CompanyHistory>
      </ContentSection>
    </AboutContainer>
  );
}

export default About;

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
        <BannerTitle>사업영역</BannerTitle>
      </PageBanner>
      
      <ContentSection>
        <SectionTitle>SK E&C의 사업영역</SectionTitle>
        <p>SK E&C는 오랜 경험과 축적된 기술력을 바탕으로 인프라, 건축/주택, 플랜트, 친환경 에너지 분야에서 
        고객의 가치를 극대화하고 지속가능한 미래를 창조하는데 앞장서고 있습니다.</p>
        
        <BusinessArea>
          <BusinessCard>
            <BusinessImage style={{ backgroundImage: `url('/images/infrastructure-detail.jpg')` }} />
            <BusinessContent>
              <h3>인프라</h3>
              <p>
                SK E&C는 도로, 교량, 철도, 지하철, 항만, 공항 등 국가 기간시설 건설을 통해 
                국가 및 지역사회 발전에 기여하고 있습니다. 최첨단 건설 기술과 풍부한 경험을 바탕으로 
                안전하고 편리한 사회 인프라를 구축합니다.
              </p>
              <ul>
                <li>도로 및 교량</li>
                <li>철도 및 지하철</li>
                <li>항만 및 공항</li>
                <li>수자원 시설</li>
              </ul>
              <Button href="#">프로젝트 보기</Button>
            </BusinessContent>
          </BusinessCard>
          
          <BusinessCard reversed>
            <BusinessImage style={{ backgroundImage: `url('/images/building-detail.jpg')` }} />
            <BusinessContent>
              <h3>건축/주택</h3>
              <p>
                최신 건축 기술과 디자인 철학을 바탕으로 사용자 중심의 건축물을 설계하고 건설합니다. 
                주거, 상업, 문화, 스포츠 시설 등 다양한 건축 분야에서 고객의 요구를 충족시키는 
                맞춤형 솔루션을 제공합니다.
              </p>
              <ul>
                <li>주거시설 (아파트, 주상복합)</li>
                <li>상업시설 (오피스, 쇼핑몰)</li>
                <li>공공시설 (학교, 병원, 문화센터)</li>
                <li>스포츠/레저 시설</li>
              </ul>
              <Button href="#">프로젝트 보기</Button>
            </BusinessContent>
          </BusinessCard>
          
          <BusinessCard>
            <BusinessImage style={{ backgroundImage: `url('/images/plant-detail.jpg')` }} />
            <BusinessContent>
              <h3>플랜트</h3>
              <p>
                SK E&C는 석유화학, 정유, 가스, 발전, 환경 플랜트 등 다양한 산업 설비를 설계, 조달, 
                시공하고 있습니다. 고도의 기술력과 프로젝트 관리 역량을 바탕으로 최고 품질의 
                산업 시설을 구축합니다.
              </p>
              <ul>
                <li>석유화학 플랜트</li>
                <li>발전 플랜트</li>
                <li>가스 처리 시설</li>
                <li>환경 플랜트</li>
              </ul>
              <Button href="#">프로젝트 보기</Button>
            </BusinessContent>
          </BusinessCard>
          
          <BusinessCard reversed>
            <BusinessImage style={{ backgroundImage: `url('/images/eco-detail.jpg')` }} />
            <BusinessContent>
              <h3>친환경 에너지</h3>
              <p>
                미래 세대를 위한 지속가능한 에너지 솔루션을 개발하고 제공합니다. 
                태양광, 풍력, 수소 등 신재생 에너지 사업을 통해 친환경 가치를 창출하고, 
                탄소중립을 위한 기술 혁신에 앞장서고 있습니다.
              </p>
              <ul>
                <li>태양광 발전</li>
                <li>풍력 발전</li>
                <li>수소 인프라</li>
                <li>에너지 저장 시스템</li>
              </ul>
              <Button href="#">프로젝트 보기</Button>
            </BusinessContent>
          </BusinessCard>
        </BusinessArea>
      </ContentSection>
    </BusinessContainer>
  );
}

export default Business;

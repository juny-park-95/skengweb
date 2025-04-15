import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 70px; /* To account for fixed header */
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), 
              url('/images/hero-bg.jpg') no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10%;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @keyframes fadeInUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const HeroSubtitle = styled.div`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease 0.3s forwards;
  opacity: 0;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @keyframes fadeInUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  animation: fadeInUp 1s ease 0.6s forwards;
  opacity: 0;
  
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
  background-color: #f5f5f5;
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
  background-size: cover;
  background-position: center;
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
        <HeroTitle>SK E&C</HeroTitle>
        <HeroSubtitle>혁신 Connect 미래</HeroSubtitle>
        <HeroDescription>
          SK E&C는 지속가능한 미래를 위한 혁신적인 건설 솔루션을 제공합니다. 
          인프라, 건축, 플랜트, 친환경 에너지 분야에서 글로벌 리더로 성장하고 있습니다.
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
          <BusinessCard>
            <BusinessCardImage style={{ backgroundImage: `url('/images/infrastructure.jpg')` }} />
            <BusinessCardContent>
              <h3>인프라</h3>
              <p>도로, 교량, 철도, 항만 등 국가 기간시설을 구축하여 편리한 사회 인프라를 만들어갑니다.</p>
              <Button href="#">자세히 보기</Button>
            </BusinessCardContent>
          </BusinessCard>
          
          <BusinessCard>
            <BusinessCardImage style={{ backgroundImage: `url('/images/building.jpg')` }} />
            <BusinessCardContent>
              <h3>건축/주택</h3>
              <p>최신 건축 기술과 디자인으로 고객의 요구에 부합하는 주거 및 상업 공간을 창출합니다.</p>
              <Button href="#">자세히 보기</Button>
            </BusinessCardContent>
          </BusinessCard>
          
          <BusinessCard>
            <BusinessCardImage style={{ backgroundImage: `url('/images/plant.jpg')` }} />
            <BusinessCardContent>
              <h3>플랜트</h3>
              <p>고도의 기술력을 바탕으로 석유화학, 발전, 환경 플랜트 등 다양한 산업 시설을 건설합니다.</p>
              <Button href="#">자세히 보기</Button>
            </BusinessCardContent>
          </BusinessCard>
          
          <BusinessCard>
            <BusinessCardImage style={{ backgroundImage: `url('/images/eco.jpg')` }} />
            <BusinessCardContent>
              <h3>친환경 에너지</h3>
              <p>태양광, 풍력, 수소 등 친환경 에너지 사업을 통해 지속가능한 미래를 구현합니다.</p>
              <Button href="#">자세히 보기</Button>
            </BusinessCardContent>
          </BusinessCard>
        </BusinessGrid>
      </BusinessSection>
    </HomeContainer>
  );
}

export default Home;

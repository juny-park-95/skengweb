import React from 'react';
import styled from 'styled-components';

const HRContainer = styled.div`
  width: 100%;
  padding-top: 70px; /* To account for fixed header */
`;

const PageBanner = styled.div`
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('/images/hr-banner.jpg') no-repeat center;
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

const TalentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
`;

const TalentCard = styled.div`
  flex: 1;
  min-width: 300px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const TalentIcon = styled.div`
  height: 150px;
  background-color: #0066cc;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    height: 80px;
  }
`;

const TalentContent = styled.div`
  padding: 2rem;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #0066cc;
  }
  
  p {
    line-height: 1.6;
    color: #555;
  }
`;

const RecruitmentProcess = styled.div`
  margin-top: 3rem;
`;

const ProcessSteps = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 50px;
    right: 50px;
    height: 4px;
    background-color: #ddd;
    z-index: 0;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ProcessStep = styled.div`
  flex: 1;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-bottom: 2rem;
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #0066cc;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const StepDescription = styled.p`
  text-align: center;
  color: #666;
  max-width: 200px;
`;

const WelfareSection = styled.div`
  margin-top: 3rem;
`;

const WelfareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const WelfareCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 1.3rem;
    color: #0066cc;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 10px;
    }
  }
  
  ul {
    padding-left: 20px;
    
    li {
      margin-bottom: 0.8rem;
      color: #555;
    }
  }
`;

const RecruitmentButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #0066cc;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-weight: 500;
  font-size: 1.1rem;
  margin-top: 3rem;
  
  &:hover {
    background-color: #0055aa;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

function HumanResources() {
  return (
    <HRContainer>
      <PageBanner>
        <BannerTitle>인재채용</BannerTitle>
      </PageBanner>
      
      <ContentSection>
        <SectionTitle>인재상</SectionTitle>
        <p>(주)에스앤케이이엔지는 열정적이고 도전적인 인재, 창의적이고 혁신적인 사고를 가진 인재, 
        전문성과 글로벌 역량을 갖춘 인재를 소중히 여깁니다.</p>
        
        <TalentSection>
          <TalentCard>
            <TalentIcon>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
                <path d="M13.5 1.5L15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm3-0.75v7.5h4.5v-7.5h-4.5zm-3 15L15 14.25h7.5l1.5 1.5v7.5L22.5 24.75H15l-1.5-1.5v-7.5zm3-0.75v7.5h4.5v-7.5h-4.5zM0 14.25l1.5-1.5h7.5l1.5 1.5v7.5l-1.5 1.5H1.5L0 21.75v-7.5zm3 0.75v7.5h4.5V15H3zm0-14.25v7.5h4.5v-7.5H3z"/>
              </svg>
            </TalentIcon>
            <TalentContent>
              <h3>창의적 인재</h3>
              <p>기존의 틀에서 벗어나 새로운 관점으로 문제를 바라보고, 혁신적인 아이디어를 도출하며 지속적인 변화와 발전을 추구하는 인재</p>
            </TalentContent>
          </TalentCard>
          
          <TalentCard>
            <TalentIcon>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
                <path d="M10 16.5l-4-4 4-4L9 7 4 12l5 5 1-0.5zm4-9l4 4-4 4 1 1.5 5-5.5-5-5L14 7.5z"/>
              </svg>
            </TalentIcon>
            <TalentContent>
              <h3>전문적 인재</h3>
              <p>자신의 분야에서 최고의 전문성을 추구하고, 끊임없는 학습과 자기계발을 통해 역량을 강화하며 글로벌 시장에서 경쟁력을 갖춘 인재</p>
            </TalentContent>
          </TalentCard>
          
          <TalentCard>
            <TalentIcon>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
                <path d="M12 5.5C13.11 5.5 14 6.39 14 7.5C14 8.61 13.11 9.5 12 9.5C10.89 9.5 10 8.61 10 7.5C10 6.39 10.89 5.5 12 5.5M5 8c.18 0 .35.03.5.05C6.41 5.88 9.07 4.5 12 4.5C14.93 4.5 17.59 5.88 18.5 8.05C18.65 8.03 18.82 8 19 8C20.11 8 21 8.9 21 10C21 11.1 20.1 12 19 12C18.96 12 18.91 12 18.87 11.97C18.09 15 15.28 17 12 17C8.72 17 5.91 15 5.13 11.97C5.09 12 5.04 12 5 12C3.89 12 3 11.1 3 10C3 8.9 3.9 8 5 8M12 14.5C14.14 14.5 15.5 13.37 15.5 11.5V11C15.5 9.13 13.86 8 11.5 8C9.5 8 8 9.13 8 11C8 12.87 9.5 14.5 12 14.5M9 18C8.45 18 8 18.45 8 19C8 19.55 8.45 20 9 20C9.55 20 10 19.55 10 19C10 18.45 9.55 18 9 18M15 18C14.45 18 14 18.45 14 19C14 19.55 14.45 20 15 20C15.55 20 16 19.55 16 19C16 18.45 15.55 18 15 18Z"/>
              </svg>
            </TalentIcon>
            <TalentContent>
              <h3>협력적 인재</h3>
              <p>다양한 배경과 관점을 존중하며 조직 내외부와 원활하게 소통하고, 시너지를 창출할 수 있는 협업 역량을 갖춘 인재</p>
            </TalentContent>
          </TalentCard>
        </TalentSection>
      </ContentSection>
      
      <ContentSection>
        <SectionTitle>채용 프로세스</SectionTitle>
        <p>(주)에스앤케이이엔지는 공정하고 투명한 채용 프로세스를 통해 우수한 인재를 선발하고 있습니다.</p>
        
        <RecruitmentProcess>
          <ProcessSteps>
            <ProcessStep>
              <StepNumber>1</StepNumber>
              <StepTitle>서류전형</StepTitle>
              <StepDescription>지원서 및 자기소개서 검토</StepDescription>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>2</StepNumber>
              <StepTitle>1차 면접</StepTitle>
              <StepDescription>실무진 면접 (직무역량 평가)</StepDescription>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>3</StepNumber>
              <StepTitle>2차 면접</StepTitle>
              <StepDescription>임원진 면접 (종합역량 평가)</StepDescription>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>4</StepNumber>
              <StepTitle>최종합격</StepTitle>
              <StepDescription>신체검사 및 입사</StepDescription>
            </ProcessStep>
          </ProcessSteps>
        </RecruitmentProcess>
      </ContentSection>
    </HRContainer>
  );
}

export default HumanResources;

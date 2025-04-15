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
        <p>SK E&C는 열정적이고 도전적인 인재, 창의적이고 혁신적인 사고를 가진 인재, 
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
        <p>SK E&C는 공정하고 투명한 채용 프로세스를 통해 우수한 인재를 선발하고 있습니다.</p>
        
        <RecruitmentProcess>
          <ProcessSteps>
            <ProcessStep>
              <StepNumber>1</StepNumber>
              <StepTitle>서류전형</StepTitle>
              <StepDescription>지원서 및 자기소개서 검토</StepDescription>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>2</StepNumber>
              <StepTitle>필기전형</StepTitle>
              <StepDescription>직무적성검사 및 기초능력평가</StepDescription>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>3</StepNumber>
              <StepTitle>1차 면접</StepTitle>
              <StepDescription>실무진 면접 (직무역량 평가)</StepDescription>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>4</StepNumber>
              <StepTitle>2차 면접</StepTitle>
              <StepDescription>임원진 면접 (종합역량 평가)</StepDescription>
            </ProcessStep>
            
            <ProcessStep>
              <StepNumber>5</StepNumber>
              <StepTitle>최종합격</StepTitle>
              <StepDescription>신체검사 및 입사</StepDescription>
            </ProcessStep>
          </ProcessSteps>
        </RecruitmentProcess>
        
        <ButtonContainer>
          <RecruitmentButton href="#">채용공고 보기</RecruitmentButton>
        </ButtonContainer>
      </ContentSection>
      
      <ContentSection>
        <SectionTitle>복리후생</SectionTitle>
        <p>SK E&C는 임직원들의 안정적인 생활과 자기계발을 지원하기 위해 다양한 복리후생 제도를 운영하고 있습니다.</p>
        
        <WelfareSection>
          <WelfareGrid>
            <WelfareCard>
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0066cc">
                  <path d="M20,18H4V8H20M20,6H4C2.89,6 2,6.89 2,8V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" />
                </svg>
                급여 및 보상
              </h3>
              <ul>
                <li>경쟁력 있는 기본급</li>
                <li>성과급 지급</li>
                <li>명절 상여금</li>
                <li>장기근속자 포상</li>
              </ul>
            </WelfareCard>
            
            <WelfareCard>
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0066cc">
                  <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V8H19V19M7,10H12V17H7V10M14,10H17V12H14V10M14,14H17V17H14V14Z" />
                </svg>
                교육 및 자기계발
              </h3>
              <ul>
                <li>직무교육 지원</li>
                <li>해외연수 기회</li>
                <li>자격증 취득 지원</li>
                <li>도서구입비 지원</li>
              </ul>
            </WelfareCard>
            
            <WelfareCard>
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0066cc">
                  <path d="M8,15A1,1 0 0,1 7,14V12H5A1,1 0 0,1 4,11V9A1,1 0 0,1 5,8H7V6A1,1 0 0,1 8,5H10A1,1 0 0,1 11,6V8H13A1,1 0 0,1 14,9V11A1,1 0 0,1 13,12H11V14A1,1 0 0,1 10,15H8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
                </svg>
                의료/건강
              </h3>
              <ul>
                <li>단체상해보험 가입</li>
                <li>종합건강검진</li>
                <li>의료비 지원</li>
                <li>헬스센터 운영</li>
              </ul>
            </WelfareCard>
            
            <WelfareCard>
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0066cc">
                  <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                </svg>
                주거/생활
              </h3>
              <ul>
                <li>사택 지원</li>
                <li>주택구입자금 대출</li>
                <li>통근버스 운행</li>
                <li>경조사 지원</li>
              </ul>
            </WelfareCard>
            
            <WelfareCard>
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0066cc">
                  <path d="M17.5 12C17.5 13.93 16.1 15.5 14.28 15.91L15 17H18V19H15V22H13V19H10V17H13L10 12.73C9.44 13.61 8.56 14.27 7.5 14.55V19.13L9.5 20.17L9.05 21.96L7.5 21.13L5.95 21.96L5.5 20.17L7.5 19.13V14.5C5.55 14 4 12.19 4 10C4 7.24 6.24 5 9 5C9.77 5 10.5 5.17 11.14 5.46L13.5 2L14.5 2.5L12.5 5.5C13.26 6.22 13.81 7.21 14 8.33L16.5 5L17.5 5.5L15.5 8.5C15.81 9.57 16 10.76 16 12H17.5M9 11C9.55 11 10 10.55 10 10C10 9.45 9.55 9 9 9C8.45 9 8 9.45 8 10C8 10.55 8.45 11 9 11Z" />
                </svg>
                문화/레저
              </h3>
              <ul>
                <li>휴양시설 지원</li>
                <li>동호회 활동 지원</li>
                <li>문화행사 지원</li>
                <li>리프레시 휴가</li>
              </ul>
            </WelfareCard>
            
            <WelfareCard>
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0066cc">
                  <path d="M12,5A3.5,3.5 0 0,0 8.5,8.5A3.5,3.5 0 0,0 12,12A3.5,3.5 0 0,0 15.5,8.5A3.5,3.5 0 0,0 12,5M12,7A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 12,10A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 12,7M5.5,8A2.5,2.5 0 0,0 3,10.5C3,11.44 3.53,12.25 4.29,12.68C4.65,12.88 5.06,13 5.5,13C5.94,13 6.35,12.88 6.71,12.68C7.08,12.47 7.39,12.17 7.62,11.81C6.89,10.86 6.5,9.7 6.5,8.5C6.5,8.41 6.5,8.31 6.5,8.22C6.2,8.08 5.86,8 5.5,8M18.5,8C18.14,8 17.8,8.08 17.5,8.22C17.5,8.31 17.5,8.41 17.5,8.5C17.5,9.7 17.11,10.86 16.38,11.81C16.5,12 16.63,12.15 16.78,12.3C16.94,12.45 17.1,12.58 17.29,12.68C17.65,12.88 18.06,13 18.5,13C18.94,13 19.35,12.88 19.71,12.68C20.47,12.25 21,11.44 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 5,15.17 5,17.5V19H19V17.5C19,15.17 14.34,14 12,14M4.71,14.55C2.78,14.78 0,15.76 0,17.5V19H3V17.07C3,16.06 3.69,15.22 4.71,14.55M19.29,14.55C20.31,15.22 21,16.06 21,17.07V19H24V17.5C24,15.76 21.22,14.78 19.29,14.55M12,16C13.53,16 15.24,16.5 16.23,17H7.77C8.76,16.5 10.47,16 12,16Z" />
                </svg>
                가족친화
              </h3>
              <ul>
                <li>자녀 학자금 지원</li>
                <li>가족 건강검진</li>
                <li>육아휴직 제도</li>
                <li>가족초청 행사</li>
              </ul>
            </WelfareCard>
          </WelfareGrid>
        </WelfareSection>
      </ContentSection>
    </HRContainer>
  );
}

export default HumanResources;

import React from 'react';
import styled from 'styled-components';

const CenterContainer = styled.div`
  width: 100%;
  padding-top: 70px; /* To account for fixed header */
`;

const PageBanner = styled.div`
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('/images/center-banner.jpg') no-repeat center;
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

const NewsSection = styled.div`
  margin-top: 2rem;
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NewsItem = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NewsImage = styled.div`
  flex: 0 0 300px;
  background-size: cover;
  background-position: center;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const NewsContent = styled.div`
  flex: 1;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
`;

const NewsDate = styled.div`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const NewsTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  
  a {
    color: #333;
    text-decoration: none;
    
    &:hover {
      color: #0066cc;
    }
  }
`;

const NewsSummary = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const NewsLink = styled.a`
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
  margin-top: auto;
  
  &:hover {
    text-decoration: underline;
  }
`;

const MediaSection = styled.div`
  margin-top: 2rem;
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const MediaCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const MediaImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    color: white;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1;
  }
  
  ${MediaCard}:hover &::after,
  ${MediaCard}:hover & svg {
    opacity: 1;
  }
`;

const MediaContent = styled.div`
  padding: 1.5rem;
`;

const MediaTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  
  a {
    color: #333;
    text-decoration: none;
    
    &:hover {
      color: #0066cc;
    }
  }
`;

const MediaDate = styled.div`
  color: #888;
  font-size: 0.9rem;
`;

const TabsContainer = styled.div`
  margin-top: 2rem;
`;

const TabsHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.active ? '#0066cc' : '#666'};
  border-bottom: ${props => props.active ? '2px solid #0066cc' : 'none'};
  
  &:hover {
    color: #0066cc;
  }
`;

const TabContent = styled.div`
  padding: 2rem 0;
  display: ${props => props.active ? 'block' : 'none'};
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
`;

const FAQQuestion = styled.div`
  padding: 1.5rem;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &::after {
    content: '+';
    font-size: 1.5rem;
  }
  
  &.active {
    color: #0066cc;
    
    &::after {
      content: '-';
    }
  }
`;

const FAQAnswer = styled.div`
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s, padding 0.3s;
  
  &.active {
    padding: 1.5rem;
    max-height: 500px;
    border-top: 1px solid #eee;
  }
  
  p {
    margin: 0;
    line-height: 1.6;
    color: #666;
  }
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    border-color: #0066cc;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    border-color: #0066cc;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  padding: 1rem;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0055aa;
  }
`;

function Center() {
  // For a real implementation, you would use React's useState to track the active tab
  // and implement handlers for the FAQ accordion
  
  return (
    <CenterContainer>
      <PageBanner>
        <BannerTitle>홍보센터</BannerTitle>
      </PageBanner>
      
      <ContentSection>
        <SectionTitle>뉴스</SectionTitle>
        <NewsSection>
          <NewsList>
            <NewsItem>
              <NewsImage style={{ backgroundImage: `url('/images/news1.jpg')` }} />
              <NewsContent>
                <NewsDate>2025-04-01</NewsDate>
                <NewsTitle>
                  <a href="#">SK E&C, 제로에너지 건축물 기술 개발 완료</a>
                </NewsTitle>
                <NewsSummary>
                  SK E&C가 개발한 신기술이 국내 건설 업계 최초로 제로에너지 건축물 인증을 획득했습니다. 
                  이 기술은 태양광 에너지와 지열을 활용한 통합 에너지 관리 시스템을 기반으로...
                </NewsSummary>
                <NewsLink href="#">자세히 보기</NewsLink>
              </NewsContent>
            </NewsItem>
            
            <NewsItem>
              <NewsImage style={{ backgroundImage: `url('/images/news2.jpg')` }} />
              <NewsContent>
                <NewsDate>2025-03-15</NewsDate>
                <NewsTitle>
                  <a href="#">SK E&C, 중동 대형 플랜트 수주 성공</a>
                </NewsTitle>
                <NewsSummary>
                  SK E&C가 사우디아라비아에서 대규모 석유화학 플랜트 프로젝트를 수주했습니다. 
                  총 계약 규모는 20억 달러로, 당사의 기술력과 사업 수행 능력을 인정받은 결과입니다...
                </NewsSummary>
                <NewsLink href="#">자세히 보기</NewsLink>
              </NewsContent>
            </NewsItem>
            
            <NewsItem>
              <NewsImage style={{ backgroundImage: `url('/images/news3.jpg')` }} />
              <NewsContent>
                <NewsDate>2025-02-20</NewsDate>
                <NewsTitle>
                  <a href="#">SK E&C, ESG 경영 선포 및 중장기 로드맵 발표</a>
                </NewsTitle>
                <NewsSummary>
                  SK E&C가 지속가능한 성장을 위한 ESG 경영 전략을 선포했습니다. 
                  2030년까지 탄소중립 달성을 목표로 친환경 기술 개발과 사회적 가치 창출에 앞장설 계획입니다...
                </NewsSummary>
                <NewsLink href="#">자세히 보기</NewsLink>
              </NewsContent>
            </NewsItem>
          </NewsList>
        </NewsSection>
      </ContentSection>
      
      <ContentSection>
        <SectionTitle>미디어</SectionTitle>
        <MediaSection>
          <MediaGrid>
            <MediaCard>
              <MediaImage style={{ backgroundImage: `url('/images/media1.jpg')` }}>
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </MediaImage>
              <MediaContent>
                <MediaTitle>
                  <a href="#">SK E&C 친환경 기술 소개 영상</a>
                </MediaTitle>
                <MediaDate>2025-03-25</MediaDate>
              </MediaContent>
            </MediaCard>
            
            <MediaCard>
              <MediaImage style={{ backgroundImage: `url('/images/media2.jpg')` }}>
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </MediaImage>
              <MediaContent>
                <MediaTitle>
                  <a href="#">대규모 해외 프로젝트 현장 탐방</a>
                </MediaTitle>
                <MediaDate>2025-02-15</MediaDate>
              </MediaContent>
            </MediaCard>
            
            <MediaCard>
              <MediaImage style={{ backgroundImage: `url('/images/media3.jpg')` }}>
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </MediaImage>
              <MediaContent>
                <MediaTitle>
                  <a href="#">신입사원 채용 설명회 현장</a>
                </MediaTitle>
                <MediaDate>2025-01-30</MediaDate>
              </MediaContent>
            </MediaCard>
            
            <MediaCard>
              <MediaImage style={{ backgroundImage: `url('/images/media4.jpg')` }}>
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </MediaImage>
              <MediaContent>
                <MediaTitle>
                  <a href="#">CEO 인터뷰: 미래 건설산업의 방향성</a>
                </MediaTitle>
                <MediaDate>2025-01-10</MediaDate>
              </MediaContent>
            </MediaCard>
          </MediaGrid>
        </MediaSection>
      </ContentSection>
      
      <ContentSection>
        <SectionTitle>고객센터</SectionTitle>
        <TabsContainer>
          <TabsHeader>
            <Tab active>FAQ</Tab>
            <Tab>문의하기</Tab>
          </TabsHeader>
          
          <TabContent active>
            <FAQItem>
              <FAQQuestion className="active">SK E&C에 취업하려면 어떤 자격요건이 필요한가요?</FAQQuestion>
              <FAQAnswer className="active">
                <p>
                  SK E&C는 전공에 제한을 두지 않고 다양한 인재를 선발하고 있습니다. 다만, 직무별로 요구되는 
                  역량과 자격요건이 다르므로 채용공고를 확인하시길 바랍니다. 일반적으로 토목, 건축, 기계, 
                  전기/전자, 화공 등의 공학 분야 전공자를 선호하며, 직무에 따라 특정 자격증이나 경력이 
                  요구될 수 있습니다.
                </p>
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>SK E&C의 주요 해외 사업 국가는 어디인가요?</FAQQuestion>
              <FAQAnswer>
                <p>
                  SK E&C는 중동(사우디아라비아, UAE, 쿠웨이트 등), 동남아시아(베트남, 싱가포르, 말레이시아 등), 
                  미주, 유럽 등 전 세계 다양한 국가에서 사업을 진행하고 있습니다. 특히 중동 지역에서는 
                  대규모 플랜트 및 인프라 건설 프로젝트를 성공적으로 수행하고 있으며, 동남아시아에서는
                  건축, 토목 분야에서 다양한 프로젝트를 진행 중입니다.
                </p>
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>SK E&C의 친환경 에너지 사업은 어떤 것이 있나요?</FAQQuestion>
              <FAQAnswer>
                <p>
                  SK E&C는 지속가능한 미래를 위해 다양한 친환경 에너지 사업을 추진하고 있습니다. 
                  주요 사업으로는 태양광 발전, 풍력 발전, 수소 인프라 구축, 에너지 저장 시스템(ESS) 등이 
                  있습니다. 특히 최근에는 그린 수소 생산 및 유통 인프라 구축에 집중하고 있으며, 
                  탄소중립을 위한 CCUS(탄소 포집, 활용 및 저장) 기술 개발에도 투자하고 있습니다.
                </p>
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>SK E&C에 협력업체로 등록하려면 어떻게 해야 하나요?</FAQQuestion>
              <FAQAnswer>
                <p>
                  SK E&C 협력업체 등록을 원하시면 공식 홈페이지의 '협력사 포털'을 통해 신청할 수 있습니다. 
                  업체 기본 정보와 함께 관련 서류를 제출하시면 내부 심사를 거쳐 등록 여부가 결정됩니다. 
                  등록 후에는 공사 및 자재 입찰에 참여할 수 있는 자격이 부여됩니다. 
                  자세한 사항은 협력사 지원팀(02-1234-5678)으로 문의해 주시기 바랍니다.
                </p>
              </FAQAnswer>
            </FAQItem>
          </TabContent>
          
          <TabContent>
            <ContactForm>
              <FormGroup>
                <Label>이름</Label>
                <Input type="text" placeholder="이름을 입력하세요" />
              </FormGroup>
              
              <FormGroup>
                <Label>이메일</Label>
                <Input type="email" placeholder="이메일을 입력하세요" />
              </FormGroup>
              
              <FormGroup>
                <Label>전화번호</Label>
                <Input type="tel" placeholder="전화번호를 입력하세요" />
              </FormGroup>
              
              <FormGroup>
                <Label>문의 유형</Label>
                <Input as="select">
                  <option value="">문의 유형을 선택하세요</option>
                  <option value="general">일반 문의</option>
                  <option value="business">사업 제휴</option>
                  <option value="recruitment">채용 문의</option>
                  <option value="media">언론/취재 문의</option>
                  <option value="other">기타</option>
                </Input>
              </FormGroup>
              
              <FormGroup className="full-width">
                <Label>제목</Label>
                <Input type="text" placeholder="제목을 입력하세요" />
              </FormGroup>
              
              <FormGroup className="full-width">
                <Label>문의 내용</Label>
                <TextArea placeholder="문의 내용을 상세히 기재해 주세요" />
              </FormGroup>
              
              <SubmitButton type="submit">문의하기</SubmitButton>
            </ContactForm>
          </TabContent>
        </TabsContainer>
      </ContentSection>
    </CenterContainer>
  );
}

export default Center;

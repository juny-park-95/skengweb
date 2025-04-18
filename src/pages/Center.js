import React, { useState } from 'react';
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

const SupportSection = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SupportCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const SupportIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #0066cc;
`;

const SupportTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #333;
`;

const SupportText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SupportLink = styled.a`
  display: inline-block;
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
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

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
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

const ContactInfo = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InfoIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #0066cc;
`;

const InfoTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const InfoText = styled.p`
  color: #666;
  line-height: 1.6;
`;

function Center() {
  const [activeTab, setActiveTab] = useState('faq');
  const [activeFaq, setActiveFaq] = useState(0);
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  return (
    <CenterContainer>
      <PageBanner>
        <BannerTitle>고객센터</BannerTitle>
      </PageBanner>
      
      <ContentSection>
        <SectionTitle>고객지원</SectionTitle>
        <SupportSection>
          <SupportGrid>
            <SupportCard>
              <SupportIcon>📞</SupportIcon>
              <SupportTitle>전화 문의</SupportTitle>
              <SupportText>
                기술 지원 및 제품 문의는 전화로 빠르게 도움을 받으실 수 있습니다.
                평일 09:00-18:00 운영
              </SupportText>
              <SupportLink href="tel:07082700665">070-8270-0665</SupportLink>
            </SupportCard>
            
            <SupportCard>
              <SupportIcon>📧</SupportIcon>
              <SupportTitle>이메일 문의</SupportTitle>
              <SupportText>
                상세한 문의사항은 이메일로 보내주시면 
                영업일 기준 24시간 이내에 답변드립니다.
              </SupportText>
              <SupportLink href="mailto:sk5559611@hanmail.net">sk5559611@hanmail.net</SupportLink>
            </SupportCard>
            
            <SupportCard>
              <SupportIcon>🔧</SupportIcon>
              <SupportTitle>기술 지원</SupportTitle>
              <SupportText>
                제품 설치 및 유지보수 관련 기술 지원이 필요하신 경우
                기술지원팀으로 문의해주세요.
              </SupportText>
              <SupportLink href="#technical-support">기술지원 요청하기</SupportLink>
            </SupportCard>
          </SupportGrid>
        </SupportSection>
      </ContentSection>
      
      <ContentSection>
        <SectionTitle>자주 묻는 질문</SectionTitle>
        <TabsContainer>
          <TabsHeader>
            <Tab 
              active={activeTab === 'faq'} 
              onClick={() => handleTabClick('faq')}
            >
              FAQ
            </Tab>
            <Tab 
              active={activeTab === 'contact'} 
              onClick={() => handleTabClick('contact')}
            >
              문의하기
            </Tab>
          </TabsHeader>
          
          <TabContent active={activeTab === 'faq'}>
            <FAQItem>
              <FAQQuestion 
                className={activeFaq === 0 ? 'active' : ''} 
                onClick={() => toggleFaq(0)}
              >
                제품 구매 절차는 어떻게 되나요?
              </FAQQuestion>
              <FAQAnswer className={activeFaq === 0 ? 'active' : ''}>
                <p>
                  제품 구매를 원하시면 전화(070-8270-0665) 또는 이메일(sk5559611@hanmail.net)로 문의해 주시기 바랍니다.
                  담당 영업 담당자가 제품 사양, 가격, 납기 등에 대해 상세히 안내해 드립니다.
                  대량 구매 및 지속적인 거래를 원하시는 기업의 경우 별도의 계약을 통해 진행됩니다.
                </p>
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion 
                className={activeFaq === 2 ? 'active' : ''} 
                onClick={() => toggleFaq(2)}
              >
                기술 교육 및 제품 사용 교육을 받을 수 있나요?
              </FAQQuestion>
              <FAQAnswer className={activeFaq === 2 ? 'active' : ''}>
                <p>
                  네, (주)에스앤케이이엔지는 제품 구매 고객을 대상으로 제품 사용법 및 유지보수 교육을 제공하고 있습니다.
                  교육은 온라인 또는 오프라인으로 진행되며, 고객사 요청에 따라 방문 교육도 가능합니다.
                  교육 일정 및 비용은 담당 영업사원 또는 고객센터를 통해 문의해 주시기 바랍니다.
                </p>
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion 
                className={activeFaq === 3 ? 'active' : ''} 
                onClick={() => toggleFaq(3)}
              >
                (주)에스앤케이이엔지에 협력업체로 등록하려면 어떻게 해야 하나요?
              </FAQQuestion>
              <FAQAnswer className={activeFaq === 3 ? 'active' : ''}>
                <p>
                  (주)에스앤케이이엔지 협력업체 등록을 원하시면 이메일(sk5559611@hanmail.net)로 협력업체 등록 신청서와 
                  사업자등록증, 회사소개서를 제출해 주시기 바랍니다. 내부 심사를 거쳐 등록 여부가 결정되며,
                  약 2주 내로 결과를 알려드립니다. 자세한 절차는 고객센터로 문의해 주시기 바랍니다.
                </p>
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion 
                className={activeFaq === 4 ? 'active' : ''} 
                onClick={() => toggleFaq(4)}
              >
                제품 배송은 어떻게 진행되나요?
              </FAQQuestion>
              <FAQAnswer className={activeFaq === 4 ? 'active' : ''}>
                <p>
                  (주)에스앤케이이엔지의 제품은 주문 확인 및 결제 완료 후 영업일 기준 3-5일 내에 출고됩니다.
                  대형 제품 및 특수 제품의 경우 별도의 배송 일정이 적용될 수 있습니다.
                  배송은 전문 물류업체를 통해 진행되며, 제품 특성에 따라 설치 서비스가 함께 제공될 수 있습니다.
                  배송 관련 문의는 고객센터로 연락해 주시기 바랍니다.
                </p>
              </FAQAnswer>
            </FAQItem>
          </TabContent>
          
          <TabContent active={activeTab === 'contact'}>
            <ContactForm>
              <FormGroup>
                <Label>이름 *</Label>
                <Input type="text" placeholder="이름을 입력하세요" required />
              </FormGroup>
              
              <FormGroup>
                <Label>이메일 *</Label>
                <Input type="email" placeholder="이메일을 입력하세요" required />
              </FormGroup>
              
              <FormGroup>
                <Label>전화번호 *</Label>
                <Input type="tel" placeholder="전화번호를 입력하세요" required />
              </FormGroup>
              
              <FormGroup>
                <Label>회사명</Label>
                <Input type="text" placeholder="회사명을 입력하세요" />
              </FormGroup>
              
              <FormGroup>
                <Label>문의 유형 *</Label>
                <Select required>
                  <option value="">문의 유형을 선택하세요</option>
                  <option value="product">제품 문의</option>
                  <option value="technical">기술 지원</option>
                  <option value="warranty">보증/A/S</option>
                  <option value="partnership">협력업체 등록</option>
                  <option value="order">주문/배송</option>
                  <option value="other">기타</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>제품 모델</Label>
                <Input type="text" placeholder="문의하시는 제품 모델명" />
              </FormGroup>
              
              <FormGroup className="full-width">
                <Label>제목 *</Label>
                <Input type="text" placeholder="제목을 입력하세요" required />
              </FormGroup>
              
              <FormGroup className="full-width">
                <Label>문의 내용 *</Label>
                <TextArea placeholder="문의 내용을 상세히 기재해 주세요" required />
              </FormGroup>
              
              <FormGroup className="full-width">
                <Label>첨부파일</Label>
                <Input type="file" />
                <small style={{ marginTop: '0.5rem', color: '#888' }}>최대 10MB (지원 형식: jpg, png, pdf, doc, docx)</small>
              </FormGroup>
              
              <SubmitButton type="submit">문의하기</SubmitButton>
            </ContactForm>
            
            <ContactInfo>
              <InfoGrid>
                <InfoItem>
                  <InfoIcon>📍</InfoIcon>
                  <InfoTitle>주소</InfoTitle>
                  <InfoText>경기 안산시 단원구 신촌5길 28</InfoText>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>📞</InfoIcon>
                  <InfoTitle>전화</InfoTitle>
                  <InfoText>070-8270-0665</InfoText>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>📧</InfoIcon>
                  <InfoTitle>이메일</InfoTitle>
                  <InfoText>sk5559611@hanmail.net</InfoText>
                </InfoItem>
              </InfoGrid>
            </ContactInfo>
          </TabContent>
        </TabsContainer>
      </ContentSection>
    </CenterContainer>
  );
}

export default Center;

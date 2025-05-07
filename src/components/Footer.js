import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFax } from 'react-icons/fa';

/*
  (주)에스앤케이이엔지 - Footer 컴포넌트
  -------------------------------------------------
  ▷ 각 페이지(About, Business, Projects, HumanResources, Center)와 일관된 디자인
  ▷ 회사 정보, 네비게이션 메뉴, 연락처 정보 포함
  ▷ 반응형 디자인 적용
*/

// --------------------------- Styled Components --------------------------- //
const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 4rem 5% 3rem;
  font-family: 'Noto Sans KR', sans-serif;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-right: 2rem;
  
  &:last-child {
    margin-right: 0;
  }
  
  @media (max-width: 992px) {
    min-width: 180px;
    margin-right: 1.5rem;
  }
  
  @media (max-width: 768px) {
    min-width: unset;
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const CompanyInfoSection = styled(FooterSection)`
  flex: 1.5;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  position: relative;
  padding-bottom: 10px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #0066cc;
  }
`;

const FooterLink = styled.a`
  display: block;
  color: #cccccc;
  margin-bottom: 0.7rem;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 15px;
  
  &:hover {
    color: #ffffff;
    transform: translateX(5px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #cccccc;
  
  svg {
    margin-right: 10px;
    min-width: 16px;
    color: #0066cc;
  }
  
  span {
    font-size: 15px;
    word-break: keep-all;
    line-height: 1.4;
  }
  
  @media (max-width: 480px) {
    align-items: flex-start;
    
    svg {
      margin-top: 3px;
    }
  }
`;

const ContactLink = styled.a`
  color: #cccccc;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #ffffff;
  }
`;

const CompanyDescription = styled.p`
  color: #aaaaaa;
  margin-top: 1.5rem;
  line-height: 1.6;
  font-size: 14px;
  max-width: 400px;
`;

const FooterBottom = styled.div`
  max-width: 1400px;
  margin: 3rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid #333333;
  text-align: center;
  font-size: 14px;
  color: #999999;
  
  p {
    margin-bottom: 0.5rem;
  }
`;


function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <CompanyInfoSection>
          <FooterTitle>(주)에스앤케이이엔지</FooterTitle>
          <ContactItem>
            <FaMapMarkerAlt />
            <span>경기도 안산시 단원구 신촌5길 28</span>
          </ContactItem>
          <ContactItem>
            <FaPhone />
            <ContactLink href="tel:07082700665">
              <span>TEL: 070-8270-0665</span>
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <FaFax />
            <span>FAX: 031-421-0551</span>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <ContactLink href="mailto:info@skeng.co.kr">
              <span>info@skeng.co.kr</span>
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <FaClock />
            <span>평일 09:00 - 18:00 (점심시간 12:00 - 13:00)</span>
          </ContactItem>
          <CompanyDescription>
            (주)에스앤케이이엔지는 고품질 자동화 시스템 및 계측기기 솔루션 공급업체로서, 
            국내외 주요 기업들에게 최고의 제품과 서비스를 제공하고 있습니다.
          </CompanyDescription>
        </CompanyInfoSection>
        
        <FooterSection>
          <FooterTitle>기업소개</FooterTitle>
          <FooterLink href="/about">회사소개</FooterLink>
          <FooterLink href="/about#history">연혁</FooterLink>
          <FooterLink href="/about#awards">수상내역</FooterLink>
          <FooterLink href="/about#certification">품질인증</FooterLink>
          <FooterLink href="/about#location">오시는 길</FooterLink>
          <FooterLink href="/about#transport">교통안내</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>사업영역</FooterTitle>
          <FooterLink href="/business">사업영역</FooterLink>
          <FooterLink href="/business#partners">주요 파트너사</FooterLink>
          <FooterLink href="/business#delivery">파트너사 납품 현황</FooterLink>
          <FooterLink href="/business#power-equipment">주요 전기 기계 및 장비</FooterLink>
          <FooterLink href="/business#control-systems">제어 시스템 및 전자 부품</FooterLink>
          <FooterLink href="/business#instruments">계측기기 및 시험 장비</FooterLink>
          <FooterLink href="/business#materials">관련 기자재 및 부품</FooterLink>
          <FooterLink href="/projects">주요 납품 실적</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>인재채용</FooterTitle>
          <FooterLink href="/hr#talent">인재상</FooterLink>
          <FooterLink href="/hr#recruitment">채용 프로세스</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>고객센터</FooterTitle>
          <FooterLink href="/center#support">고객지원</FooterLink>
          <FooterLink href="/center#faq">자주 묻는 질문</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} (주)에스앤케이이엔지. All Rights Reserved.</p>
        <p>사업자등록번호: 134-87-13658 | 대표: 최재민 | 개인정보관리책임자: 박용수</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

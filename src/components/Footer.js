import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 3rem 5%;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-right: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const FooterLink = styled.a`
  display: block;
  color: #cccccc;
  margin-bottom: 0.5rem;
  text-decoration: none;
  
  &:hover {
    color: #ffffff;
  }
`;

const FooterBottom = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #333333;
  text-align: center;
  font-size: 14px;
  color: #999999;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>(주)에스앤케이이엔지</FooterTitle>
          <FooterLink href="/about">회사소개</FooterLink>
          <FooterLink href="/about#history">연혁</FooterLink>
          <FooterLink href="/location">오시는 길</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>사업영역</FooterTitle>
          <FooterLink href="/business#power-equipment">주요 전기 기계 및 장비</FooterLink>
          <FooterLink href="/business#control-systems">제어 시스템 및 전자 부품</FooterLink>
          <FooterLink href="/business#instruments">계측기기 및 시험 장비</FooterLink>
          <FooterLink href="/business#materials">관련 기자재 및 부품</FooterLink>
          <FooterLink href="/projects">주요 납품 실적</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>인재채용</FooterTitle>
          <FooterLink href="/hr#talent">인재상</FooterLink>
          <FooterLink href="/hr#recruitment">채용정보</FooterLink>
          <FooterLink href="/hr#welfare">복리후생</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>고객센터</FooterTitle>
          <FooterLink href="/center#support">고객지원</FooterLink>
          <FooterLink href="/center#faq">자주 묻는 질문</FooterLink>
          <FooterLink href="/center#contact">문의하기</FooterLink>
          <FooterLink href="tel:07082700665">070-8270-0665</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} (주)에스앤케이이엔지. All Rights Reserved.</p>
        <p>경기 안산시 단원구 신촌5길 28</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

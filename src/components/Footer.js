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
          <FooterTitle>SK E&C</FooterTitle>
          <FooterLink href="#">회사소개</FooterLink>
          <FooterLink href="#">경영이념</FooterLink>
          <FooterLink href="#">연혁</FooterLink>
          <FooterLink href="#">오시는 길</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>사업영역</FooterTitle>
          <FooterLink href="#">인프라</FooterLink>
          <FooterLink href="#">건축/주택</FooterLink>
          <FooterLink href="#">플랜트</FooterLink>
          <FooterLink href="#">친환경 에너지</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>인재채용</FooterTitle>
          <FooterLink href="#">인재상</FooterLink>
          <FooterLink href="#">채용정보</FooterLink>
          <FooterLink href="#">복리후생</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>고객센터</FooterTitle>
          <FooterLink href="#">공지사항</FooterLink>
          <FooterLink href="#">뉴스/보도자료</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">문의하기</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>© {new Date().getFullYear()} SK E&C. All Rights Reserved.</p>
        <p>서울특별시 종로구 인사동길 00 SK빌딩</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

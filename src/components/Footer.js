import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFax } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.palette.neutral[900]};
  color: ${({ theme }) => theme.colors.palette.neutral[200]};
  padding: ${({ theme }) => `${theme.spacing[16]} 5% ${theme.spacing[8]}`};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[10]};
  max-width: ${({ theme }) => theme.layout.containerWide};
  margin: 0 auto;

  ${({ theme }) => theme.media.lgDown} {
    grid-template-columns: 1.6fr 1fr 1fr;
  }

  ${({ theme }) => theme.media.mdDown} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.textInverse};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  padding-bottom: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 28px;
    height: 2px;
    background: ${({ theme }) => theme.colors.brand};
    border-radius: 2px;
  }
`;

const FooterLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.palette.neutral[400]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  transition: color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.textInverse};
    transform: translateX(4px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.palette.neutral[300]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing[3]};

  svg {
    flex-shrink: 0;
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.brand};
  }

  a {
    color: inherit;
    transition: color ${({ theme }) => theme.transitions.fast};
    &:hover { color: ${({ theme }) => theme.colors.textInverse}; }
  }
`;

const CompanyDescription = styled.p`
  color: ${({ theme }) => theme.colors.palette.neutral[400]};
  margin-top: ${({ theme }) => theme.spacing[5]};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  max-width: 420px;
`;

const FooterBottom = styled.div`
  max-width: ${({ theme }) => theme.layout.containerWide};
  margin: ${({ theme }) => theme.spacing[12]} auto 0;
  padding-top: ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.palette.neutral[800]};
  text-align: center;
  color: ${({ theme }) => theme.colors.palette.neutral[500]};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};

  p { margin: 0 0 ${({ theme }) => theme.spacing[1]}; }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>(주)에스앤케이이엔지</FooterTitle>
          <ContactItem><FaMapMarkerAlt /><span>경기도 안산시 단원구 신촌5길 28</span></ContactItem>
          <ContactItem><FaPhone /><a href="tel:07082700665">TEL: 070-8270-0665</a></ContactItem>
          <ContactItem><FaFax /><span>FAX: 031-421-0551</span></ContactItem>
          <ContactItem><FaEnvelope /><a href="mailto:sk5559611@hanmail.net">sk5559611@hanmail.net</a></ContactItem>
          <ContactItem><FaClock /><span>평일 09:00 – 18:00 (점심 12:00 – 13:00)</span></ContactItem>
          <CompanyDescription>
            (주)에스앤케이이엔지는 고품질 자동화 시스템 및 계측기기 솔루션 공급업체로서,
            국내외 주요 기업들에게 최고의 제품과 서비스를 제공합니다.
          </CompanyDescription>
        </FooterSection>

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
          <FooterLink href="/business#delivery">납품 현황</FooterLink>
          <FooterLink href="/business#power-equipment">주요 전기 기계·장비</FooterLink>
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

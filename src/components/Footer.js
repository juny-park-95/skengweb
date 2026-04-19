import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFax } from 'react-icons/fa';
import { useI18n } from '../i18n';

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
  const { t } = useI18n();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>{t.meta.brand}</FooterTitle>
          <ContactItem><FaMapMarkerAlt /><span>{f.address}</span></ContactItem>
          <ContactItem><FaPhone /><a href="tel:07082700665">{f.tel}</a></ContactItem>
          <ContactItem><FaFax /><span>{f.fax}</span></ContactItem>
          <ContactItem><FaEnvelope /><a href="mailto:sk5559611@hanmail.net">{f.email}</a></ContactItem>
          <ContactItem><FaClock /><span>{f.hours}</span></ContactItem>
          <CompanyDescription>{f.description}</CompanyDescription>
        </FooterSection>

        <FooterSection>
          <FooterTitle>{f.about}</FooterTitle>
          <FooterLink href="/about">{f.aboutLinks.company}</FooterLink>
          <FooterLink href="/about#history">{f.aboutLinks.history}</FooterLink>
          <FooterLink href="/about#awards">{f.aboutLinks.awards}</FooterLink>
          <FooterLink href="/about#certification">{f.aboutLinks.certification}</FooterLink>
          <FooterLink href="/about#location">{f.aboutLinks.location}</FooterLink>
          <FooterLink href="/about#transport">{f.aboutLinks.transport}</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>{f.business}</FooterTitle>
          <FooterLink href="/business">{f.businessLinks.overview}</FooterLink>
          <FooterLink href="/business#partners">{f.businessLinks.partners}</FooterLink>
          <FooterLink href="/business#delivery">{f.businessLinks.delivery}</FooterLink>
          <FooterLink href="/business#power-equipment">{f.businessLinks.power}</FooterLink>
          <FooterLink href="/business#control-systems">{f.businessLinks.control}</FooterLink>
          <FooterLink href="/business#instruments">{f.businessLinks.instruments}</FooterLink>
          <FooterLink href="/business#materials">{f.businessLinks.materials}</FooterLink>
          <FooterLink href="/projects">{f.businessLinks.projects}</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>{f.hr}</FooterTitle>
          <FooterLink href="/hr#talent">{f.hrLinks.talent}</FooterLink>
          <FooterLink href="/hr#recruitment">{f.hrLinks.process}</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>{f.center}</FooterTitle>
          <FooterLink href="/center#support">{f.centerLinks.support}</FooterLink>
          <FooterLink href="/center#faq">{f.centerLinks.faq}</FooterLink>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>{f.copyright(year)}</p>
        <p>{f.business_info}</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

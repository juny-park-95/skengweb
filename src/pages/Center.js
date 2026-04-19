import React, { useState } from 'react';
import styled from 'styled-components';
import {
  PageBanner,
  Section,
  SectionTitle,
  Container,
  Grid,
  Card,
  CardBody,
  Button,
} from '../components/common';
import { useI18n } from '../i18n';

const SUPPORT_ICONS = ['📞', '📧', '🔧'];
const SUPPORT_HREFS = ['tel:07082700665', 'mailto:sk5559611@hanmail.net', '#contact'];

const SupportCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[8]};
  text-align: center;
  align-items: center;
`;

const SupportIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.brandSoft};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SupportText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: ${({ theme }) => theme.spacing[2]} 0 ${({ theme }) => theme.spacing[5]};
`;

const SupportLink = styled.a`
  color: ${({ theme }) => theme.colors.brand};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  &:hover { text-decoration: underline; }
`;

const TabsHeader = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]};
  background: ${({ theme }) => theme.colors.bgMuted};
  border-radius: ${({ theme }) => theme.radii.full};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const Tab = styled.button`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[6]}`};
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme, $active }) => ($active ? theme.colors.surface : 'transparent')};
  color: ${({ theme, $active }) => ($active ? theme.colors.brand : theme.colors.textMuted)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  box-shadow: ${({ theme, $active }) => ($active ? theme.shadows.sm : 'none')};
  transition: all ${({ theme }) => theme.transitions.fast};
`;

const FAQItem = styled.details`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing[3]};

  &[open] summary { color: ${({ theme }) => theme.colors.brand}; }
  &[open] summary::after { transform: rotate(45deg); }
`;

const FAQQuestion = styled.summary`
  list-style: none;
  padding: ${({ theme }) => theme.spacing[5]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  &::-webkit-details-marker { display: none; }

  &::after {
    content: '+';
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    line-height: 1;
    color: ${({ theme }) => theme.colors.brand};
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
`;

const FAQAnswer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[5]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};

  p { margin: ${({ theme }) => theme.spacing[4]} 0 0; }
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[5]};
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  ${({ theme }) => theme.media.mdDown} {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing[6]};
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};

  &.full-width { grid-column: 1 / -1; }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
`;

const fieldStyles = ({ theme }) => `
  padding: 0.75rem 0.9rem;
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  color: ${theme.colors.text};
  background: ${theme.colors.surface};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &::placeholder {
    color: ${theme.colors.textSubtle};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.brand};
    box-shadow: ${theme.shadows.focus};
  }
`;

const Input = styled.input`${fieldStyles}`;
const TextArea = styled.textarea`${fieldStyles} min-height: 160px; resize: vertical;`;
const Select = styled.select`${fieldStyles}`;

const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[10]};
  padding: ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  ${({ theme }) => theme.media.mdDown} {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing[2]};

  .icon {
    font-size: 2rem;
    width: 52px;
    height: 52px;
    border-radius: ${({ theme }) => theme.radii.md};
    background: ${({ theme }) => theme.colors.brandSoft};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    margin: 0;
  }
`;

function Center() {
  const { t } = useI18n();
  const c = t.center;
  const [activeTab, setActiveTab] = useState('faq');

  return (
    <main id="main-content">
      <PageBanner
        eyebrow={c.banner.eyebrow}
        title={c.banner.title}
        description={c.banner.description}
        image="/images/center-banner.jpg"
      />

      <Section id="support">
        <Container>
          <SectionTitle eyebrow={c.supportEyebrow} title={c.supportTitle} />
          <Grid $min="280px">
            {c.support.map((item, idx) => (
              <SupportCard key={item.title}>
                <CardBody style={{ alignItems: 'center' }}>
                  <SupportIcon role="img" aria-label={item.title}>{SUPPORT_ICONS[idx]}</SupportIcon>
                  <h3>{item.title}</h3>
                  <SupportText>{item.text}</SupportText>
                  <SupportLink href={SUPPORT_HREFS[idx]}>{item.label}</SupportLink>
                </CardBody>
              </SupportCard>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="faq" $variant="muted">
        <Container>
          <SectionTitle eyebrow={c.helpEyebrow} title={c.helpTitle} />
          <div style={{ textAlign: 'center' }}>
            <TabsHeader role="tablist">
              <Tab role="tab" $active={activeTab === 'faq'}     onClick={() => setActiveTab('faq')}>{c.tabs.faq}</Tab>
              <Tab role="tab" $active={activeTab === 'contact'} onClick={() => setActiveTab('contact')}>{c.tabs.contact}</Tab>
            </TabsHeader>
          </div>

          {activeTab === 'faq' && (
            <div>
              {c.faqs.map((item) => (
                <FAQItem key={item.q}>
                  <FAQQuestion>{item.q}</FAQQuestion>
                  <FAQAnswer>
                    <p>{item.a}</p>
                  </FAQAnswer>
                </FAQItem>
              ))}
            </div>
          )}

          {activeTab === 'contact' && (
            <div id="contact">
              <ContactForm onSubmit={(e) => e.preventDefault()}>
                <FormGroup>
                  <Label htmlFor="name">{c.form.name}</Label>
                  <Input id="name" type="text" placeholder={c.form.namePh} required />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">{c.form.email}</Label>
                  <Input id="email" type="email" placeholder={c.form.emailPh} required />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="phone">{c.form.phone}</Label>
                  <Input id="phone" type="tel" placeholder={c.form.phonePh} required />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="company">{c.form.company}</Label>
                  <Input id="company" type="text" placeholder={c.form.companyPh} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="type">{c.form.type}</Label>
                  <Select id="type" required defaultValue="">
                    <option value="" disabled>{c.form.typePh}</option>
                    <option value="product">{c.form.types.product}</option>
                    <option value="technical">{c.form.types.technical}</option>
                    <option value="warranty">{c.form.types.warranty}</option>
                    <option value="partnership">{c.form.types.partnership}</option>
                    <option value="order">{c.form.types.order}</option>
                    <option value="other">{c.form.types.other}</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="model">{c.form.model}</Label>
                  <Input id="model" type="text" placeholder={c.form.modelPh} />
                </FormGroup>
                <FormGroup className="full-width">
                  <Label htmlFor="subject">{c.form.subject}</Label>
                  <Input id="subject" type="text" placeholder={c.form.subjectPh} required />
                </FormGroup>
                <FormGroup className="full-width">
                  <Label htmlFor="message">{c.form.message}</Label>
                  <TextArea id="message" placeholder={c.form.messagePh} required />
                </FormGroup>
                <FormGroup className="full-width">
                  <Label htmlFor="file">{c.form.file}</Label>
                  <Input id="file" type="file" />
                  <small style={{ color: '#94a3b8' }}>{c.form.fileHint}</small>
                </FormGroup>
                <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end' }}>
                  <Button type="submit" $size="lg">{c.form.submit}</Button>
                </div>
              </ContactForm>

              <ContactInfoGrid>
                <InfoItem>
                  <span className="icon" role="img" aria-label={c.info.address}>📍</span>
                  <h4>{c.info.address}</h4>
                  <p>{c.info.addressValue}</p>
                </InfoItem>
                <InfoItem>
                  <span className="icon" role="img" aria-label={c.info.phone}>📞</span>
                  <h4>{c.info.phone}</h4>
                  <p>{c.info.phoneValue}</p>
                </InfoItem>
                <InfoItem>
                  <span className="icon" role="img" aria-label={c.info.email}>📧</span>
                  <h4>{c.info.email}</h4>
                  <p>{c.info.emailValue}</p>
                </InfoItem>
              </ContactInfoGrid>
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}

export default Center;

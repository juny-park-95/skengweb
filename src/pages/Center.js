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

const SUPPORT = [
  {
    icon: '📞',
    title: '전화 문의',
    text: '기술 지원 및 제품 문의는 전화로 빠르게 도움을 받으실 수 있습니다. 평일 09:00–18:00 운영.',
    link: { label: '070-8270-0665', href: 'tel:07082700665' },
  },
  {
    icon: '📧',
    title: '이메일 문의',
    text: '상세한 문의사항은 이메일로 보내주시면 영업일 기준 24시간 이내에 답변드립니다.',
    link: { label: 'sk5559611@hanmail.net', href: 'mailto:sk5559611@hanmail.net' },
  },
  {
    icon: '🔧',
    title: '기술 지원',
    text: '제품 설치 및 유지보수 관련 기술 지원이 필요하신 경우 기술지원팀으로 문의해주세요.',
    link: { label: '기술지원 요청하기', href: '#contact' },
  },
];

const FAQS = [
  {
    q: '제품 구매 절차는 어떻게 되나요?',
    a: '제품 구매를 원하시면 전화(070-8270-0665) 또는 이메일(sk5559611@hanmail.net)로 문의해 주시기 바랍니다. 담당 영업 담당자가 제품 사양, 가격, 납기 등에 대해 상세히 안내해 드립니다. 대량 구매 및 지속적인 거래를 원하시는 기업의 경우 별도의 계약을 통해 진행됩니다.',
  },
  {
    q: '기술 교육 및 제품 사용 교육을 받을 수 있나요?',
    a: '네, 제품 구매 고객을 대상으로 제품 사용법 및 유지보수 교육을 제공합니다. 온라인·오프라인 모두 진행하며, 고객사 요청 시 방문 교육도 가능합니다. 교육 일정 및 비용은 고객센터를 통해 문의해 주시기 바랍니다.',
  },
  {
    q: '협력업체로 등록하려면 어떻게 해야 하나요?',
    a: '협력업체 등록 신청서, 사업자등록증, 회사소개서를 이메일(sk5559611@hanmail.net)로 제출해 주시면 내부 심사를 거쳐 약 2주 내로 결과를 안내드립니다.',
  },
  {
    q: '제품 배송은 어떻게 진행되나요?',
    a: '주문 확인 및 결제 완료 후 영업일 기준 3–5일 내에 출고됩니다. 대형·특수 제품의 경우 별도의 배송 일정이 적용될 수 있으며, 전문 물류업체를 통해 진행되고 필요 시 설치 서비스가 함께 제공됩니다.',
  },
];

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
  const [activeTab, setActiveTab] = useState('faq');

  return (
    <main id="main-content">
      <PageBanner
        eyebrow="Support"
        title="고객센터"
        description="제품 문의, 기술 지원, 협력업체 등록 등 다양한 문의를 받고 있습니다."
        image="/images/center-banner.jpg"
      />

      <Section id="support">
        <Container>
          <SectionTitle eyebrow="Support" title="고객지원" />
          <Grid $min="280px">
            {SUPPORT.map((item) => (
              <SupportCard key={item.title}>
                <CardBody style={{ alignItems: 'center' }}>
                  <SupportIcon role="img" aria-label={item.title}>{item.icon}</SupportIcon>
                  <h3>{item.title}</h3>
                  <SupportText>{item.text}</SupportText>
                  <SupportLink href={item.link.href}>{item.link.label}</SupportLink>
                </CardBody>
              </SupportCard>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="faq" $variant="muted">
        <Container>
          <SectionTitle eyebrow="Help" title="자주 묻는 질문 / 문의하기" />
          <div style={{ textAlign: 'center' }}>
            <TabsHeader role="tablist">
              <Tab role="tab" $active={activeTab === 'faq'}     onClick={() => setActiveTab('faq')}>FAQ</Tab>
              <Tab role="tab" $active={activeTab === 'contact'} onClick={() => setActiveTab('contact')}>문의하기</Tab>
            </TabsHeader>
          </div>

          {activeTab === 'faq' && (
            <div>
              {FAQS.map((item) => (
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
                  <Label htmlFor="name">이름 *</Label>
                  <Input id="name" type="text" placeholder="이름을 입력하세요" required />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">이메일 *</Label>
                  <Input id="email" type="email" placeholder="이메일을 입력하세요" required />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="phone">전화번호 *</Label>
                  <Input id="phone" type="tel" placeholder="전화번호를 입력하세요" required />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="company">회사명</Label>
                  <Input id="company" type="text" placeholder="회사명을 입력하세요" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="type">문의 유형 *</Label>
                  <Select id="type" required defaultValue="">
                    <option value="" disabled>문의 유형을 선택하세요</option>
                    <option value="product">제품 문의</option>
                    <option value="technical">기술 지원</option>
                    <option value="warranty">보증/A/S</option>
                    <option value="partnership">협력업체 등록</option>
                    <option value="order">주문/배송</option>
                    <option value="other">기타</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="model">제품 모델</Label>
                  <Input id="model" type="text" placeholder="문의하시는 제품 모델명" />
                </FormGroup>
                <FormGroup className="full-width">
                  <Label htmlFor="subject">제목 *</Label>
                  <Input id="subject" type="text" placeholder="제목을 입력하세요" required />
                </FormGroup>
                <FormGroup className="full-width">
                  <Label htmlFor="message">문의 내용 *</Label>
                  <TextArea id="message" placeholder="문의 내용을 상세히 기재해 주세요" required />
                </FormGroup>
                <FormGroup className="full-width">
                  <Label htmlFor="file">첨부파일</Label>
                  <Input id="file" type="file" />
                  <small style={{ color: '#94a3b8' }}>최대 10MB (jpg, png, pdf, doc, docx)</small>
                </FormGroup>
                <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end' }}>
                  <Button type="submit" $size="lg">문의하기</Button>
                </div>
              </ContactForm>

              <ContactInfoGrid>
                <InfoItem>
                  <span className="icon" role="img" aria-label="주소">📍</span>
                  <h4>주소</h4>
                  <p>경기 안산시 단원구 신촌5길 28</p>
                </InfoItem>
                <InfoItem>
                  <span className="icon" role="img" aria-label="전화">📞</span>
                  <h4>전화</h4>
                  <p>070-8270-0665</p>
                </InfoItem>
                <InfoItem>
                  <span className="icon" role="img" aria-label="이메일">📧</span>
                  <h4>이메일</h4>
                  <p>sk5559611@hanmail.net</p>
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

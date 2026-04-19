import React from 'react';
import styled from 'styled-components';
import {
  PageBanner,
  Section,
  SectionTitle,
  Container,
  Grid,
  Card,
} from '../components/common';
import { useI18n } from '../i18n';

const TRANSPORT_ICONS = ['🚗', '🚍', '🚆'];

const InfoLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.spacing[8]};

  ${({ theme }) => theme.media.mdDown} {
    grid-template-columns: 1fr;
  }
`;

const AddressCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[8]};
  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: ${({ theme }) => theme.colors.brand};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
  p {
    color: ${({ theme }) => theme.colors.textMuted};
    margin: 0 0 ${({ theme }) => theme.spacing[2]};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  }
`;

const MapFrame = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};

  iframe {
    width: 100%;
    height: 460px;
    border: 0;
    display: block;
    ${({ theme }) => theme.media.mdDown} {
      height: 340px;
    }
  }
`;

const TransportCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[8]};
  align-items: flex-start;

  .icon {
    font-size: 2rem;
    width: 52px;
    height: 52px;
    border-radius: ${({ theme }) => theme.radii.md};
    background: ${({ theme }) => theme.colors.brandSoft};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    margin: 0 0 ${({ theme }) => theme.spacing[1]};
  }
`;

function Location() {
  const { t } = useI18n();
  const l = t.location;

  return (
    <main id="main-content">
      <PageBanner
        eyebrow={l.banner.eyebrow}
        title={l.banner.title}
        description={l.banner.description}
        image="/images/location-banner.jpg"
      />

      <Section>
        <Container>
          <SectionTitle eyebrow={l.visitEyebrow} title={l.visitTitle} />
          <InfoLayout>
            <AddressCard>
              <h3>{l.address.heading}</h3>
              {l.address.lines.map((line, idx) => <p key={idx}>{line}</p>)}
            </AddressCard>
            <MapFrame>
              <iframe
                title={l.mapTitle}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7777430184738!2d126.81750527184691!3d37.31454205827108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6e53e53fe145%3A0x7bd617d6a3522ffd!2z6rK96riw64-EIOyViOyCsOyLnCDri6jsm5Dqtawg7Iug7LSMNeq4uCAyOA!5e0!3m2!1sko!2skr!4v1744726564468!5m2!1sko!2skr"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapFrame>
          </InfoLayout>
        </Container>
      </Section>

      <Section $variant="muted">
        <Container>
          <SectionTitle eyebrow={l.transportEyebrow} title={l.transportTitle} />
          <Grid $min="260px">
            {l.transport.map((item, idx) => (
              <TransportCard key={item.title}>
                <span className="icon" role="img" aria-label={item.title}>{TRANSPORT_ICONS[idx]}</span>
                <h3>{item.title}</h3>
                {item.lines.map((line, i) => <p key={i}>{line}</p>)}
              </TransportCard>
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

export default Location;

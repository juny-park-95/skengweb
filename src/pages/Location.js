import React from 'react';
import styled from 'styled-components';

const LocationContainer = styled.div`
  margin-top: 70px; /* To account for fixed header */
`;

const PageBanner = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/location-banner.jpg') no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerTitle = styled.h1`
  color: white;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #003366;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AddressCard = styled.div`
  flex: 1;
  background-color: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const MapContainer = styled.div`
  flex: 2;
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  color: #003366;
  margin-bottom: 1rem;
`;

const InfoContent = styled.div`
  line-height: 1.6;
`;

const TransportSection = styled.div`
  margin-top: 3rem;
`;

const TransportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TransportCard = styled.div`
  background-color: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TransportIcon = styled.div`
  font-size: 2rem;
  color: #0066cc;
  margin-bottom: 1rem;
`;

function Location() {
  return (
    <LocationContainer>
      <PageBanner>
        <BannerTitle>오시는 길</BannerTitle>
      </PageBanner>
      
      <ContentSection>
        <SectionTitle>찾아오시는 방법</SectionTitle>
        <LocationInfo>
          <AddressCard>
            <InfoTitle>주소</InfoTitle>
            <InfoContent>
              <p>경기 안산시 단원구 신촌5길 28</p>
              <p>우편번호: 15443</p>
              <p>전화: 031-XXXX-XXXX</p>
              <p>이메일: info@skeng.co.kr</p>
              <p>영업시간: 평일 09:00 - 18:00</p>
              <p>토/일/공휴일 휴무</p>
            </InfoContent>
          </AddressCard>
          
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7777430184738!2d126.81750527184691!3d37.31454205827108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6e53e53fe145%3A0x7bd617d6a3522ffd!2z6rK96riw64-EIOyViOyCsOyLnCDri6jsm5Dqtawg7Iug7LSMNeq4uCAyOA!5e0!3m2!1sko!2skr!4v1744726564468!5m2!1sko!2skr" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </LocationInfo>
        
        <TransportSection>
          <SectionTitle>교통 안내</SectionTitle>
          <TransportGrid>
            <TransportCard>
              <TransportIcon>🚗</TransportIcon>
              <InfoTitle>자가용 이용 시</InfoTitle>
              <InfoContent>
                <p>- 서해안고속도로 안산IC에서 15분 거리</p>
                <p>- 주차장 이용 가능 (무료)</p>
              </InfoContent>
            </TransportCard>
            
            <TransportCard>
              <TransportIcon>🚍</TransportIcon>
              <InfoTitle>버스 이용 시</InfoTitle>
              <InfoContent>
                <p>- 안산역/안산터미널 정류장에서 하차</p>
                <p>- 123, 456번 버스 이용</p>
                <p>- '신촌사거리' 정류장에서 하차 후 도보 5분</p>
              </InfoContent>
            </TransportCard>
            
            <TransportCard>
              <TransportIcon>🚆</TransportIcon>
              <InfoTitle>지하철 이용 시</InfoTitle>
              <InfoContent>
                <p>- 4호선 안산역에서 하차</p>
                <p>- 2번 출구에서 도보 15분 또는</p>
                <p>- 안산역 앞에서 123, 456번 버스 이용</p>
              </InfoContent>
            </TransportCard>
          </TransportGrid>
        </TransportSection>
      </ContentSection>
    </LocationContainer>
  );
}

export default Location;

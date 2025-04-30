import React from 'react';
import styled from 'styled-components';

/*
  (주)에스앤케이이엔지 About 페이지 – 2025 리뉴얼
  -------------------------------------------------
  ▷ 회사 소개·비전·연혁 콘텐츠를 최신 정보로 재작성
  ▷ AUTROL 지능형 전송기, DCS Turn-Key 역량 등 핵심 경쟁력 반영
  ▷ 기존 레이아웃(배너, 섹션, 타임라인, 오시는 길) 유지
  ▷ 한글 UI 텍스트는 명확성·가독성을 위해 난이도 낮은 어휘 사용
*/

// --------------------------- Styled-Components --------------------------- //
const AboutContainer = styled.div`
  width: 100%;
  padding-top: 70px; /* 고정 헤더 높이 보정 */
`;

const PageBanner = styled.div`
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('/images/about-banner.jpg') no-repeat center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
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

const CompanyVision = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const VisionCard = styled.div`
  flex: 1;
  min-width: 250px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #0066cc;
  }
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const CompanyHistory = styled.div`
  margin-top: 3rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #0066cc;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  &:nth-child(odd) {
    left: 0;
  }
  &:nth-child(even) {
    left: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    &:nth-child(odd),
    &:nth-child(even) {
      left: 0;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background-color: #fff;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  h3 {
    font-size: 1.2rem;
    color: #0066cc;
    margin-bottom: 10px;
  }
  p {
    line-height: 1.6;
    color: #666;
  }
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #fff;
    border: 4px solid #0066cc;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  ${TimelineItem}:nth-child(odd) &::after {
    right: -17px;
  }
  ${TimelineItem}:nth-child(even) &::after {
    left: -17px;
  }
  @media (max-width: 768px) {
    &::after {
      left: -17px;
    }
  }
`;

const AwardsSection = styled.div`
  margin-top: 3rem;
`;

const AwardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AwardCard = styled.div`
  flex: 1;
  min-width: 300px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const AwardImage = styled.div`
  height: 200px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f9f9f9;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const AwardContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.3rem;
    color: #0066cc;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 0.8rem;
    line-height: 1.6;
    color: #555;
  }
  
  .award-date {
    display: block;
    margin-top: 1rem;
    color: #888;
    font-size: 0.9rem;
  }
`;

const CertificationSection = styled.div`
  margin-top: 3rem;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const CertificationImage = styled.div`
  height: 300px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f9f9f9;
  padding: 1.5rem;
`;

const CertificationContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.3rem;
    color: #0066cc;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 0.8rem;
    line-height: 1.6;
    color: #555;
  }
  
  .cert-info {
    display: block;
    margin-top: 1rem;
    color: #888;
    font-size: 0.9rem;
  }
`;

const LocationInfo = styled.div`
  margin-top: 3rem;
`;

const AddressCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0066cc;
`;

const InfoContent = styled.div`
  color: #666;
  line-height: 1.6;
`;

const MapContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 450px;
    @media (max-width: 768px) {
      height: 350px;
    }
  }
`;

const TransportSection = styled.div`
  margin-top: 3rem;
`;

const TransportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TransportCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const TransportIcon = styled.span`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

// --------------------------- Component --------------------------- //
function About() {
  return (
    <AboutContainer>
      {/* ========================================================================= */}
      {/* 배너 */}
      {/* ========================================================================= */}
      <PageBanner>
        <BannerTitle>기업소개</BannerTitle>
      </PageBanner>

      {/* ========================================================================= */}
      {/* 회사 소개 */}
      {/* ========================================================================= */}
      <ContentSection>
        <SectionTitle>회사소개</SectionTitle>
        <p>
          (주)에스앤케이이엔지는 국내외 발전소의 안정적·효율적 운영을 지원하는 전기·전자
          기계·부품 및 계측기기 전문 공급사입니다. <strong>DCS(Distributed Control
          System) 사업으로 축적한 프로젝트 관리 역량</strong>과 <strong>AUTROL</strong>
          브랜드 지능형 전송기 개발 노하우를 결합하여, 고정밀·고신뢰 계측기를 공급하고 있습니다.
          (주)에스앤케이이엔지는 <em>고객 설비의 생애주기 전반을 책임지는 파트너</em>가
          되기 위해, 설계·제작·시운전·사후 지원에 이르는 토털 서비스를 제공합니다.
        </p>

        {/* Vision · Mission · Core Values */}
        <CompanyVision>
          <VisionCard>
            <h3>VISION</h3>
            <p>스마트 계측·제어 분야 글로벌 Top-Tier 솔루션 파트너</p>
          </VisionCard>
          <VisionCard>
            <h3>MISSION</h3>
            <p>
              첨단 기술·품질·서비스로 발전소의 안전성과 에너지 효율을 극대화하여 사회 및
              경제의 지속 가능 성장에 기여한다
            </p>
          </VisionCard>
          <VisionCard>
            <h3>CORE VALUES</h3>
            <p>신뢰 | 전문성 | 품질 | 고객가치</p>
          </VisionCard>
        </CompanyVision>
      </ContentSection>

      {/* ========================================================================= */}
      {/* 연혁 */}
      {/* ========================================================================= */}
      <ContentSection>
        <SectionTitle>연혁</SectionTitle>
        <CompanyHistory>
          <Timeline>
            <TimelineItem>
              <TimelineContent>
                <h3>2025년</h3>
                <p>• 디지털 제어·분석 플랫폼 구축</p>
                <p>– 중부발전·KPS 디지털 컨버터·레벨전송기 대규모 공급</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <h3>2023년</h3>
                <p>• AI·로봇 제어시스템 상용화</p>
                <p>– 중부발전 지능형 IoT 로봇 시스템 (₩52M)</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <h3>2020년</h3>
                <p>• 스마트 팩토리용 계측장비 확대</p>
                <p>– 대산전력 전기팀 계측장비 & 수공구 패키지 (₩32M)</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <h3>2017년</h3>
                <p>• IoT·스마트 제어시장 진출</p>
                <p>– 중부발전 FAN 계통 온도 TX, 자동화 액추에이터 공급</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <h3>2015년</h3>
                <p>• 고신뢰성 트랜스미터 솔루션 확산</p>
                <p>– 중부발전 Transmitter 9종 (₩90M)</p>
                <p>• 사명 변경 – 주식회사 에스앤케이이엔지</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <h3>2013년</h3>
                <p>• 초음파·레이더 계측기 대량 공급</p>
                <p>– 서부발전·중부발전 초음파 Level Tx 대량 프로젝트</p>
                <p>• 법인 설립 – 주식회사 에스케이이엔지</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <h3>2010년</h3>
                <p>• 핵심 제어설비 공급 역량 검증</p>
                <p>– 남동발전 탈황제어 설비용 Speed Switch (₩260M)</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <h3>2007년</h3>
                <p>• 첫 대형 플랜트 수주</p>
                <p>– 중부발전 295품목 공급 (₩150M 규모)</p>
                <p>• 설립 – 에스케이이엔지</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CompanyHistory>
      </ContentSection>

      {/* ========================================================================= */}
      {/* 수상 내역 */}
      {/* ========================================================================= */}
      <ContentSection>
        <SectionTitle>수상 내역</SectionTitle>
        <AwardsSection>
          <AwardsList>
            <AwardCard>
              <AwardImage style={{ backgroundImage: `url('/images/prize_01.png')` }} />
              <AwardContent>
                <h3>한국중부발전 인천화력본부 감사패</h3>
                <p>기력 1, 2호기 터빈 취약설비 보강을 위한 부품 납품 및 설비 운영 기여</p>
                <p>한국중부발전㈜인천화력본부는 에스앤케이이엔지의 탁월한 기술력과 신속한 대응으로 설비 안전성 향상 및 발전소 안정적 운영에 기여한 공로를 인정하여 감사패를 수여하였습니다.</p>
                <span className="award-date">2013년 11월 29일</span>
              </AwardContent>
            </AwardCard>
            
            <AwardCard>
              <AwardImage style={{ backgroundImage: `url('/images/prize_02.png')` }} />
              <AwardContent>
                <h3>한국동서발전(주) 실증참여확인서</h3>
                <p>배관 압력 전송기 국산화 주도 및 발전 설비 국산화 실증 완료</p>
                <p>한국동서발전(주)는 에스앤케이이엔지가 수행한 배관 압력 전송기 국산화 개발 및 실증 사업에 참여하여 국내 발전소 설비 국산화에 기여한 성과를 인정하여 실증참여확인서를 발급하였습니다.</p>
                <span className="award-date">2020년 11월 27일</span>
              </AwardContent>
            </AwardCard>
          </AwardsList>
        </AwardsSection>
      </ContentSection>

      {/* ========================================================================= */}
      {/* ISO 인증 */}
      {/* ========================================================================= */}
      <ContentSection>
        <SectionTitle>품질 인증</SectionTitle>
        <p>
          (주)에스앤케이이엔지는 국제 표준화 기구(ISO)의 품질 경영 시스템 인증을 획득하여 
          제품과 서비스의 일관된 품질을 보장하고 있습니다.
        </p>
        
        <CertificationSection>
          <CertificationsGrid>
            <CertificationCard>
              <CertificationImage 
                style={{ backgroundImage: `url('/images/iso_korean.png')` }} 
              />
              <CertificationContent>
                <h3>ISO 9001:2015 인증 (국문)</h3>
                <p>품질경영시스템 국제 표준 인증</p>
                <p>제품 및 서비스의 국제 품질 표준 준수를 인증받아 고객에게 일관된 품질의 제품과 서비스를 제공합니다.</p>
                <span className="cert-info">인증기관: 한국표준협회(ITS) | 인증번호: ITS-KQ-00563</span>
              </CertificationContent>
            </CertificationCard>
            
            <CertificationCard>
              <CertificationImage 
                style={{ backgroundImage: `url('/images/iso_eng.png')` }} 
              />
              <CertificationContent>
                <h3>ISO 9001:2015 Certificate (English)</h3>
                <p>International Standard for Quality Management Systems</p>
                <p>Our company is certified to provide consistent quality products and services according to international quality standards.</p>
                <span className="cert-info">Certification Body: ITS | Certificate No: ITS-KQ-00563</span>
              </CertificationContent>
            </CertificationCard>
          </CertificationsGrid>
        </CertificationSection>
      </ContentSection>

      {/* ========================================================================= */}
      {/* 오시는 길 */}
      {/* ========================================================================= */}
      <ContentSection>
        <SectionTitle>오시는 길</SectionTitle>
        <LocationInfo>
          <AddressCard>
            <InfoTitle>주소</InfoTitle>
            <InfoContent>
              <p>경기 안산시 단원구 신촌5길 28 (우) 15443</p>
              <p>Tel : 070-8270-0665 | E-mail : sk5559611@hanmail.net</p>
              <p>근무시간 : 평일 09:00 – 18:00 (토·일·공휴일 휴무)</p>
            </InfoContent>
          </AddressCard>

          <MapContainer>
            {/* Google 지도 임베드 */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7777430184738!2d126.81750527184691!3d37.31454205827108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6e53e53fe145%3A0x7bd617d6a3522ffd!2z6rK96riw64-EIOyViOyCsOyLnCDri6jsm5Dqtawg7Iug7LSMNeq4uCAyOA!5e0!3m2!1sko!2skr!4v1744726564468!5m2!1sko!2skr"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SNKENG Location"
            />
          </MapContainer>
        </LocationInfo>

        {/* ========================================================================= */}
        {/* 교통 안내 */}
        {/* ========================================================================= */}
        <TransportSection>
          <SectionTitle>교통 안내</SectionTitle>
          <TransportGrid>
            <TransportCard>
              <TransportIcon role="img" aria-label="car">🚗</TransportIcon>
              <InfoTitle>자가용</InfoTitle>
              <InfoContent>
                <p>서해안고속도로 안산 IC → 15분 소요</p>
                <p>사내 주차장 무료 이용 가능</p>
              </InfoContent>
            </TransportCard>

            <TransportCard>
              <TransportIcon role="img" aria-label="bus">🚌</TransportIcon>
              <InfoTitle>버스</InfoTitle>
              <InfoContent>
                <p>안산역/안산터미널 정류장 하차</p>
                <p>123 · 456번 버스 → ‘신촌사거리’ 정류장 하차 → 도보 5분</p>
              </InfoContent>
            </TransportCard>

            <TransportCard>
              <TransportIcon role="img" aria-label="metro">🚆</TransportIcon>
              <InfoTitle>지하철</InfoTitle>
              <InfoContent>
                <p>4호선 안산역 2번 출구 → 도보 15분</p>
                <p>또는 123 · 456번 버스 환승 후 ‘신촌사거리’ 정류장 하차</p>
              </InfoContent>
            </TransportCard>
          </TransportGrid>
        </TransportSection>
      </ContentSection>
    </AboutContainer>
  );
}

export default About;

// business.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

/* ────────────────────────────────────────────────── *
 *  레이아웃 & 공통 스타일
 * ────────────────────────────────────────────────── */
const BusinessContainer = styled.div`
  width: 100%;
  padding-top: 70px;           /* 고정 헤더 보정 */
`;

const PageBanner = styled.div`
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)),
    url('/images/business-banner.jpg') center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const ContentSection = styled.section`
  padding: 5rem 10%;
  &:nth-child(odd) { background: #f5f5f5; }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 15px;
  &::after {
    content:'';
    position:absolute; bottom:0; left:0;
    width:50px; height:3px; background:#0066cc;
  }
`;

/* ──────────────────────────────────────────── *
 * 1. 파트너사 로고 캐러셀
 * ──────────────────────────────────────────── */

/* ① 전체 캐러셀 패딩을 조금 줄여 화면 활용도 ↑ */
const LogoCarousel = styled.div`
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,.1);
  padding: 4rem 0;      /* ⬅ 5rem → 4rem */
  position: relative;
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding: 3rem 0;    /* 모바일은 동일 */
  }

  /* … before/after 그라데이션은 동일 … */
`;

/* ② 로고 박스 & 이미지 리스폰시브 사이징 */
const LogoBox = styled.div`
  flex: 0 0 auto;                 /* flex-item 고정 */
  /*     min     선호     최대  */
  width:  clamp(220px, 22vw, 360px);
  height: clamp(120px, 12vw, 200px);
  aspect-ratio: 16 / 9;           /* 일정 비율 유지 → 세로값 자동 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;                  /* 크기에 따라 자동 여백 */
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: all .3s ease;

  &:hover {
    box-shadow: 0 6px 18px rgba(0,0,0,.12);
    transform: translateY(-4px);
  }

  /* 초소형 기기(≤480px)에서는 조금 더 줄임 */
  @media (max-width: 480px) {
    width:  clamp(160px, 60vw, 240px);
  }

  /* 로고 이미지 */
  img {
    width:  90%;       /* 가로 기준 채움 */
    height: 90%;
    object-fit: contain;
  }
`;

/* ③ 가로 간격이 너무 넓다면 Track gap 조정 */
const Track = styled.div`
  display: flex;
  gap: 4vw;                          /* 80px → 상대값 */
  animation: scroll 28s linear infinite;
  padding: 0 40px;

  @media (max-width: 768px) {
    gap: 6vw;                        /* 모바일은 약간 더 띄움 */
    animation-duration: 24s;
  }

  @keyframes scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(calc(-100% - 4vw)); }
  }
`;

/* ────────────────────────────────────────────────── *
 *  2. 파트너사 납품 현황 (Progress Bar)
 * ────────────────────────────────────────────────── */
const DeliveryWrap = styled.div`
  background:#fff;
  border-radius:8px;
  padding:2.5rem;
  box-shadow:0 5px 15px rgba(0,0,0,.1);
  margin-top:3rem;
`;

const BarRow = styled.div` margin-bottom:1.5rem; `;

/* =========[ UPDATED ]========= */
const Header = styled.div`
  display:flex;
  justify-content:space-between;
  font-weight:500;
  margin-bottom:.5rem;
  /* 화면폭에 따라 자동 축소 */
  font-size:clamp(0.9rem, 3.3vw, 1rem);
`;

/* =========[ UPDATED ]========= */
const BarBg = styled.div`
  background:#eaeaea;
  border-radius:12px;
  overflow:hidden;
  height:28px;                /* 24px → 28px */
  position:relative;

  @media (max-width:480px){
    height:34px;              /* 모바일에서 한층 더 높게 */
  }
`;

/* =========[ UPDATED ]========= */
const Bar = styled.div`
  position:absolute;
  left:0; top:0; height:100%;
  width:${({w})=>w}%;
  background:${({idx})=>`linear-gradient(
    90deg,
    hsl(${idx*45} 70% 45%),
    hsl(${idx*45+25} 70% 58%)
  )`};                         /* 명도 ↓ 글자 대비 ↑ */
  border-radius:12px;
  z-index:${({idx})=>idx};
  transition:width 1s ease-out;

  /* 퍼센티지 라벨 */
  &::after{
    content:'${({w})=>w}%';
    position:absolute;
    right:10px;
    top:50%;
    transform:translateY(-50%);
    font-weight:700;
    color:#fff;
    font-size:clamp(11px, 3.2vw, 14px);  /* 데스크톱~모바일 */
    text-shadow:0 0 4px rgba(0,0,0,.45);
    pointer-events:none;
  }
`;
/* ────────────────────────────────────────────────── *
 *  3. 사업 영역 카드
 * ────────────────────────────────────────────────── */
const AreaWrap = styled.div` margin-top:3rem; `;
const Card = styled.div`
  display:flex; flex-direction:${({rev})=>rev?'row-reverse':'row'};
  background:#fff; border-radius:8px; overflow:hidden;
  box-shadow:0 5px 15px rgba(0,0,0,.1); margin-bottom:4rem;
  @media(max-width:768px){ flex-direction:column; }
`;
const Image = styled.div`
  flex:1; min-height:400px; background:center / cover no-repeat;
  @media(max-width:768px){ min-height:250px; }
`;
const Text = styled.div`
  flex:1; padding:2.5rem;
  h3{ font-size:1.8rem; margin-bottom:1.5rem; color:#0066cc; }
  p{ margin-bottom:1.5rem; line-height:1.6; color:#444; }
  ul{ padding-left:20px; li{ margin-bottom:.8rem; } }
`;

/* ────────────────────────────────────────────────── *
 *  Component
 * ────────────────────────────────────────────────── */
function Business(){
  const deliveryRef = useRef(null);

  /* ──  파트너사 납품 현황 애니메이션  ── */
  useEffect(()=>{
    const io = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.querySelectorAll('[data-width]')
            .forEach(bar=>bar.style.width = bar.dataset.width);
        }
      });
    },{threshold:.3});
    if(deliveryRef.current) io.observe(deliveryRef.current);
    return ()=> io.disconnect();
  },[]);

  /* 데이터 */
  const partnerLogos = [
    {id:1,src:'/images/nambu.png',alt:'남부발전'},
    {id:2,src:'/images/namdong.png',alt:'남동발전'},
    {id:3,src:'/images/dongseo.png',alt:'동서발전'},
    {id:4,src:'/images/seobu.png',alt:'서부발전'},
    {id:5,src:'/images/jungboo.png',alt:'중부발전'},
    {id:6,src:'/images/CGN.png',alt:'CGN 대산전력'},
  ];
  // 충분한 수의 로고 복제로 끊김 없는 스크롤 효과 생성
  const logosForScroll = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  const deliveries = [
    {name:'CGN 대산전력', percent:5 },
    {name:'남부발전',     percent:10},
    {name:'남동발전',     percent:10},
    {name:'동서발전',     percent:17.3},
    {name:'서부발전',     percent:22.6},
    {name:'중부발전',     percent:30},
    {name:'기타',         percent:5.1},
  ];

  // 누적 퍼센트 계산 - 각 바의 시작 위치 결정에 사용
  const calculateAccumulatedPercent = (index) => {
    let sum = 0;
    for (let i = 0; i < index; i++) {
      sum += deliveries[i].percent;
    }
    return sum;
  };

  return (
    <BusinessContainer>
      {/* ── 배너 ─────────────────────────────────────── */}
      <PageBanner><BannerTitle>사업영역</BannerTitle></PageBanner>

      {/* ── (1) 파트너사 로고 ─────────────────────────── */}
      <ContentSection>
        <SectionTitle>주요 파트너사</SectionTitle>
        <p>
          (주)에스앤케이이엔지는 국내외 발전사를 비롯한 다양한 전력 기업과 긴밀한 협력
          관계를 유지하며 신뢰를 쌓아왔습니다.
        </p>
        <LogoCarousel>
          <Track>
            {logosForScroll.map(l=>(
              <LogoBox key={`${l.id}-${Math.random()}`}>
                <img src={l.src} alt={l.alt}/>
              </LogoBox>
            ))}
          </Track>
        </LogoCarousel>
      </ContentSection>

      {/* ── (2) 파트너사 납품 현황 ────────────────────── */}
      <ContentSection ref={deliveryRef}>
        <SectionTitle>파트너사 납품 현황</SectionTitle>
        <p>
          당사가 공급한 물량을 파트너사 비율로 환산한 수치입니다
          (총 100 기준).
        </p>
        <DeliveryWrap>
          {/* 하나의 배경에 모든 바 중첩 표시 */}
          <BarBg>
            {deliveries.map((d,idx)=>(
              <Bar 
                key={d.name}
                idx={deliveries.length - idx} /* z-index 역순으로 부여해 작은 값이 앞에 보이도록 */
                w={d.percent} 
                data-width={`${d.percent}%`} 
                style={{
                  width: 0, 
                  left: `${calculateAccumulatedPercent(idx)}%` /* 누적 위치에 배치 */
                }}
              />
            ))}
          </BarBg>
          
          {/* 각 항목별 레이블 - 별도로 표시 */}
          {deliveries.map((d,idx)=>(
            <BarRow key={d.name} style={{marginTop: idx === 0 ? '1.5rem' : '0.5rem'}}>
              <Header>
                <span>{d.name}</span>
                <span>{d.percent}%</span>
              </Header>
            </BarRow>
          ))}
        </DeliveryWrap>
      </ContentSection>

      {/* ── (3) 사업 영역 ─────────────────────────────── */}
      <ContentSection>
        <SectionTitle>(주)에스앤케이이엔지의 사업영역</SectionTitle>
        <p>
          (주)에스앤케이이엔지는 발전소 핵심 설비부터 제어‧계측 솔루션까지
          통합적으로 공급하여 고객의 안정적 전력 생산을 지원합니다.
        </p>

        <AreaWrap>
          {/* 주요 전기 기계·장비 */}
          <Card>
            <Image style={{backgroundImage:`url('/images/power_equipment_detail.jpg')`}}/>
            <Text>
              <h3>주요 전기 기계·장비</h3>
              <p>
                세계적 제조사와 파트너십을 통해 고신뢰 발전기·변압기·스위치기어 등을
                공급, 무중단 운영과 효율 향상에 기여합니다.
              </p>
              <ul>
                <li>발전기 및 터빈 설비</li><li>고/저압 변압기·리액터</li>
                <li>GIS·스위치기어</li><li>보호 계전 시스템</li><li>UPS 및 축전지</li>
              </ul>
            </Text>
          </Card>

          {/* 제어 시스템 및 전자 부품 */}
          <Card rev>
            <Image style={{backgroundImage:`url('/images/control_systems_detail.jpg')`}}/>
            <Text>
              <h3>제어 시스템 및 전자 부품</h3>
              <p>
                DCS·PLC·HMI 및 산업용 센서, 액추에이터를 통해 플랜트 자동화·지능화를
                지원합니다.
              </p>
              <ul>
                <li>DCS, PLC, HMI</li><li>온도·압력·유량 센서</li>
                <li>제어 밸브·액추에이터</li><li>인버터·드라이브</li>
                <li>산업용 네트워크 장비</li>
              </ul>
            </Text>
          </Card>

          {/* 계측기기 및 시험 장비 */}
          <Card>
            <Image style={{backgroundImage:`url('/images/instruments_detail.jpg')`}}/>
            <Text>
              <h3>계측기기 및 시험 장비</h3>
              <p>
                정밀 계측·진단 장비를 제공하여 예방 정비와 설비 신뢰성 향상을
                지원합니다.
              </p>
              <ul>
                <li>전력 분석기·품질 측정기</li><li>절연/접지 저항계</li>
                <li>공정 계측기 (T/P/F 등)</li><li>진동 분석기</li>
                <li>휴대용 시험 장비</li>
              </ul>
            </Text>
          </Card>

          {/* 관련 기자재 및 부품 */}
          <Card rev>
            <Image style={{backgroundImage:`url('/images/materials_parts_detail.jpg')`}}/>
            <Text>
              <h3>관련 기자재 및 부품</h3>
              <p>
                케이블·커넥터·밸브 등 소모성 부품까지 안정적 공급망으로 즉시 지원합니다.
              </p>
              <ul>
                <li>전력·제어·광 케이블</li><li>커넥터·배선 자재</li>
                <li>배관 밸브·피팅</li><li>필터·베어링</li><li>공구·안전장비</li>
              </ul>
            </Text>
          </Card>
        </AreaWrap>
      </ContentSection>
    </BusinessContainer>
  );
}

export default Business;

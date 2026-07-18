import { ProjectPayload } from '../types/project';

const project: ProjectPayload = {
  disable: false,
  list: [
    {
      title: '검색 인프라 AWS 전환 및 무중단 마이그레이션',
      where: '퍼닌 (Funin) | Backend & Infra',
      startedAt: '2023-01',
      endedAt: '2023-07',
      descriptions: [
        {
          content: 'IDC 기반 검색 시스템의 AWS 마이그레이션 전반을 주도',
          weight: 'MEDIUM',
        },
        { content: '검색 API 운영 환경을 AWS ECS Fargate 기반으로 단독 구축, 무중단 전환 완료' },
        { content: 'Elasticsearch 클러스터를 EC2 기반으로 신규 구축 후 30억+ 문서 데이터 마이그레이션' },
        { content: 'nGrinder 부하 테스트로 검색 API 최대 처리량 측정 및 가용성 검증' },
        { content: 'Jenkins CI/CD 파이프라인 신규 구축으로 배포 자동화, 배포 시간 약 20분에서 5분으로 단축' },
        { content: 'Prometheus와 Grafana 통합 모니터링 및 SNS, Slack 알림 체계 마련' },
      ],
    },
    {
      title: '대규모 검색/추천 플랫폼 개발 및 운영',
      where: '퍼닌 (Funin) | Backend & Infra',
      startedAt: '2021-12',
      descriptions: [
        {
          content:
            '30억+ 문서, 5개 클러스터, 30+ 노드 규모의 검색/추천 플랫폼에서 신규 API 개발과 장애 대응을 담당하고 검색 API를 200~300 TPS로 안정적으로 운영',
          weight: 'MEDIUM',
        },
        {
          content:
            '음원 서비스의 대화형 AI 음악 추천(AI DJ) 반복 LLM 호출 비용 절감을 위해 OpenSearch kNN 기반 벡터 검색 플랫폼 신규 구축, 호출 비용 약 20% 절감',
        },
        {
          content:
            '글로벌 공연 플랫폼 STAYG 공연 검색/자동완성 API 신규 개발, 기존 분석기를 활용해 초성 검색을 구현하고 nGrinder 부하 테스트로 Peak TPS 약 2,000, 오류 0건 검증 후 오픈',
        },
        { content: '일 1,153만 건 검색 로그 수집 ELK 파이프라인 구축' },
        {
          content:
            '음원 서비스 특성상 매년 12월 31일 자정 검색 요청이 평시 분당 7천 건에서 2만 건(약 3배)으로 급증하던 지연 장애를 ElastiCache 도입으로 해소, 이후 동일 시점 장애 재발 없음',
        },
        {
          content:
            'Compute Optimizer, Trusted Advisor, CloudWatch 지표 기반으로 EC2/ECS 인스턴스를 지속적으로 최적화해 누적 월 약 800만원(연 약 1억원) 비용 절감',
        },
      ],
    },
    {
      title: '신규 게임 사전예약 시스템 개발',
      where: '게임덱스 (Gamedex) | Backend',
      startedAt: '2020-04',
      endedAt: '2021-06',
      descriptions: [
        {
          content: '신규 게임 사전예약 시스템 구축 및 사내 백오피스 운영',
          weight: 'MEDIUM',
        },
        { content: '신규 게임 사전예약 이벤트 페이지 API 개발 및 DB 설계' },
        { content: 'jQuery/JavaScript 기반 프론트엔드 데이터 가공 및 API 연동' },
        { content: '사내 백오피스 게시판, 댓글, 파일 업로드 기능 개발 및 유지보수' },
      ],
    },
  ],
};

export default project;

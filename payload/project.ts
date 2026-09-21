import { ProjectPayload } from '../types/project';

const project: ProjectPayload = {
  disable: false,
  list: [
    {
      title: '검색 서비스 AWS 인프라 운영 및 비용 최적화',
      where: '퍼닌 (Funin) | Backend & Infra',
      overview:
        'AWS 전환 이후 검색 서비스의 운영 환경을 지속적으로 관리하고 있습니다. EC2/ECS 리소스 최적화와 STG 운영 자동화, Jenkins 기반 CI/CD 환경 운영을 담당하고 있습니다.',
      startedAt: '2023-08',
      descriptions: [
        {
          content:
            'Compute Optimizer, CloudWatch 지표 기반 EC2/ECS 최적화로 월 약 800만원(예상) 비용 절감',
        },
        { content: 'EventBridge, Lambda 및 ECS 예약 작업을 활용한 STG 환경 운영 시간 최적화' },
        { content: 'CodeCommit 소스 저장소와 Jenkins 연동 기반 CI/CD 운영' },
      ],
    },
    {
      title: 'IDC 검색 시스템 AWS 마이그레이션',
      where: '퍼닌 (Funin) | Backend & Infra',
      overview:
        'IDC에서 운영하던 검색 시스템을 AWS로 전환한 프로젝트입니다. 검색 API와 Elasticsearch 클러스터를 새롭게 구성하고, 배포와 모니터링 환경까지 함께 구축해 안정적인 운영 기반을 마련했습니다.',
      startedAt: '2023-01',
      endedAt: '2023-07',
      descriptions: [
        { content: '검색 API 운영 환경을 AWS ECS Fargate 기반으로 구축해 무중단 전환' },
        {
          content:
            '30억+ 문서 처리를 위한 Elasticsearch 클러스터를 EC2 기반으로 신규 구축하고 데이터 마이그레이션',
        },
        { content: 'Jenkins CI/CD 파이프라인 구축으로 배포 자동화' },
        { content: 'Prometheus, Grafana 통합 모니터링과 SNS/Slack 알림 체계 구축' },
        { content: 'nGrinder 부하 테스트로 검색 API 최대 처리량 측정 및 가용성 검증' },
      ],
    },
    {
      title: '대규모 검색/추천 플랫폼 백엔드 개발 및 운영',
      where: '퍼닌 (Funin) | Backend & Infra',
      overview:
        '대규모 검색/추천 서비스를 제공하는 플랫폼입니다. 검색 API 개발과 Elasticsearch, OpenSearch 기반 검색 인프라 운영을 담당하며, 성능 개선과 장애 대응을 수행하고 있습니다.',
      startedAt: '2021-12',
      descriptions: [
        { content: 'LLM 반복 호출 비용 절감을 위한 OpenSearch kNN 벡터 검색 플랫폼 구축' },
        { content: '회원 청취 이력 기반 개인화 추천 신규 API 개발' },
        { content: '기존 검색 엔진을 활용한 공연 예매 플랫폼 검색/자동완성 API 개발' },
        { content: '일 1200만 건 검색 로그 수집 ELK 파이프라인 구축' },
        { content: '연말 자정 검색 요청 급증으로 인한 지연 장애를 ElastiCache 도입으로 해소' },
      ],
    },
    {
      title: '신규 게임 사전예약 시스템 개발',
      where: '게임덱스 (Gamedex) | Backend',
      overview:
        '4개 언어(한/영/일/중)를 지원하는 게임 사전예약 이벤트 페이지와 사내 백오피스를 개발한 프로젝트입니다.',
      startedAt: '2020-04',
      endedAt: '2021-06',
      descriptions: [
        { content: '한/영/일/중 다국어 사전예약 이벤트 페이지 API 개발 및 DB 설계' },
        { content: 'jQuery/JavaScript 기반 프론트엔드 데이터 가공 및 API 연동' },
        { content: '사내 인트라넷 백오피스 기능 개발 및 레거시 유지보수' },
      ],
    },
  ],
};

export default project;

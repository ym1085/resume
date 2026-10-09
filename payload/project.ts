import { ProjectPayload } from '../types/project';

const project: ProjectPayload = {
  disable: false,
  list: [
    {
      title: '검색 서비스 AWS 인프라 운영 및 비용 최적화',
      where: '퍼닌 (Funin) | Backend & Infra',
      startedAt: '2023-08',
      descriptions: [
        {
          content:
            'Compute Optimizer와 CloudWatch 지표를 바탕으로 EC2와 ECS 리소스를 사용량에 맞게 조정해 운영 비용 절감',
        },
        { content: 'EventBridge, Lambda 및 ECS 예약 작업을 활용한 STG 환경 운영 시간 최적화' },
        { content: 'CodeCommit 소스 저장소와 Jenkins 연동 기반 CI/CD 운영' },
      ],
    },
    {
      title: 'IDC 검색 시스템 AWS 마이그레이션',
      where: '퍼닌 (Funin) | Backend & Infra',
      startedAt: '2023-01',
      endedAt: '2023-07',
      descriptions: [
        { content: '검색 API 운영 환경을 AWS ECS Fargate 기반으로 구축해 무중단 전환' },
        {
          content:
            '30억 건 이상의 문서 처리를 위한 Elasticsearch 클러스터를 EC2 기반으로 신규 구축하고 데이터 마이그레이션',
        },
        { content: 'Jenkins CI/CD 파이프라인 구축으로 배포 자동화' },
        { content: 'Prometheus, Grafana 통합 모니터링과 SNS/Slack 알림 체계 구축' },
        { content: 'nGrinder 부하 테스트로 검색 API 최대 처리량 측정 및 가용성 검증' },
      ],
    },
    {
      title: '대규모 검색/추천 플랫폼 백엔드 개발 및 운영',
      where: '퍼닌 (Funin) | Backend & Infra',
      startedAt: '2021-12',
      descriptions: [
        {
          content:
            'LLM 반복 호출을 줄이기 위해 OpenSearch kNN으로 유사한 요청을 검색하고 기존 결과를 재사용하는 구조 구축',
        },
        { content: '회원 청취 이력 기반 개인화 추천 신규 API 개발' },
        { content: '기존 검색 엔진을 활용한 공연 예매 플랫폼 검색/자동완성 API 개발' },
        { content: '일 1,200만 건의 검색 로그를 수집하는 ELK 파이프라인 구축' },
        { content: '연말 자정 검색 요청이 급증하면서 발생한 응답 지연을 ElastiCache 도입으로 해소' },
      ],
    },
    {
      title: '신규 게임 사전예약 시스템 개발',
      where: '게임덱스 (Gamedex) | Backend',
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

import { ExperiencePayload } from '../types/experience';

const experience: ExperiencePayload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '퍼닌 (Funin)',
      positions: [
        {
          title: 'Backend / Cloud Engineer',
          startedAt: '2021-12',
          descriptions: [
            { content: '대규모 검색/추천 플랫폼 백엔드 API 개발 및 AWS 기반 검색 인프라 운영' },
            {
              content:
                '30억+ 문서와 5개 Elasticsearch/OpenSearch 클러스터 검색 서비스 설계 및 운영',
            },
            { content: 'IDC 기반 검색 시스템을 AWS로 옮기는 전반적인 전환 주도, EC2 기반 클러스터 재구축' },
            {
              content:
                '음원 서비스 AI DJ에 OpenSearch kNN 벡터 검색을 도입해 LLM 호출 비용 약 20% 절감',
            },
            { content: 'Compute Optimizer, Trusted Advisor, CloudWatch 지표 기반 인프라 비용 지속 최적화' },
            { content: 'Prometheus, Grafana 통합 모니터링 구축 및 성능, 장애 대응' },
            { content: '별도 팀 리드 없이 약 3년간 검색 플랫폼 백엔드 개발부터 운영, 유지보수까지 책임지고 담당' },
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'Elasticsearch',
            'OpenSearch',
            'AWS',
            'ElastiCache',
            'MySQL',
            'MS-SQL',
            'ELK',
            'Grafana',
            'Prometheus',
            'Shell Script',
          ],
        },
      ],
    },
    {
      title: '게임덱스 (Gamedex)',
      positions: [
        {
          title: 'Backend Engineer',
          startedAt: '2020-04',
          endedAt: '2021-06',
          descriptions: [
            { content: '신규 게임 사전예약 이벤트 페이지 API 개발 및 DB 설계' },
            { content: '이벤트 페이지 연동을 위한 CRUD API 설계 및 제공' },
            { content: 'jQuery/JavaScript 기반 프론트엔드 데이터 가공 및 API 연동' },
            { content: '사내 인트라넷 백오피스 게시판, 댓글, 파일 업로드 기능 개발 및 운영' },
            { content: '레거시 기능 유지보수 및 서비스 운영 지원' },
          ],
          skillKeywords: [
            'Java',
            'Spring',
            'MyBatis',
            'JavaScript',
            'jQuery',
            'HTML/CSS',
            'MySQL',
            'MS-SQL',
          ],
        },
      ],
    },
  ],
};

export default experience;

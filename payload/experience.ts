import { ExperiencePayload } from '../types/experience';

const experience: ExperiencePayload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '퍼닌 (Funin)',
      positions: [
        {
          title: 'Backend & Cloud Engineer',
          startedAt: '2021-12',
          descriptions: [
            { content: '검색/추천 플랫폼 API 개발 및 Elasticsearch, OpenSearch 운영' },
            { content: 'IDC 검색 시스템 AWS 무중단 마이그레이션 및 인프라 재구축' },
            { content: 'OpenSearch kNN 기반 LLM 응답 재사용 기능 개발' },
            { content: 'Prometheus, Grafana, CloudWatch 기반 모니터링 및 AWS 비용 최적화' },
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'Elasticsearch',
            'OpenSearch',
            'AWS',
            'MySQL',
            'MS-SQL',
            'ELK',
            'Grafana',
            'Prometheus',
            'Jenkins',
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
            { content: 'jQuery/JavaScript 기반 프론트엔드 데이터 가공 및 API 연동' },
            { content: '사내 인트라넷 백오피스 기능 개발 및 레거시 유지보수' },
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

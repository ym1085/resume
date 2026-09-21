import { HighlightPayload } from '../types/highlight';

const highlight: HighlightPayload = {
  disable: false,
  list: [
    {
      title: '검색 인프라 AWS 전환',
      description: 'IDC 검색 시스템을 AWS로 전환하고 운영 환경을 재구축',
      keywords: ['AWS', 'ECS', 'Elasticsearch'],
    },
    {
      title: '대규모 검색/추천 플랫폼',
      description: '30억 건 이상 문서 규모의 검색/추천 API 개발과 장애 대응',
      keywords: ['Elasticsearch', 'OpenSearch', 'ELK'],
    },
    {
      title: '인프라 비용 최적화',
      description: '지표 기반 리소스 최적화로 월 약 800만원(예상) 절감',
      keywords: ['AWS', 'CloudWatch', 'Compute Optimizer'],
    },
  ],
};

export default highlight;

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
      description: 'Elasticsearch 4개 클러스터, 39개 노드 운영',
      keywords: ['Elasticsearch', 'OpenSearch', 'ELK'],
    },
    {
      title: '인프라 비용 최적화',
      description: '지표 기반 리소스 최적화로 인프라 운영 비용 절감',
      keywords: ['AWS', 'CloudWatch', 'Compute Optimizer'],
    },
  ],
};

export default highlight;

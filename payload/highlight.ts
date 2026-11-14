import { HighlightPayload } from '../types/highlight';

const highlight: HighlightPayload = {
  disable: false,
  list: [
    {
      title: '백엔드 API 개발',
      description: '추천/검색 API 개발 및 OpenSearch kNN으로 AI Agent 응답 재사용',
      keywords: ['Java', 'Spring Boot', 'Elasticsearch', 'OpenSearch'],
    },
    {
      title: '검색 인프라 AWS 전환',
      description: 'IDC 검색 시스템을 AWS로 전환하고 운영 환경을 재구축',
      keywords: ['EC2', 'ECS Fargate', 'Elasticsearch'],
    },
    {
      title: '인프라 비용 최적화',
      description: '사용률 지표 기반 EC2와 ECS 사양 축소로 월 약 800만 원 규모 비용 절감',
      keywords: ['CloudWatch', 'Compute Optimizer', 'Trusted Advisor'],
    },
  ],
};

export default highlight;

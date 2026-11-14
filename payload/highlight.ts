import { HighlightPayload } from '../types/highlight';

const highlight: HighlightPayload = {
  disable: false,
  list: [
    {
      title: '백엔드 API 개발',
      description: '음원 서비스의 검색, 추천 API 및 AI Agent를 위한 벡터 검색 API 개발',
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

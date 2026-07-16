import { HighlightPayload } from '../types/highlight';

const highlight: HighlightPayload = {
  disable: false,
  list: [
    {
      title: '검색 인프라 AWS 전환',
      description:
        'IDC 기반 검색 시스템을 AWS로 옮기는 전환을 진행하며, Elasticsearch 클러스터를 EC2 기반으로 재구축했습니다.',
      keywords: ['AWS', 'Elasticsearch'],
    },
    {
      title: '대규모 검색/추천 플랫폼 운영',
      description:
        '30억+ 문서, 5개 클러스터, 30+ 노드 규모의 검색 API를 평균 TPS 500~1,000으로 안정 운영했습니다.',
      keywords: ['Elasticsearch', 'OpenSearch', 'ELK'],
    },
    {
      title: '벡터 검색 도입으로 LLM 비용 절감',
      description:
        '음원 서비스의 대화형 AI 음악 추천(AI DJ) 반복 LLM 호출 비용을 줄이기 위해 OpenSearch kNN 기반 벡터 검색 플랫폼을 신규 구축해 호출 비용을 약 20% 절감했습니다.',
      keywords: ['OpenSearch', 'kNN', 'Vector Search'],
    },
    {
      title: '인프라 비용 최적화',
      description:
        'Compute Optimizer, Trusted Advisor, CloudWatch 지표를 기반으로 EC2/ECS 인스턴스를 지속적으로 최적화해 누적 월 약 800만원(연 약 1억원) 규모의 인프라 비용을 절감했습니다.',
      keywords: ['FinOps', 'AWS', 'Grafana'],
    },
  ],
};

export default highlight;

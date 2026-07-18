import { IntroducePayload } from '../types/introduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IntroducePayload = {
  disable: false,

  contents: [
    '대규모 검색/추천 플랫폼을 개발하고 운영해 온 백엔드 엔지니어입니다. Java와 Spring Boot를 주력으로 Elasticsearch, OpenSearch, ELK를 다루며, AWS 위에서 하루 수천만 건의 검색 트래픽을 안정적으로 처리해 왔습니다. 트래픽이 몰리는 순간일수록 안정성과 장애 대응을 먼저 생각합니다.',
    'IDC에서 운영하던 검색 시스템을 AWS로 옮기면서 검색 API와 Elasticsearch 클러스터를 무중단으로 전환했고, 음원 서비스의 대화형 AI 음악 추천(AI DJ)에는 OpenSearch kNN 기반 벡터 검색을 도입했습니다.',
    '서비스와 인프라를 함께 다루다 보니 성능과 안정성은 물론 비용까지 균형 있게 고민하게 됐고, 그렇게 쌓인 경험과 배운 것들을 블로그에 190여 편의 글로 남기고 있습니다.',
  ],
  latestUpdated: latestUpdatedAt,
};

export default introduce;

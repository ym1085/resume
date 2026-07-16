import { IntroducePayload } from '../types/introduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IntroducePayload = {
  disable: false,

  contents: [
    '대규모 검색/추천 플랫폼의 API 개발과 AWS 기반 운영을 담당해 온 백엔드 엔지니어입니다. Java와 Spring Boot를 주력으로 Elasticsearch, OpenSearch, AWS, ELK 환경에서 검색 서비스를 개발하고 운영해 왔습니다. 하루 수천만 건의 검색 트래픽을 안정적으로 처리하며 성능 최적화와 장애 대응에 집중합니다.',
    'IDC 기반 검색 시스템을 AWS로 마이그레이션하며 Elasticsearch 클러스터를 EC2 기반으로 재구축하고, 음원 서비스의 대화형 AI 음악 추천(AI DJ)에는 OpenSearch kNN 기반 벡터 검색을 도입했습니다.',
    '서비스와 인프라를 함께 다루는 과정에서 성능, 안정성, 비용 효율을 꾸준히 개선해 왔고, 업무 경험과 학습 내용을 블로그에 190여 편의 기술 글로 정리하고 있습니다.',
  ],
  latestUpdated: latestUpdatedAt,
};

export default introduce;

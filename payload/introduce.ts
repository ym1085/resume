import { IntroducePayload } from '../types/introduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IntroducePayload = {
  disable: false,

  contents: [
    '대규모 검색/추천 플랫폼의 API 개발과 AWS 기반 운영을 담당해 온 백엔드 엔지니어입니다. Java와 Spring Boot를 주력으로 Elasticsearch와 OpenSearch, AWS, ELK 기반 환경에서 검색 서비스를 개발하고 운영해 왔습니다. 하루 수천만 건의 검색 트래픽을 안정적으로 처리하며 성능 최적화와 장애 대응에 집중합니다.',
    'IDC 기반 검색 시스템의 AWS 마이그레이션을 진행하며 Elasticsearch 클러스터를 EC2 기반으로 재구축했고, 음원 서비스의 대화형 AI 음악 추천(AI DJ)에는 OpenSearch kNN 기반 벡터 검색을 도입하였습니다.',
    '클라우드 인프라의 성능, 안정성, 비용 효율을 지속적으로 개선해 왔습니다. 블로그에 190여 개의 기술 포스트를 기록하며 학습한 내용을 꾸준히 정리하고, 팀과 함께 성장하는 개발자가 되기 위해 끊임없이 학습하고 있습니다.',
  ],
  latestUpdated: latestUpdatedAt,
};

export default introduce;

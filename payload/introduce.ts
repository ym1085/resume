import { IntroducePayload } from '../types/introduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IntroducePayload = {
  disable: false,

  contents: [
    '백엔드 개발과 검색 서비스 운영을 중심으로 경력을 쌓아왔습니다. 현재는 대규모 검색/추천 플랫폼에서 백엔드 개발과 AWS 기반 검색 인프라 운영을 함께 담당하고 있습니다. Java와 Spring Boot를 주력으로 사용하며, Elasticsearch와 OpenSearch 기반 환경에서 30억 건 이상의 문서를 다루는 서비스를 운영하고 있습니다.',
    '서비스 운영 과정에서 애플리케이션뿐 아니라 인프라 영역까지 경험을 넓혀왔습니다. IDC 검색 시스템의 AWS 무중단 전환과 검색 인프라 재구축, 트래픽 급증으로 발생한 지연 장애 대응, AWS 리소스 최적화 등을 경험했습니다. 최근에는 Terraform 기반 IaC까지 관심 영역을 확장하며 백엔드와 인프라 전반에 대한 이해를 넓혀가고 있습니다.',
    '백엔드 개발자로서 전문성을 꾸준히 넓혀가는 것과 함께, 좋은 동료들과 경험과 지식을 나누며 함께 성장하는 것을 중요하게 생각합니다. 배운 것을 기록하고 공유하며 팀에 기여하는 엔지니어가 되고자 합니다.',
  ],

  latestUpdated: latestUpdatedAt,
};

export default introduce;

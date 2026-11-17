import { IntroducePayload } from '../types/introduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IntroducePayload = {
  disable: false,

  contents: [
    '7년 차 백엔드 엔지니어 김영민입니다. Java와 Spring Boot를 주력으로 사용하며, 현재는 30억 건 이상의 문서를 다루는 검색/추천 플랫폼에서 API 개발과 AWS 인프라 운영을 함께 맡고 있습니다.',
    'IDC에서 운영하던 검색 시스템을 AWS로 이전하고 검색 인프라를 재구축했습니다. 트래픽 급증에 따른 지연 장애 대응과 AWS 리소스 최적화를 맡으며, 애플리케이션과 인프라를 함께 살펴 문제를 해결해 왔습니다. 업무 외에도 Terraform으로 AWS 인프라를 구성하고 관리하며 DevOps 역량을 넓혀가고 있습니다.',
    '백엔드 개발자로서 전문성을 꾸준히 쌓고, 더 나은 개발 방식을 고민합니다. AI도 개발에 적극 활용하되, 제안된 내용은 직접 검토해 적용합니다. 배운 내용과 문제 해결 경험을 기록하고 공유하며 동료들과 함께 성장하고자 합니다.',
  ],

  latestUpdated: latestUpdatedAt,
};

export default introduce;

import { ProjectPayload } from '../types/project';

const sideProject: ProjectPayload = {
  disable: false,
  list: (
    [
      {
        title: '피트니스 서비스 회원 시스템 통합 플랫폼 구축',
        where: 'Side | Backend & Infra',
        startedAt: '2026-08',
        architectureImage: '/resume_infra.svg',
        descriptions: [
          {
            content:
              '서비스별로 분산된 회원 관리 기능과 관리자 메뉴를 한곳에서 사용할 수 있도록 통합 어드민 개발 중',
          },
          {
            content:
              '개발 환경과 운영 환경을 독립적으로 관리하도록 Terraform state를 분리하고, 인프라 역할별로 스택 구성',
          },
          {
            content:
              'GitHub Actions로 Terraform Plan/Apply를 자동화하고, PR 변경 사항 검토와 운영 환경 적용 전 승인 절차 구성',
          },
        ],
      },
      {
        title: 'Kubernetes와 ArgoCD 기반 GitOps 배포 환경 구축',
        name: 'kubernetes-gitops',
        where: 'Side | Infra',
        startedAt: '2025-02',
        descriptions: [
          {
            content: 'ArgoCD 선언형 배포로 dev/staging/prod 멀티 환경 애플리케이션 관리',
            weight: 'MEDIUM',
          },
          { content: 'Helm 차트로 order-service, user-service 배포 템플릿 표준화' },
          { content: 'GitHub Repository', href: 'https://github.com/ym1085/kubernetes-gitops' },
        ],
      },
      {
        title: '농산물 판매 플랫폼 백엔드 설계 및 구현',
        name: 'farm-market-platform',
        where: 'Side | Backend',
        startedAt: '2025-01',
        descriptions: [
          {
            content: 'Spring Boot 3.x 백엔드를 core / api-server 멀티모듈로 설계, 관심사 분리',
            weight: 'MEDIUM',
          },
          { content: '회원/주문/상품/결제 도메인 모델링' },
          {
            content:
              'Spring Data JPA + QueryDSL 데이터 접근, 전역 예외/검증 응답 체계 및 Service/Controller 테스트 작성',
          },
          { content: 'GitHub Repository', href: 'https://github.com/ym1085/farm-market-platform' },
        ],
      },
    ] satisfies ProjectPayload['list']
  )
    // 내용은 보존하고 이력서 노출만 제외한다.
    .filter(
      (project) => project.name !== 'kubernetes-gitops' && project.name !== 'farm-market-platform',
    ),
};

export default sideProject;

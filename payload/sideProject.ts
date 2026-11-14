import { ProjectPayload } from '../types/project';

const sideProject: ProjectPayload = {
  disable: false,
  list: (
    [
      {
        title: '피트니스 서비스 회원 시스템 통합 플랫폼 구축',
        where: 'Backend & Infra',
        startedAt: '2026-08',
        architectureImage: '/resume_infra.svg',
        descriptions: [
          {
            content: 'PT 수업 현황과 회원 목록 조회 API 개발 및 관리자 화면 연동',
          },
          {
            content: 'PT, OT, 라커 테이블 설계 및 Flyway 마이그레이션 작성',
          },
          {
            content: '개발 및 운영 환경의 AWS 공통 구성을 Terraform 모듈로 관리',
          },
          {
            content: 'GitHub Actions로 백엔드와 관리자 API의 CI/CD 구축',
          },
          {
            content: 'Terraform Plan 검증으로 주요 리소스 삭제와 교체 차단',
          },
        ],
        skillKeywords: [
          'Java',
          'Spring Boot',
          'MyBatis',
          'MariaDB',
          'Flyway',
          'AWS',
          'Terraform',
          'GitHub Actions',
        ],
      },
      {
        title: 'Kubernetes와 ArgoCD 기반 GitOps 배포 환경 구축',
        name: 'kubernetes-gitops',
        where: 'Infra',
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
        where: 'Backend',
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

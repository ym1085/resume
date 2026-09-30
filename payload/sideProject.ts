import { ProjectPayload } from '../types/project';

const sideProject: ProjectPayload = {
  disable: false,
  list: (
    [
      {
        title: '피트니스 서비스 회원 시스템 통합 플랫폼 구축',
        where: 'Side | Backend & Infra',
        overview:
          '분리 운영되던 피트니스 서비스의 회원/관리자 시스템을 단일 어드민으로 통합하는 프로젝트입니다. 스케줄, 회원/강사, 수강권 등 핵심 도메인의 백엔드를 개발하고, Terraform 기반 AWS 인프라와 GitOps 배포 환경을 설계 및 구축합니다.',
        startedAt: '2026-08',
        architectureImage: '/aws.png',
        descriptions: [
          {
            content:
              '분리 운영되던 서비스별 회원, 관리자 도메인을 분석하고 통합 어드민 기준으로 정리',
          },
          {
            content:
              'dev/prod 환경별 Terraform state를 독립 관리하는 역할별 스택 구조 설계',
          },
          {
            content:
              'GitHub Actions 기반 Terraform Plan/Apply 워크플로 자동화, PR에서 인프라 변경 사항을 검토하고 prod 적용 전 승인 단계를 거치도록 구성',
          },
        ],
      },
      {
        title: '신규 서비스 AWS 인프라 IaC 구축 및 다중 환경 관리',
        where: 'Side | Infra',
        overview:
          'AWS 인프라 구성을 코드로 관리하기 위해 진행한 개인 프로젝트입니다. 신규 Commerce 서비스 AWS 인프라를 Terraform으로 처음부터 구축하고 dev/stg/prod 환경을 분리 구성했습니다.',
        startedAt: '2026-04',
        endedAt: '2026-06',
        descriptions: [
          {
            content:
              'VPC, ELB, ECS, IAM 등 주요 리소스의 Terraform 모듈화로 환경 간 중복 제거',
          },
          {
            content:
              'network, ecr, elb, compute 계층별 스택 분리로 계층 단위 독립 배포 구조 구성',
          },
          {
            content:
              '콘솔 수동 작업의 Terraform 코드화로 인프라 변경 이력 관리',
          },
          {
            content: 'GitHub Repository',
            href: 'https://github.com/ym1085/terraform-provisioning',
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

import { ProjectPayload } from '../types/project';

const sideProject: ProjectPayload = {
  disable: false,
  list: [
    {
      title: 'Terraform 기반 AWS 인프라 구축 및 환경 관리',
      where: '개인 (Personal) | Infra',
      startedAt: '2026-04',
      descriptions: [
        {
          content: 'E-commerce AWS 인프라를 Terraform으로 구성, dev/stg/prod 환경 분리 관리',
          weight: 'MEDIUM',
        },
        { content: 'VPC, ELB, EC2/ECS, ECR, IAM, S3, Route53 등을 재사용 가능한 모듈로 설계' },
        { content: 'global → network → ecr → elb → compute → cicd 순의 스택 의존성 구조로 배포 자동화' },
        { content: 'GitHub Repository', href: 'https://github.com/ym1085/sandbox-tf-provisioning' },
      ],
    },
    {
      title: 'Kubernetes와 ArgoCD 기반 GitOps 배포 환경 구축',
      where: '개인 (Personal) | Infra',
      startedAt: '2025-02',
      descriptions: [
        {
          content: 'ArgoCD 선언형 배포로 dev/staging/prod 멀티 환경 애플리케이션 관리',
          weight: 'MEDIUM',
        },
        { content: 'Helm 차트로 order-service, user-service 배포 템플릿 표준화' },
        { content: 'GitHub Repository', href: 'https://github.com/ym1085/sandbox-k8s-gitops' },
      ],
    },
    {
      title: '농산물 판매 플랫폼 백엔드 설계 및 구현',
      where: '개인 (Personal) | Backend',
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
        { content: 'GitHub Repository', href: 'https://github.com/ym1085/ecommerce-api' },
      ],
    },
  ],
};

export default sideProject;

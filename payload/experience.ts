import { ExperiencePayload } from '../types/experience';

const experience: ExperiencePayload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '퍼닌 (Funin)',
      positions: [
        {
          title: 'Backend & Cloud Engineer',
          startedAt: '2021-12',
          descriptions: [],
          projects: [
            {
              title: '검색 서비스 AWS 인프라 운영 및 비용 최적화',
              startedAt: '2023-08',
              descriptions: [
                {
                  content:
                    'EC2 약 50대, ECS 서비스 6개 운영 및 Auto Scaling과 멀티 AZ로 가용성 확보',
                },
                {
                  content:
                    '사용률 지표 기반으로 EC2와 ECS 사양을 축소해 월 약 800만 원 규모 비용 절감',
                },
                {
                  content:
                    'STG 환경을 업무 시간 외 자동 중지해 일 가동 시간 약 60% 단축(24시간 → 9.5시간)',
                },
              ],
              skillKeywords: [
                'EC2',
                'ECS Fargate',
                'CloudWatch',
                'Compute Optimizer',
                'Trusted Advisor',
                'EventBridge',
                'Lambda',
                'Shell Script',
              ],
            },
            {
              title: 'IDC 검색 시스템 AWS 마이그레이션',
              startedAt: '2023-01',
              endedAt: '2023-07',
              descriptions: [
                {
                  content:
                    '트래픽 단계적 전환으로 IDC 검색 API를 ECS Fargate로 무중단 이전',
                },
                {
                  content:
                    'EC2 기반 Elasticsearch 클러스터 구축 및 문서 30억 건 이상 마이그레이션',
                },
                {
                  content: 'Jenkins CI/CD 파이프라인 구축으로 배포 자동화',
                },
                {
                  content: 'Prometheus, Grafana 통합 모니터링과 SNS/Slack 알림 체계 구축',
                },
                {
                  content: 'nGrinder 부하 테스트로 검색 API 최대 처리량 측정 및 가용성 검증',
                },
              ],
              skillKeywords: [
                'EC2',
                'ECS Fargate',
                'Jenkins',
                'Prometheus',
                'Grafana',
                'Elasticsearch',
                'nGrinder',
              ],
            },
            {
              title: '대규모 검색/추천 플랫폼 백엔드 개발 및 운영',
              startedAt: '2021-12',
              descriptions: [
                {
                  content:
                    '사용자 청취 이력을 분석해 선호 아티스트를 제공하는 API 개발, 주간 사용자 130만 명 기준 캐시 용량 산정',
                },
                {
                  content:
                    'AI Agent LLM 비용 절감을 위한 OpenSearch kNN 벡터 검색 API 개발',
                },
                {
                  content:
                    '공연 검색 및 자동완성 API 개발, 기존 분석기를 활용한 검색 랭킹 설계',
                },
                {
                  content:
                    '연말 자정 Elasticsearch Search Rate 급증(7,000 → 20,000)에 따른 응답 지연을 ElastiCache 검색 결과 캐싱으로 개선, 이듬해 피크 구간 지연 해소',
                },
                {
                  content: '일 1,200만 건의 검색 로그를 수집하는 ELK 파이프라인 구축',
                },
              ],
              skillKeywords: [
                'Java',
                'Spring Boot',
                'Elasticsearch',
                'OpenSearch',
                'ElastiCache',
                'MySQL',
                'MS-SQL',
                'Logstash',
                'Filebeat',
                'Shell Script',
              ],
            },
          ],
        },
      ],
    },
    {
      title: '게임덱스 (Gamedex)',
      positions: [
        {
          title: 'Backend Engineer',
          startedAt: '2020-04',
          endedAt: '2021-06',
          descriptions: [],
          projects: [
            {
              title: '게임 사전예약 및 사내 인트라넷 개발',
              startedAt: '2020-04',
              endedAt: '2021-06',
              descriptions: [
                {
                  content: '한/영/일/중 다국어 사전예약 이벤트 페이지 API 개발 및 DB 설계',
                },
                {
                  content: 'JavaScript/jQuery를 활용한 사전예약 페이지와 백엔드 API 연동',
                },
                {
                  content:
                    '사내 인트라넷 게시판, 댓글, 첨부파일 기능 개발 및 DB 설계부터 화면 연동까지 담당',
                },
              ],
              skillKeywords: [
                'Java',
                'Spring',
                'MyBatis',
                'JavaScript',
                'jQuery',
                'MySQL',
                'MS-SQL',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default experience;

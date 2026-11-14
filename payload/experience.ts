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
                    'EC2 약 50대, ECS 서비스 5개 운영 및 Auto Scaling과 멀티 AZ로 가용성 확보',
                },
                {
                  content:
                    '사용률 지표 기반으로 EC2와 ECS 사양을 축소해 월 약 800만 원 규모 비용 절감',
                },
                {
                  content:
                    'STG 자동 중지로 일 가동 시간 약 60% 단축(24 → 9.5시간)',
                  descriptions: [
                    {
                      content:
                        'EC2는 EventBridge와 Lambda, ECS는 예약 작업으로 가동 시간 제어',
                    },
                  ],
                },
                {
                  content:
                    'CloudWatch 경보와 SNS로 EC2, ECS 리소스 이상 징후 알림',
                },
                {
                  content: 'ISMS 인증 대응을 위한 서버 보안 점검 및 조치 수행',
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
                  content: 'IDC 검색 API를 AWS ECS Fargate로 이전',
                  descriptions: [
                    {
                      content: 'IDC Nginx에서 AWS로 트래픽을 단계적으로 전환해 무중단 이관',
                    },
                  ],
                },
                {
                  content:
                    'EC2 기반 Elasticsearch 클러스터 구축 및 문서 30억 건 이상 마이그레이션',
                  descriptions: [
                    {
                      content: '증분 색인을 IDC와 AWS에 이중 적재해 전환 기간 데이터 정합성 유지',
                    },
                  ],
                },
                {
                  content: 'Prometheus, Grafana로 검색 API 모니터링 및 Slack 알림 구축',
                  descriptions: [
                    {
                      content: '여러 단계를 거쳐 전달되던 장애 알림을 Slack으로 직접 수신해 인지 시간 단축',
                    },
                  ],
                },
                {
                  content: 'Jenkins CI/CD 파이프라인 구축으로 배포 자동화',
                },
              ],
              skillKeywords: [
                'EC2',
                'ECS Fargate',
                'Jenkins',
                'Prometheus',
                'Grafana',
                'Elasticsearch',
              ],
            },
            {
              title: '대규모 검색/추천 플랫폼 백엔드 개발 및 운영',
              startedAt: '2021-12',
              descriptions: [
                {
                  content: '회원의 스트리밍 이력을 바탕으로 음악 앱 홈에 추천곡을 제공하는 API 개발',
                  descriptions: [
                    {
                      content:
                        '최근 재생곡과 비슷한 곡, 자주 듣는 아티스트의 인기곡, 선호 장르의 신곡 선별',
                    },
                    {
                      content: 'ElastiCache로 회원별 추천 목록을 주간 캐싱해 Elasticsearch 조회 감소',
                    },
                    {
                      content: '주간 사용자 130만 명을 기준으로 캐시 용량 산정',
                    },
                  ],
                },
                {
                  content: 'AI Agent의 LLM 반복 호출을 줄이기 위한 벡터 검색 API 개발',
                  descriptions: [
                    {
                      content: 'OpenSearch kNN으로 유사 요청을 검색해 기존 응답을 재사용',
                    },
                  ],
                },
                {
                  content: '한국어, 영어, 일본어 공연 검색 및 자동완성 API 개발',
                  descriptions: [
                    { content: '공연명과 등록 키워드를 검색하고 공연명 완전 일치에 최고 가중치 적용' },
                    { content: '한글 자소로 자동완성 후보를 찾고 화면 언어에 맞는 검색어 제공' },
                  ],
                },
                {
                  content: '연말 자정 검색 API 지연에 대응해 ElastiCache에 검색 결과 캐싱',
                  descriptions: [
                    {
                      content: 'Elasticsearch 피크 Search Rate 전년 대비 약 20% 감소(초당 2.5만 → 2만)',
                    },
                    {
                      content: '이듬해 자정 전후 검색엔진 최대 지연 시간 5ms, API 지연 재발 없음',
                    },
                  ],
                },
                {
                  content: '일 1,200만 건의 검색 로그를 수집하는 ELK 파이프라인 구축',
                  descriptions: [
                    { content: 'Filebeat로 수집한 검색어 로그를 Logstash에서 가공해 Elasticsearch에 색인' },
                    { content: '서비스별 로그 파일을 압축해 S3에 자동 보관' },
                  ],
                },
                {
                  content: '신규 API 오픈 전 STG 환경에서 nGrinder 부하 테스트로 최대 처리량 검증',
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
                'nGrinder',
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
                  content: '4개 언어 게임 사전예약 서비스의 DB 설계 및 API 개발',
                },
                {
                  content: '사전예약 현황을 확인하는 내부 통계 CMS 개발',
                },
                {
                  content: 'JavaScript와 jQuery를 활용한 사전예약 페이지 API 연동',
                },
                {
                  content: '사내 인트라넷 DB 설계 및 게시판, 댓글, 첨부파일 기능 개발',
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

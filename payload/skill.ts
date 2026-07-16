import { SkillPayload, SkillItem } from '../types/skill';

const languages: SkillItem = {
  category: 'Languages',
  items: [{ title: 'Java' }, { title: 'JavaScript' }, { title: 'HTML/CSS' }],
};

const frameworks: SkillItem = {
  category: 'Frameworks & Libraries',
  items: [{ title: 'Spring Boot' }, { title: 'MyBatis' }, { title: 'jQuery' }],
};

// Cloud/Search/Data/미들웨어를 하나로 통합
// (Search 카테고리를 없애고 Elasticsearch 및 OpenSearch를 이 안으로 흡수, AWS 세부 서비스는 AWS로 대표)
const infraDatabases: SkillItem = {
  category: 'Infrastructure & Databases',
  items: [
    { title: 'AWS' },
    { title: 'Docker' },
    { title: 'nginx' },
    { title: 'Elasticsearch' },
    { title: 'OpenSearch' },
    { title: 'Redis' },
    { title: 'MySQL' },
    { title: 'MS-SQL' },
  ],
};

// 모니터링/로깅 도구를 Observability로 별도 분류
const observability: SkillItem = {
  category: 'Observability',
  items: [{ title: 'Grafana' }, { title: 'Prometheus' }, { title: 'CloudWatch' }, { title: 'ELK' }],
};

const tools: SkillItem = {
  category: 'Tools & IDEs',
  items: [{ title: 'Git' }, { title: 'GitHub' }, { title: 'GitLab' }, { title: 'Jenkins' }],
};

const misc: SkillItem = {
  category: 'Misc',
  items: [{ title: 'DevOps' }],
};

const skill: SkillPayload = {
  disable: false,
  skills: [languages, frameworks, infraDatabases, observability, tools, misc],
};

export default skill;

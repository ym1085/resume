import { SkillPayload, SkillItem } from '../types/skill';

const languages: SkillItem = {
  category: 'Languages',
  items: [{ title: 'Java' }, { title: 'JavaScript' }, { title: 'HTML/CSS' }],
};

const frameworks: SkillItem = {
  category: 'Frameworks & Libraries',
  items: [{ title: 'Spring Boot' }, { title: 'MyBatis' }, { title: 'jQuery' }],
};

// Cloud/Search/Data/미들웨어 + 모니터링/로깅(Observability)을 하나로 통합
// (Search 카테고리를 없애고 Elasticsearch 및 OpenSearch를 흡수, AWS 세부 서비스는 AWS로 대표)
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
    { title: 'Grafana' },
    { title: 'Prometheus' },
    { title: 'CloudWatch' },
    { title: 'ELK' },
  ],
};

const tools: SkillItem = {
  category: 'Tools & IDEs',
  items: [{ title: 'Git' }, { title: 'GitHub' }, { title: 'GitLab' }, { title: 'Notion' }],
};

const misc: SkillItem = {
  category: 'Others',
  items: [{ title: 'DevOps' }, { title: 'Jenkins' }],
};

const skill: SkillPayload = {
  disable: false,
  skills: [languages, frameworks, infraDatabases, tools, misc],
};

export default skill;

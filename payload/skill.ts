import { SkillPayload, SkillItem } from '../types/skill';

const backend: SkillItem = {
  category: 'Backend',
  items: [{ title: 'Java' }, { title: 'Spring Boot' }, { title: 'MyBatis' }],
};

const databasesSearch: SkillItem = {
  category: 'Database & Search',
  items: [
    { title: 'MySQL' },
    { title: 'MS-SQL' },
    { title: 'Redis' },
    { title: 'Elasticsearch' },
    { title: 'OpenSearch' },
  ],
};

const infrastructure: SkillItem = {
  category: 'Infrastructure',
  items: [
    { title: 'AWS' },
    { title: 'Docker' },
    { title: 'Terraform' },
    { title: 'nginx' },
  ],
};

const devops: SkillItem = {
  category: 'DevOps & Monitoring',
  items: [
    { title: 'DevOps' },
    { title: 'Jenkins' },
    { title: 'Prometheus' },
    { title: 'Grafana' },
    { title: 'CloudWatch' },
    { title: 'ELK' },
  ],
};

const tools: SkillItem = {
  category: 'Tools & Collaboration',
  items: [{ title: 'Git' }, { title: 'GitHub' }, { title: 'GitLab' }, { title: 'Notion' }],
};

const frontend: SkillItem = {
  category: 'Frontend',
  items: [{ title: 'JavaScript' }, { title: 'HTML/CSS' }, { title: 'jQuery' }],
};

const skill: SkillPayload = {
  disable: false,
  skills: [backend, databasesSearch, infrastructure, devops, tools, frontend],
};

export default skill;

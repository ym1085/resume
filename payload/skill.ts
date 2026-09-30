import { SkillPayload, SkillItem } from '../types/skill';

const backend: SkillItem = {
  category: 'Backend',
  items: [
    { title: 'Java' },
    { title: 'Spring Boot' },
    { title: 'MyBatis' },
    { title: 'Swagger' },
    { title: 'Spring REST Docs' },
  ],
};

const databasesSearch: SkillItem = {
  category: 'Database & Search',
  items: [
    { title: 'MySQL' },
    { title: 'MS-SQL' },
    { title: 'Elasticsearch' },
    { title: 'OpenSearch' },
    { title: 'ELK' },
  ],
};

const infrastructure: SkillItem = {
  category: 'Cloud & Infra',
  items: [
    { title: 'AWS' },
    { title: 'Docker' },
    { title: 'Nginx' },
    { title: 'Terraform', context: 'Personal' },
  ],
};

const devops: SkillItem = {
  category: 'CI/CD & Monitoring',
  items: [
    { title: 'Jenkins' },
    { title: 'Prometheus' },
    { title: 'Grafana' },
    { title: 'CloudWatch' },
  ],
};

const tools: SkillItem = {
  category: 'Tools & Collaboration',
  items: [
    { title: 'Git' },
    { title: 'GitHub' },
    { title: 'GitLab' },
    { title: 'nGrinder' },
    { title: 'Slack' },
    { title: 'Notion' },
  ],
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

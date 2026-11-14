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
    { title: 'MariaDB' },
    { title: 'Elasticsearch' },
    { title: 'OpenSearch' },
  ],
};

const infrastructure: SkillItem = {
  category: 'Infra & CI/CD',
  items: [
    { title: 'AWS' },
    { title: 'Docker' },
    { title: 'Nginx' },
    { title: 'Terraform', context: 'Personal' },
    { title: 'Jenkins' },
    { title: 'GitHub Actions' },
  ],
};

const monitoring: SkillItem = {
  category: 'Monitoring & Logging',
  items: [
    { title: 'Prometheus' },
    { title: 'Grafana' },
    { title: 'CloudWatch' },
    { title: 'Kibana' },
    { title: 'Logstash' },
    { title: 'Filebeat' },
  ],
};

const docsTesting: SkillItem = {
  category: 'Docs & Testing',
  items: [{ title: 'Swagger' }, { title: 'Spring REST Docs' }, { title: 'nGrinder' }],
};

const tools: SkillItem = {
  category: 'Tools',
  items: [{ title: 'Git' }, { title: 'GitHub' }, { title: 'GitLab' }, { title: 'Jira' }],
};

const frontend: SkillItem = {
  category: 'Frontend',
  items: [{ title: 'HTML/CSS' }, { title: 'JavaScript' }, { title: 'jQuery' }],
};

const skill: SkillPayload = {
  disable: false,
  skills: [backend, databasesSearch, infrastructure, monitoring, docsTesting, tools, frontend],
};

export default skill;

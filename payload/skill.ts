import { SkillPayload, SkillItem } from '../types/skill';

// 항목 하나 = 화면의 불릿 한 줄 (관련 기술을 쉼표로 묶는다)
const backend: SkillItem = {
  category: 'Backend',
  items: [{ title: 'Java, Spring Boot, MyBatis' }, { title: 'Swagger, Spring REST Docs' }],
};

const databasesSearch: SkillItem = {
  category: 'Database & Search',
  items: [{ title: 'MySQL, MS-SQL' }, { title: 'Elasticsearch, OpenSearch, ELK' }],
};

const infrastructure: SkillItem = {
  category: 'Cloud & Infra',
  items: [{ title: 'AWS, Docker, Nginx, Terraform(Personal)' }],
};

const devops: SkillItem = {
  category: 'CI/CD & Monitoring',
  items: [{ title: 'Jenkins, Prometheus, Grafana, CloudWatch' }],
};

const tools: SkillItem = {
  category: 'Tools & Collaboration',
  items: [{ title: 'Git, GitHub, GitLab' }, { title: 'nGrinder, Slack, Notion' }],
};

const frontend: SkillItem = {
  category: 'Frontend',
  items: [{ title: 'JavaScript, HTML/CSS, jQuery' }],
};

const skill: SkillPayload = {
  disable: false,
  skills: [backend, databasesSearch, infrastructure, devops, tools, frontend],
};

export default skill;

import { GlobalPayload } from '../types/global';

const favicon = '/favicon.ico';
const previewImage = 'https://ym1085.github.io/resume/preview.jpg';

const title = '김영민 | Backend Engineer';
const description =
  '대규모 검색/추천 플랫폼과 AWS 인프라를 다루는 5년+ 경력의 백엔드 엔지니어 김영민의 이력서입니다.';

export const _global: GlobalPayload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'Youngmin Kim Resume',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Youngmin',
        lastName: 'Kim',
        username: 'ym1085',
        gender: 'male',
      },
    },
  },
  jsonLd: {
    name: 'Youngmin Kim',
    jobTitle: 'Backend Engineer',
    worksFor: '퍼닌 (Funin)',
    url: 'https://ym1085.github.io/resume',
    sameAs: ['https://github.com/ym1085', 'https://www.linkedin.com/in/ym1085'],
    knowsAbout: ['Elasticsearch', 'OpenSearch', 'AWS', 'Java', 'Spring Boot'],
  },
  sectionOrder: ['introduce', 'highlight', 'experience', 'project', 'sideProject', 'skill', 'education', 'etc'],
};

import { faEnvelope, faGlobe, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { ProfilePayload } from '../types/profile';

// 프로필 사진: public/profile.jpg 에 본인 사진 파일을 넣으면 이 경로로 교체된다
const image = '/profile.jpg';

const profile: ProfilePayload = {
  disable: false,

  image,
  name: {
    title: '김영민',
    small: 'Youngmin Kim',
  },
  contact: [
    {
      title: 'youngmin1085@gmail.com',
      link: 'mailto:youngmin1085@gmail.com',
      icon: faEnvelope,
    },
    {
      link: 'https://github.com/ym1085',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/ym1085',
      icon: faLinkedin,
    },
    {
      title: 'sw-ym.tistory.com',
      link: 'https://sw-ym.tistory.com',
      icon: faGlobe,
    },
  ],
  notice: {
    title: 'solve problems, share knowledge, grow together',
    icon: faSeedling,
  },
  tagline: 'Backend & Search Platform & Cloud Infrastructure',
  headings: [
    { value: '5+', label: 'Years of Experience' },
    { value: '1억+', label: 'Annual Cost Saved' },
    { value: '190+', label: 'Tech Posts' },
  ],
  ctas: [
    {
      label: 'Email Me',
      link: 'mailto:youngmin1085@gmail.com',
      icon: faEnvelope,
      variant: 'primary',
    },
    {
      label: 'GitHub',
      link: 'https://github.com/ym1085',
      icon: faGithub,
      variant: 'secondary',
    },
  ],
};

export default profile;

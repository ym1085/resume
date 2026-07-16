import { EducationPayload } from '../types/education';

const education: EducationPayload = {
  disable: false,

  list: [
    {
      title: '이젠아카데미 (Ezen Academy)',
      subTitle: 'Java 기반 앱/웹 개발 과정 수료',
      startedAt: '2019-08',
      endedAt: '2020-02',
    },
    {
      title: '중앙대학교 일반대학원 (Chung-Ang University Graduate School)',
      subTitle: '스포츠 영상분석학과 석사 중퇴',
      startedAt: '2017-03',
      endedAt: '2017-09',
    },
    {
      title: '중앙대학교 (Chung-Ang University)',
      subTitle: '체육대학 스포츠산업학과 학사',
      startedAt: '2013-03',
      endedAt: '2017-02',
    },
  ],
};

export default education;

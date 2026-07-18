import { EtcPayload } from '../types/etc';

// 이 섹션은 component/etc/index.tsx 에서 제목을 'CERTIFICATES' 로 변경해 자격증 용도로 사용한다
// 자격증은 ETC 섹션(military.ts)으로 통합해 현재는 비활성화 상태
const etc: EtcPayload = {
  disable: true,

  list: [
    {
      title: 'AWS Certified Cloud Practitioner (CLF-C02)',
      subTitle: 'Amazon Web Services',
      startedAt: '2024-11',
      endedAt: '2027-11',
    },
  ],
};

export default etc;

import { EtcPayload } from '../types/etc';

// ETC 섹션: etc(EtcSection) 컴포넌트를 재사용하되 제목만 'ETC'로 렌더링한다
// 자격증과 병역을 함께 담고, 이후 봉사활동 등 기타 이력을 여기에 추가한다
const military: EtcPayload = {
  disable: false,

  list: [
    {
      title: 'AWS Certified Cloud Practitioner (CLF-C02)',
      subTitle: 'Amazon Web Services',
      startedAt: '2024-11',
      endedAt: '2027-11',
    },
    {
      title: '의무경찰 병장 만기전역',
      subTitle: '대한민국 경찰청',
      startedAt: '2017-10',
      endedAt: '2019-06',
    },
  ],
};

export default military;

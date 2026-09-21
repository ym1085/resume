import { RowDescription } from './row';
import { ListSectionPayload } from './common';

/**
 * ### Sample Rendering
 *
 * ![image](https://user-images.githubusercontent.com/8033320/78034257-726f1480-73a2-11ea-9bbe-fc9bde4551d1.png)
 *
 * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/project.ts
 */
export interface ProjectPayload extends ListSectionPayload {
  /** ### 프로젝트 리스트 */
  list: ProjectItem[];
}

export interface ProjectItem {
  /** ### 프로젝트 제목 */
  title: string;

  /**
   * ### 왼쪽 라벨 (예: 저장소 이름)
   *
   * @description 지정 시 왼쪽 칸에 날짜 대신 이 값을 표시한다. `undefined` 이면 기간을 표시한다.
   */
  name?: string;

  /** ### 어디서 수행했는지 (or subtitle) */
  where: string;

  /**
   * ### 프로젝트 한 줄 설명 (Overview)
   *
   * @description 지정 시 제목 아래에 GitHub Note 스타일 콜아웃 박스로 표시한다.
   */
  overview?: string;

  /**
   * ### 프로젝트 시작일
   *
   * @format YYYY-MM
   * @example "2018-02"
   */
  startedAt: string;

  /**
   * ### 프로젝트 종료일
   *
   * @format YYYY-MM
   * @example "2021-02"
   * @description `undefined` 일 경우 나타나지 않는다.
   */
  endedAt?: string;

  /**
   * ### 프로젝트 설명
   */
  descriptions: RowDescription[];

  /**
   * ### 프로젝트에서 사용한 스킬 키워드
   *
   * @description 지정 시 설명 하단에 배지로 표시한다.
   */
  skillKeywords?: string[];

  /**
   * ### 아키텍처 다이어그램 이미지 경로
   *
   * @description 지정 시 "아키텍처 보기" 토글로 펼쳐 볼 수 있게 표시한다.
   * public/ 하위 파일은 `/` 로 시작하는 경로를 넣는다. (예: '/fms-architecture.png')
   */
  architectureImage?: string;
}

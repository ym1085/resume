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
}

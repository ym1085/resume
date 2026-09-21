import { RowPayload } from '../../types/row';
import { CommonDescription } from './CommonDescription';

// public/ 파일은 assetPrefix가 자동으로 안 붙으므로 직접 붙인다 (index.tsx와 동일)
function resolveAssetSrc(src: string): string {
  const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? '';
  return src.startsWith('/') ? `${assetPrefix}${src}` : src;
}

// 네이티브 popover는 top layer에 렌더링되어 부모 transform(SectionAnimate)의 영향을 받지 않는다
function lightboxId(src: string): string {
  return `arch-${src.replace(/[^a-zA-Z0-9]/g, '')}`;
}

function ArchitectureToggle({ src }: { src: string }) {
  const resolved = resolveAssetSrc(src);
  const id = lightboxId(src);
  return (
    <>
      <details className="architecture-toggle" open>
        <summary>아키텍처 보기</summary>
        <button type="button" popoverTarget={id} className="architecture-thumb">
          <img
            className="architecture-image"
            src={resolved}
            alt="Architecture diagram"
            loading="lazy"
          />
        </button>
      </details>
      <div
        id={id}
        popover="auto"
        className="architecture-lightbox"
        onClick={(e) => e.currentTarget.hidePopover()}
      >
        <img src={resolved} alt="Architecture diagram" />
      </div>
    </>
  );
}

export function CommonRows({ index, payload }: { payload: RowPayload; index: number }) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <div className="split-row">
        <div className="split-left">
          <h4 className="experience-period">{left.title}</h4>
          {left.subTitle ? <div>{left.subTitle}</div> : ''}
        </div>
        <div>
          {right.title ? <h4>{right.title}</h4> : ''}
          {right.subTitle ? <i className="experience-position-title">{right.subTitle}</i> : ''}
          {right.overview ? (
            <div className="callout callout--note">
              <div className="callout-body">{right.overview}</div>
            </div>
          ) : (
            ''
          )}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          ) : (
            ''
          )}
          {right.skillKeywords && right.skillKeywords.length > 0 ? (
            <div className="experience-keywords">
              {right.skillKeywords.map((keyword, i) => (
                <span key={i.toString()} className="tag tag--accent">
                  {keyword}
                </span>
              ))}
            </div>
          ) : (
            ''
          )}
          {right.architectureImage ? <ArchitectureToggle src={right.architectureImage} /> : ''}
        </div>
      </div>
    </div>
  );
}

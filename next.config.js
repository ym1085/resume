/* eslint-disable @typescript-eslint/no-var-requires */
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

// homepage 경로에서 배포 prefix를 파생한다(예: .../resume -> '/resume')
// _next 자산은 assetPrefix가 자동으로 처리하지만, public/ 이미지를 <img>로 직접
// 참조할 때는 prefix가 안 붙으므로 이 값을 env로 노출해 컴포넌트에서 붙인다
const assetPrefix = (() => {
  if (NODE_ENV === 'production' && homepage) {
    try {
      const { pathname } = new URL(homepage);
      if (pathname !== '/') {
        return pathname;
      }
      return '';
    } catch {
      return '';
    }
  }
  return '';
})();

module.exports = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  assetPrefix,
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: assetPrefix,
  },
};

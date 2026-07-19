import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import { NextComponentType } from 'next';

// FontAwesome CSS를 정적으로 import하므로 런타임 자동 주입을 끈다 (초기 렌더 시 아이콘 깜빡임 방지)
config.autoAddCss = false;

export default function YosumeApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
}) {
  return <Component {...pageProps} />;
}

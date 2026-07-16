import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { ShowMoreWrapper } from '../common/ShowMoreWrapper';
import { RowPayload } from '../../types/row';
import Util from '../common/Util';
import { EtcPayload, EtcItem } from '../../types/etc';
import { Section } from '../common/Section';

type Payload = EtcPayload;
type Item = EtcItem;

export function EtcSection({ payload, title = 'CERTIFICATES' }: { payload: Payload; title?: string }) {
  return (
    <Section payload={payload}>
      <EtcContent payload={payload} title={title} />
    </Section>
  );
}

function EtcContent({ payload, title }: { payload: Payload; title: string }) {
  return (
    <CommonSection title={title}>
      <EtcRow payload={payload} />
    </CommonSection>
  );
}

function EtcRow({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <EmptyRowCol>
      <ShowMoreWrapper showMoreCount={payload.showMoreCount}>
        {payload.list.map((item, index) => {
          return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
        })}
      </ShowMoreWrapper>
    </EmptyRowCol>
  );
}

function serialize(item: Item): RowPayload {
  return {
    left: {
      title: Util.formatDateRange(item.startedAt, item.endedAt),
    },
    right: {
      ...item,
    },
  };
}

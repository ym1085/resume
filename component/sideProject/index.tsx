import ProjectRow from '../project/row';
import { CommonSection } from '../common/CommonSection';
import { ProjectPayload } from '../../types/project';
import { Section } from '../common/Section';

type Payload = ProjectPayload;

export function SideProjectSection({ payload }: { payload: Payload }) {
  return (
    <Section payload={payload}>
      <SideProjectContent payload={payload} />
    </Section>
  );
}

function SideProjectContent({ payload }: { payload: Payload }) {
  return (
    <CommonSection title="SIDE PROJECTS">
      <ProjectRow payload={payload} hidePeriod />
    </CommonSection>
  );
}

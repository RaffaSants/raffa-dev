import { FlexHeader } from '@/components/blocks/containers/header/flex';
import { NavPage } from '../../utils/navs';
import { OffCanvasProvider } from '@/contexts/offcanvas';
export const HeaderLayout = () => {
  return (
    <OffCanvasProvider>
      <FlexHeader
        alignx="between"
        aligny="center"
        height="7.5rem"
        padding="0 5%"
        position="sticky"
        top="0"
        zindex={10}
        bgcolor="tertiary"
      >
        <NavPage />
      </FlexHeader>
    </OffCanvasProvider>
  );
};

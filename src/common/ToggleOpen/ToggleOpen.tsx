import { FC, ReactElement, useRef } from "react";
import { Container, Content, ContentBox, Trigger } from "./ToggleOpen.styles";
import { usePosition } from "./usePosition";

interface ToggleOpenProps {
  open: boolean;
  onChange: (open: boolean) => void;
  trigger: ReactElement;
  children: ReactElement | string;
}

const ToggleOpen: FC<ToggleOpenProps> = ({
  open,
  onChange,
  trigger,
  children,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const position = usePosition(triggerRef, contentRef);

  return (
    <Container>
      <Trigger ref={triggerRef} onClick={() => onChange(!open)}>
        {trigger}
      </Trigger>
      <ContentBox open={open} position={position} className="">
        <Content ref={contentRef}>{children}</Content>
      </ContentBox>
    </Container>
  );
};

export default ToggleOpen;

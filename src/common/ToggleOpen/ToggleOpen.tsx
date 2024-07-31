import { FC, ReactElement, useRef } from "react";
import { Container, Content, ContentBox, Trigger } from "./ToggleOpen.styles";
import { usePosition } from "./usePosition";

interface ToggleOpenProps {
  open: boolean;
  onChange: (open: boolean) => void;
  trigger: ReactElement;
  children: ReactElement | string;
  className?: string;
}

const ToggleOpen: FC<ToggleOpenProps> = ({
  open,
  onChange,
  trigger,
  children,
  className,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const position = usePosition(triggerRef, contentRef);

  return (
    <Container className={className}>
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

import { FC, ReactElement, useRef } from "react";
import {
  Container,
  Content,
  ContentBox,
  Trigger,
} from "./ToggleVisibility.styles";
import { usePosition } from "./usePosition";

interface ToggleVisibilityProps {
  open: boolean;
  onChange: (open: boolean) => void;
  trigger: ReactElement;
  children: ReactElement | string;
  className?: string;
}

const ToggleVisibility: FC<ToggleVisibilityProps> = ({
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

export default ToggleVisibility;

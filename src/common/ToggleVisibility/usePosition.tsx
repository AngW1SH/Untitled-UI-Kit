import { RefObject, useCallback, useEffect, useState } from "react";
import { useHeight } from "./useHeight";

const EDGE_OFFSET = 30;

export const usePosition = (
  trigger: RefObject<HTMLElement>,
  content: RefObject<HTMLElement>
) => {
  const [position, setPosition] = useState<"top" | "bottom">("bottom");

  const contentHeight = useHeight(content);

  const updatePosition = useCallback(() => {
    if (!trigger.current || !content.current) return;

    const triggerOffset = trigger.current.getBoundingClientRect();

    if (
      window.innerHeight - triggerOffset.bottom - EDGE_OFFSET >
      contentHeight
    ) {
      setPosition("bottom");
      return;
    }

    if (triggerOffset.top - EDGE_OFFSET > contentHeight) {
      setPosition("top");
      return;
    }

    setPosition("bottom");
  }, [trigger, content, contentHeight]);

  useEffect(() => {
    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [updatePosition]);

  return position;
};

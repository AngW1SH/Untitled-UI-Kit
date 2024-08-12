import { RefObject, useCallback, useLayoutEffect, useState } from "react";

export const useHeight = (ref: RefObject<HTMLElement>) => {
  const [height, setHeight] = useState(0);

  const updateSize = useCallback(() => {
    if (ref.current) setHeight(ref.current.clientHeight);
  }, [ref]);

  useLayoutEffect(() => {
    let observer: ResizeObserver | undefined;

    const refCurrent = ref.current;

    if (ref.current) {
      observer = new ResizeObserver(updateSize);
      observer.observe(ref.current);
    }

    return () => {
      if (refCurrent) observer?.unobserve(refCurrent);
    };
  });

  return height;
};

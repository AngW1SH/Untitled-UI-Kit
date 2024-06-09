import { FC, ReactNode, SVGProps } from "react";

interface GenericProps extends SVGProps<SVGSVGElement> {
  children: ReactNode;
  viewBox: string;
  hasStroke?: boolean;
  hasFill?: boolean;
}

const Generic: FC<GenericProps> = ({
  children,
  viewBox,
  hasStroke = false,
  hasFill = true,
  ...svgProps
}) => {
  return (
    <svg
      {...svgProps}
      viewBox={viewBox}
      style={{
        ...(hasFill && { fill: "currentcolor" }),
        ...(hasStroke && { stroke: "currentcolor" }),
        ...svgProps.style,
      }}
    >
      {children}
    </svg>
  );
};

export default Generic;

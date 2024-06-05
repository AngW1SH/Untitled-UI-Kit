import { RuleSet, css } from "styled-components";
import { Size } from "./types";

export const sizeStyles: { [key in Size]: RuleSet<object> } = {
  xs: css`
    font-size: var(--xs-font-size);
    line-height: var(--xs-line-height);
  `,
  sm: css`
    font-size: var(--sm-font-size);
    line-height: var(--sm-line-height);
  `,
  md: css`
    font-size: var(--md-font-size);
    line-height: var(--md-line-height);
  `,
  lg: css`
    font-size: var(--lg-font-size);
    line-height: var(--lg-line-height);
  `,
  xl: css`
    font-size: var(--xl-font-size);
    line-height: var(--xl-line-height);
  `,
};

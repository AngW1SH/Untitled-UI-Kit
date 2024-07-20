import { FC, useId } from "react";
import {
  AdditionalElementsProps,
  InputProps,
  LabelProps,
  TooltipProps,
} from "./Base.types";
import {
  BaseInput,
  OuterContainer,
  InnerContainer,
  Label,
  BaseStyled,
  ErrorMessage,
  Hint,
  ErrorContainer,
} from "./Base.styles";
import { Error } from "@common/Icon";

export type BaseProps = InputProps &
  AdditionalElementsProps &
  LabelProps &
  TooltipProps;

const Base: FC<BaseProps> = ({
  label,
  placeholder,
  errorMessage,
  disabled,
  hint,
  error,
  outerLeft,
  outerRight,
  innerLeft,
  innerRight,
}) => {
  const id = useId();

  return (
    <BaseStyled>
      <Label htmlFor={id}>{label}</Label>
      <OuterContainer>
        <div>{outerLeft}</div>
        <InnerContainer error={error} disabled={disabled}>
          <div>{innerLeft}</div>
          <BaseInput placeholder={placeholder} disabled={disabled} id={id} />
          {error && (
            <ErrorContainer>
              <Error />
            </ErrorContainer>
          )}
          <div>{innerRight}</div>
        </InnerContainer>
        <div>{outerRight}</div>
      </OuterContainer>
      {hint && !errorMessage && <Hint>{hint}</Hint>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </BaseStyled>
  );
};

export default Base;

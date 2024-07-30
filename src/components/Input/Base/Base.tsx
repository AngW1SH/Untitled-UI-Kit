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
  OuterElement,
  InnerElement,
} from "./Base.styles";
import { Error } from "@common/Icon";

export type BaseProps = InputProps &
  AdditionalElementsProps &
  LabelProps &
  TooltipProps;

const Base: FC<BaseProps> = ({
  value,
  onChange,
  label,
  readOnly,
  placeholder,
  errorMessage,
  disabled,
  hint,
  type = "text",
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
        {!!outerLeft && <OuterElement side="left">{outerLeft}</OuterElement>}
        <InnerContainer
          error={error}
          disabled={disabled}
          $hasOuterLeft={!!outerLeft}
          $hasOuterRight={!!outerRight}
        >
          {!!innerLeft && <InnerElement side="left">{innerLeft}</InnerElement>}
          <BaseInput
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            disabled={disabled}
            id={id}
            type={type}
          />
          {error && (
            <ErrorContainer>
              <Error />
            </ErrorContainer>
          )}
          {!!innerRight && (
            <InnerElement side="right">{innerRight}</InnerElement>
          )}
        </InnerContainer>
        {!!outerRight && <OuterElement side="right">{outerRight}</OuterElement>}
      </OuterContainer>
      {hint && !errorMessage && <Hint>{hint}</Hint>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </BaseStyled>
  );
};

export default Base;

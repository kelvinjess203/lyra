import { HTMLAttributes } from "react";
import { CSSProperties } from "styled-components";
import { LabelValue } from "types/select";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  items: LabelValue<any>[];
  activeBackground?: string;
  defaultBackground?: string;
  value?: any;
  buttonStyle?: CSSProperties;
  onChange: (value: any) => void
}

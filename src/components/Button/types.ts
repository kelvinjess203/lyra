import { ElementType, ReactNode } from "react";
import type { PolymorphicComponentProps } from "util/polymorphic";

export interface BaseButtonProps {
  as?: "a" | "button" | ElementType;
  external?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;

  background?: string;
  width?: string;
}

export type ButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, BaseButtonProps>;

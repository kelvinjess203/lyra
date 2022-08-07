import { HTMLAttributes } from "react";


export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  isExpanded?: boolean;
  isCollapsible?: boolean;
  handleCollapsible: () => void
}


export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  isExpanded?: boolean;
  isCollapsible?: boolean;
  background?: string;
  border?: string;
  padding?: string;
}


import React, { HTMLAttributes } from "react";

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  columns: TableColumn[];
  data?: any[];
  onRowClick?: (event?: React.MouseEvent, rowData?: any) => void;
  renderExpand?: (item: any) => React.ReactNode;
  rowCollapsible?: boolean;
  balanceColumn?: boolean;
  isLoading?: boolean;
  noDataMessage?: string;

}

export interface TableColumn<T = any> {
  header: string;
  description?: string;
  docsLink?: string;
  formatCell?: (data: T) => any;
  width?: string;

  field: keyof T;
  key: keyof T;
}

export interface TableRowProps<T = any> {
  index: number;
  item: T;
  columns: TableColumn[];
  renderExpand?: (item: any) => React.ReactNode;
  rowCollapsible?: boolean;
}
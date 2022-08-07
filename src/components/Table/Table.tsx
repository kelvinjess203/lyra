import { CollapsibleIconButton } from "components/Styled";
import Tooltip from "components/Tooltip";
import React, { useCallback, useEffect, useState } from "react";
import {
  StyledTable,
  StyledTableHeader,
  StyledTableHeaderCell,
  StyledTableBody,
  StyledTableCell,
  StyledDescription,
  StyledExpandedRow,
  StyledNoData,
} from "./StyledTable";
import { TableProps, TableRowProps } from "./types";

import { ReactComponent as QuestionSvg } from "svg/question.svg";

const ReportTable: React.FC<TableProps> = ({
  columns,
  data,
  isLoading,
  renderExpand,
  rowCollapsible,
  balanceColumn,
  noDataMessage = "No Data",
}) => {
  const [displayedRows, setDisplayedRows] = useState<any[]>([]);

  useEffect(() => {
    if (!data) return;
    setDisplayedRows(data);
  }, [data]);

  return (
    <StyledTable>
      {balanceColumn && (
        <colgroup>
          {columns.map((item) => (
            <col
              key={"colgroup-" + item.header}
              span={1}
              style={{ width: `${100 / columns.length}%` }}
            />
          ))}
        </colgroup>
      )}

      <StyledTableHeader>
        <tr>
          {columns.map((item) => (
            <StyledTableHeaderCell key={item.header}>
              <div className="cell-container">
                <span>{item.header}</span>

                {item.description && (
                  <span
                    data-for={item.header}
                    data-tip
                    style={{ padding: 4, cursor: "help" }}
                  >
                    <QuestionSvg height="10px" />
                  </span>
                )}
                {item.description && (
                  <>
                    <Tooltip id={item.header}>
                      <StyledDescription>
                        <div className="heading">{item.header}</div>
                        {item.description}
                      </StyledDescription>
                    </Tooltip>
                  </>
                )}
              </div>
            </StyledTableHeaderCell>
          ))}
        </tr>
        {rowCollapsible && <tr></tr>}
      </StyledTableHeader>

      <StyledTableBody
        className={isLoading || displayedRows.length === 0 ? "hide" : ""}
      >
        {displayedRows.map((item, index) => (
          <TableRow
            index={index}
            columns={columns}
            item={item}
            renderExpand={renderExpand}
            rowCollapsible={rowCollapsible}
          />
        ))}
      </StyledTableBody>
      {displayedRows.length === 0 && (
        <tbody>
          <tr>
            <td colSpan={100}>
              <StyledNoData>{noDataMessage}</StyledNoData>
            </td>
          </tr>
        </tbody>
      )}
    </StyledTable>
  );
};

export const TableRow: React.FC<TableRowProps> = ({
  index,
  columns,
  item,
  renderExpand,
  rowCollapsible,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCollapsible = useCallback(() => {
    if (rowCollapsible) setIsExpanded(!isExpanded);
  }, [setIsExpanded, isExpanded, rowCollapsible]);

  return (
    <>
      <tr
        key={index}
        onClick={handleCollapsible}
        className={isExpanded ? "expanded" : ""}
      >
        {columns.map((column, columnIndex) => (
          <StyledTableCell key={`${item[column?.key]}@${columnIndex}`}>
            {column.formatCell ? column.formatCell(item) : item[column.field]}
          </StyledTableCell>
        ))}

        {rowCollapsible && (
          <StyledTableCell key={`expand-action-${index}`}>
            <CollapsibleIconButton
              name="caret_down.svg"
              height="15px"
              className={isExpanded ? "expanded" : ""}
            />
          </StyledTableCell>
        )}
      </tr>

      {isExpanded && (
        <StyledExpandedRow>
          <td colSpan={100}>{renderExpand && renderExpand(item)}</td>
        </StyledExpandedRow>
      )}
    </>
  );
};

export default ReportTable;

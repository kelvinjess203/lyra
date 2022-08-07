import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTableHeader = styled.thead``;

export const StyledTableHeaderCell = styled.th`
  font-size: 14px;
  color: ${({ theme }) => theme.table.headerColor};
  font-weight: 300;
  text-align: left;

  padding: 0px 20px;
  padding-bottom: 24px;
  vertical-align: middle;

  .cell-container {
    display: flex;
    align-items: center;
  }
`;

export const StyledTableBody = styled.tbody`
  tr {
    &.expanded {
      background: rgba(197, 192, 192, 0.1) !important;
      border-bottom: 1px solid rgba(197, 192, 192, 0.4);
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      cursor: pointer;
    }
  }
  &.hide {
    opacity: 0;
  }
`;

export const StyledTableCell = styled.td`
  color: #fff;
  text-align: left;
  font-size: 16px;
  padding: 8px 20px;

  box-sizing: border-box;
  vertical-align: middle;
`;

export const StyledDescription = styled.div`
  width: 290px;
  font-size: 14px;
  line-height: 18px;

  padding: 12px 6px;

  .heading {
    font-weight: bold;
    font-size: 1p5x;
    margin-bottom: 12px;
  }
`;

export const StyledExpandedRow = styled.tr`
  background: rgba(197, 192, 192, 0.1) !important;
  border-bottom: 1px solid rgba(197, 192, 192, 0.4);
  cursor: unset !important;
`;

export const StyledNoData = styled.div`
  color: ${({ theme }) => theme.text.subColor};
  width: 100%;
  font-size: 14px;
  padding-top: 24px;
  text-align: center;
`;

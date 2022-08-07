import Button from "components/Button";
import Icon from "components/Icon";
import Table from "components/Table";
import { TableColumn } from "components/Table/types";
import React, { useMemo } from "react";
import styled from "styled-components";

import { ReactComponent as PlusSvg } from "svg/plus.svg";
import theme from "theme";

const dumpData: any[] = [
  {
    id: 1,
    asset: "BTC",
    position: "LONG $30,000.00 Call",
    action: "Bought",
    time: "Jun 11th 2022",
    expiry: "Jun 17th 2022",
    qty: "0.01000",
    cost: "$20.00",
  },
  {
    id: 2,
    asset: "BTC",
    position: "LONG $29,000.00 Call",
    action: "Bought",
    time: "Jun 11th 2022",
    expiry: "Jun 17th 2022",
    qty: "0.01000",
    cost: "$1020.00",
  },
];

const HistoryTable: React.FC = () => {
  const columns: TableColumn<any>[] = useMemo(
    () => [
      {
        header: "Asset",
        field: "market",
        key: "market",
        formatCell: (row: any) => {
          return (
            <StyledName>
              <Icon name="btc.png" height="24px" style={{ marginRight: 4 }} />
              <span>{row.asset}</span>
            </StyledName>
          );
        },
      },
      {
        header: "Position",
        field: "position",
        key: "position",
      },
      {
        header: "Action",
        field: "action",
        key: "action",
      },
      {
        header: "Time",
        field: "time",
        key: "time",
      },
      {
        header: "Expiry",
        field: "expiry",
        key: "expiry",
      },
      {
        header: "Qty",
        field: "qty",
        key: "qty",
      },
      {
        header: "Cost",
        field: "cost",
        key: "cost",
        formatCell: (row: any) => {
          return <span style={{ color: theme.color.green }}>{row.cost}</span>;
        },
      },
    ],
    []
  );

  return (
    <StyledWrapper>
      <Table
        columns={columns}
        data={dumpData}
        noDataMessage="No expired positions"
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledName = styled.div`
  display: flex;
  align-items: center;
`;

export default HistoryTable;

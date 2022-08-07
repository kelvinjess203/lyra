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
    market: "BTC",
    position: "LONG $30,000.00 Call",
    expiry: "Jun 17th 2022",
    size: "1.00",
    avgPrice: "$320.50",
    markPrice: "$340.50",
    profitAndLoss: "$20.00",
  },
  {
    id: 2,
    market: "BTC",
    position: "LONG $29,000.00 Call",
    expiry: "Jun 17th 2022",
    size: "1.00",
    avgPrice: "$1120.50",
    markPrice: "$2140.50",
    profitAndLoss: "$1020.00",
  },
];

const ExpiredPositionTable: React.FC = () => {
  const columns: TableColumn<any>[] = useMemo(
    () => [
      {
        header: "Market",
        field: "market",
        key: "market",
        formatCell: (row: any) => {
          return (
            <StyledName>
              <Icon name="btc.png" height="24px" style={{ marginRight: 4 }} />
              <span>{row.market}</span>
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
        header: "Expiry",
        field: "expiry",
        description: "The expiry is the time at which the options are settled.",
        key: "expiry",
      },
      {
        header: "Size",
        field: "size",
        description: "The size of your open position",
        key: "size",
      },
      {
        header: "Avg. Price",
        field: "avgPrice",
        description: "The average opening trade price (per option).",
        key: "avgPrice",
      },
      {
        header: "P&L",
        field: "profitAndLoss",
        description:
          "The unrealized profit/loss of your position, calculated using the option's current mark price.",
        key: "profitAndLoss",
        formatCell: (row: any) => {
          return (
            <span style={{ color: theme.color.green }}>
              {row.profitAndLoss}
            </span>
          );
        },
      },
      {
        header: "Action",
        field: "id",
        key: "id",
        formatCell: (row: any) => {
          return (
            <Button
              background={"#171618"}
              endIcon={<PlusSvg />}
              style={{
                fontSize: 16,
                padding: "8px 16px",
                margin: "8px 0px",
              }}
            >
              Close
            </Button>
          );
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

export default ExpiredPositionTable;

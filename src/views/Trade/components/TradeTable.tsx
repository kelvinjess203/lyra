import Button from "components/Button";
import Table from "components/Table";
import { TableColumn } from "components/Table/types";
import React, { useCallback, useMemo } from "react";
import styled from "styled-components";

import { ReactComponent as PlusSvg } from "svg/plus.svg";
import TradeExpanedRow from "./TradeExpanedRow";

const dumpData: any[] = [
  {
    id: 1,
    strike: "$2,300.00",
    breakEven: "$2,304.01",
    volatility: "-",
    price: "$4.01",
  },
  {
    id: 2,
    strike: "$2,300.00",
    breakEven: "$2,304.01",
    volatility: "-",
    price: "$4.01",
  },
  {
    id: 3,
    strike: "$2,300.00",
    breakEven: "$2,304.01",
    volatility: "-",
    price: "$4.01",
  },
  {
    id: 4,
    strike: "$2,300.00",
    breakEven: "$2,304.01",
    volatility: "-",
    price: "$4.01",
  },
  {
    id: 5,
    strike: "$2,300.00",
    breakEven: "$2,304.01",
    volatility: "-",
    price: "$4.01",
  },
  {
    id: 6,
    strike: "$2,300.00",
    breakEven: "$2,304.01",
    volatility: "-",
    price: "$4.01",
  },
];

export interface TradeTableProps {
  activeColor?: string;
}

const TradeTableHeader: React.FC<TradeTableProps> = ({ activeColor }) => {
  const columns: TableColumn<any>[] = useMemo(
    () => [
      {
        header: "Strike",
        field: "strike",
        description:
          "The price at which the underlying asset can be bought or sold when the option expires",
        key: "strike",
      },
      {
        header: "Break even",
        field: "breakEven",
        description:
          "The price at which, on expiry, the underlying asset must equal for the relevant options trade to have a profit/loss of 0.",
        key: "breakEven",
      },
      {
        header: "Implied Volatility",
        field: "volatility",
        description:
          "Implied volatility is the market’s expectation of the volatility of the underlying asset until expiry, it is a large determinant of the value of an option.",
        key: "volatility",
      },
      {
        header: "Price",
        field: "price",
        description:
          "The quoted price is the price to trade one standard size against the Lyra AMM. The price will be higher for larger size orders, and lower for smaller orders, see doc for more details.",
        key: "price",
        formatCell: (row: any) => {
          return (
            <Button
              background={"#171618"}
              endIcon={<PlusSvg />}
              style={{
                border: `1px solid ${activeColor}`,
                fontSize: 16,
                padding: "8px 16px",
                color: activeColor,
                margin: "8px 0px",
              }}
            >{`${row.price}`}</Button>
          );
        },
      },
    ],
    [activeColor]
  );
  const renderExpand = useCallback((item: any) => {
    return <TradeExpanedRow />;
  }, []);

  return (
    <StyledWrapper>
      <Table
        columns={columns}
        data={dumpData}
        renderExpand={renderExpand}
        rowCollapsible
        balanceColumn
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

export default TradeTableHeader;

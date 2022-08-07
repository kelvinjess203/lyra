import Button from "components/Button";
import { StyledTableCell } from "components/Table/StyledTable";
import React from "react";
import styled from "styled-components";

import { ReactComponent as OpenNewSvg } from "svg/open-new.svg";
import { ValueLabel } from "components/ValueLabel";
import { Link } from "react-router-dom";

const TradeExpanedRow: React.FC = () => {
  return (
    <table style={{ width: "100%" }}>
      <colgroup>
        <col span={1} style={{ width: `25%` }} />
        <col span={1} style={{ width: `25%` }} />
        <col span={1} style={{ width: `25%` }} />
        <col span={1} style={{ width: `25%` }} />
      </colgroup>
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        <StyledRow>
          <StyledTableCell>
            <ValueLabel
              label="Delta"
              desc="Delta refers to how much the price of the option changes if the underlying asset moves by $1."
              value="0.02095"
            />
          </StyledTableCell>
          <StyledTableCell>
            <ValueLabel
              label="Gamma"
              desc="Gamma refers to how much the delta of the option changes if the underlying asset moves by $1."
              value="0.02095"
            />
          </StyledTableCell>
          <StyledTableCell>
            <ValueLabel
              label="Theta"
              desc="Theta refers to how much the price of the option decreases per day."
              value="-0.02095"
            />
          </StyledTableCell>
          <StyledTableCell style={{ verticalAlign: "bottom" }}>
            <StyledValueContainer>
              <Link to="trade/btc/call">
                <Button
                  background="rgba(255,255,255,0.01)"
                  endIcon={<OpenNewSvg />}
                >
                  Details
                </Button>
              </Link>
            </StyledValueContainer>
          </StyledTableCell>
          <StyledTableCell style={{ paddingLeft: 43 }}></StyledTableCell>

          <td></td>
        </StyledRow>
        <StyledRow>
          <StyledTableCell>
            <ValueLabel
              label="Vega"
              desc="How much the price of the option changes if the implied volatility moves by $1."
              value="0.15306"
            />
          </StyledTableCell>
          <StyledTableCell>
            <ValueLabel
              label="Rho"
              desc="Rho refers to how much the price of the option changes for a 1% change in the risk-free interest rate."
              value="0.02095"
            />
          </StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell style={{ paddingLeft: 43 }}></StyledTableCell>
          <td></td>
        </StyledRow>
      </tbody>
    </table>
  );
};

const StyledValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px 0px;
  height: 64px;
`;

const StyledRow = styled.tr`
  background: unset !important;
  cursor: unset !important;
`;

export default TradeExpanedRow;

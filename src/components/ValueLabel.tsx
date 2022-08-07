import React from "react";
import styled from "styled-components";
import { StyledDescription } from "./Table/StyledTable";
import { ReactComponent as QuestionSvg } from "svg/question.svg";
import Tooltip from "./Tooltip";

export const ValueLabel = (props: any) => {
  const { label, desc, value }: { label: string; desc: string; value: string } =
    props;

  return (
    <StyledValueContainer>
      <StyledLabel
        style={{ color: "#A6A0BB", fontSize: 14 }}
        data-for={value}
        data-tip
      >
        {label}
        <span style={{ padding: 4, cursor: "help" }}>
          <QuestionSvg height="10px" />
        </span>
      </StyledLabel>
      <StyledValue>{value}</StyledValue>
      {desc && (
        <>
          <Tooltip id={value}>
            <StyledDescription>
              <div className="heading">{label}</div>
              {desc}
            </StyledDescription>
          </Tooltip>
        </>
      )}
      <div></div>
    </StyledValueContainer>
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

const StyledLabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.table.headerColor};
  font-weight: 300;
  text-align: left;
`;

const StyledValue = styled.span`
  color: ${({ theme }) => theme.text.headingColor};
  font-size: 16px;
  margin-top: 8px;
  font-weight: 300;
`;

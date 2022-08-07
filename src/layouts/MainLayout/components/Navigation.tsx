import Card from "components/Card";
import { OPTIONS } from "config/options";
import React, { useCallback } from "react";
import styled from "styled-components";
import { NavItem } from "types/nav";
import TokenOption from "./TokenOption";

import { ReactComponent as PositionSvg } from "svg/positions.svg";
import { ReactComponent as RewardsSvg } from "svg/rewards.svg";
import { ReactComponent as HistorySvg } from "svg/history.svg";
import { ROUTES } from "config/routes";
import NavigationItem from "./NavigationItem";

const NAV_ITEMS: NavItem[] = [
  {
    code: ROUTES.TRADE_POSITIONS,
    icon: <PositionSvg />,
    name: "Positions",
  },
  {
    code: ROUTES.TRADE_REWARDS,
    icon: <RewardsSvg />,
    name: "Rewards",
  },
  {
    code: ROUTES.TRADE_HISTORY,
    icon: <HistorySvg />,
    name: "History",
  },
];

const Navigation: React.FC<any> = ({ children }) => {
  const getPageName = useCallback(() => {
    const currentPath = window.location.pathname.replace("/", "");
    if (currentPath.indexOf("trade") >= 0) {
      return "Trade";
    }
    return "";
  }, []);

  return (
    <StyledWraper>
      <StyledPageName>{getPageName()}</StyledPageName>
      <Card
        padding="6px"
        border="none"
        title="Markets"
        isCollapsible
        style={{ marginBottom: 20 }}
      >
        {OPTIONS.map((item) => (
          <TokenOption key={item.code} option={item} />
        ))}
      </Card>

      <Card padding="6px" border="none" title="Portfolio" isCollapsible>
        {NAV_ITEMS.map((item) => (
          <NavigationItem key={item.code} item={item} />
        ))}
      </Card>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  top: 96px;
  left: 20px;
  position: fixed;
  width: 250px;
  min-width: 250px;
  max-width: 250px;
`;

const StyledPageName = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.text.headingColor};
  margin-bottom: 36px;
`;
export default Navigation;

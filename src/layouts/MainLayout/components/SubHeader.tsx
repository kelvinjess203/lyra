import Button from "components/Button";
import { MODULES_NAME, ROUTES } from "config/routes";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { checkPage } from "util/location";

const activeBackground =
  "linear-gradient(86.46deg, #527DE4 0.52%, #74499E 49.92%, #C23E77 99.31%), #FFFFFF";
const defaultBackground =
  "linear-gradient(85.73deg, #12131A 0%, #1A1B24 100%), #FFFFFF";

const SubHeader: React.FC<any> = ({ children }) => {
  return (
    <StyledWraper>
      <StyledButtonGroup>
        <Link to="/trade">
          <Button
            background={
              checkPage(MODULES_NAME[ROUTES.TRADE])
                ? activeBackground
                : defaultBackground
            }
            width="80px"
          >
            Trade
          </Button>
        </Link>
        <Link to="/Earn">
          <Button
            background={
              checkPage(MODULES_NAME[ROUTES.EARN])
                ? activeBackground
                : defaultBackground
            }
            style={{ marginLeft: 12 }}
            width="80px"
          >
            Earn
          </Button>
        </Link>
      </StyledButtonGroup>
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  height: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export default SubHeader;

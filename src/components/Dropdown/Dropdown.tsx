import ClickAwayListener from "components/ClickAwayListener";
import { StyledSelect } from "components/Select/StyledSelect";
import { CollapsibleIconButton } from "components/Styled";
import React, { ReactNode, useCallback, useRef, useState } from "react";
import styled from "styled-components";

type DetailOption = {
  title: string | ReactNode | any;
  value: string | number;
};

const Dropdown: React.FC<{
  options: DetailOption[];
  selected: string | number;
}> = ({ options, selected }) => {
  const [isToggled, setToggle] = useState(false);
  const refSelected = useRef(null);
  const _handleToggle = useCallback(() => setToggle(!isToggled), [isToggled]);

  const optionsAppear = {
    transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    opacity: isToggled ? 1 : 0,
  };

  return (
    <StyledWrapper>
      <StyledSelectedOptions onClick={_handleToggle} ref={refSelected}>
        <span>{options[0].title}</span>
        <CollapsibleIconButton
          name="caret_down.svg"
          height="15px"
          className={isToggled ? "expanded" : ""}
        />
      </StyledSelectedOptions>

      {isToggled && (
        <ClickAwayListener onClickAway={() => setToggle(false)}>
          <></>
        </ClickAwayListener>
      )}

      <StyledWrapListOption
        style={{
          ...optionsAppear,
          top: (refSelected?.current?.clientHeight + 7 || 45) + "px",
        }}
      >
        {options.map((item) => {
          return (
            <StyledItemOption>
              <span className="icon">
                {item.value === selected ? (
                  <img src="/img/icons/tick.svg" alt="tick success" />
                ) : (
                  " "
                )}
              </span>
              <span>{item.title}</span>
            </StyledItemOption>
          );
        })}
      </StyledWrapListOption>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  min-width: 250px;
  margin: 0 auto;
`;

const StyledSelectedOptions = styled(StyledSelect)`
  color: #ffffff;
  z-index: 100000;
  position: relative;
  padding: 8px 16px;
`;

const StyledWrapListOption = styled.div`
  transtion: 0.2s;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.input.background};
  border: ${({ theme }) => theme.input.border};

  border-radius: 5px;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 100;
  overflow: hidden;
`;

const StyledItemOption = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  min-height: 48px;
  color: #ffffff;
  .icon {
    width: 18px;
    img {
      width: 18px;
    }
    margin-right: 16px;
  }
  &:hover {
    background: hsl(240deg 12% 12%);
  }
`;
export default Dropdown;

import React from 'react';
import Card from 'components/Card';
import styled from 'styled-components';


const Progress: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StypedProgress percent={30} >
          <StyledContainerProgress>
            <StyledWrapPoint>
              <StyledText className='value  '>
                225.9K
              </StyledText>
              <StyledText className='percent'>
                16.9%
              </StyledText>
            </StyledWrapPoint>
          </StyledContainerProgress>
        </StypedProgress>
      </StyledContainer>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  height: 54px;
  width: 100%;
`;


const StyledContainer = styled(Card)`
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const StyledContainerProgress = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const StypedProgress = styled.div<{ percent: number }>`
  padding: 8px 16px;
  width: ${({ percent }) => percent}%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 100%;
  animation: 23.6045s linear 0s infinite normal none running shimmer;
  background: linear-gradient(to right, rgb(5, 181, 140) 4%, rgb(5, 201, 155) 25%, rgb(5, 181, 140) 36%);
  @keyframes shimmer {
    0% {
      background-position: -1000px 0px;
    }
    100% {
      background-position: 1000px 0px;
    }
  }
`
const StyledWrapPoint = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledText = styled.div<{ className: "value" | "percent" | string }>`
  font-family: 'Poppins';

  &.value {
    font-weight: 500;
    line-height: 19px;
    font-size: 15px;
    letter-spacing: 0.015em;
  }

  &.percent {
    font-weight: 500;
    line-height: 16px;
    font-size: 12px;
  }
`;

export default Progress;
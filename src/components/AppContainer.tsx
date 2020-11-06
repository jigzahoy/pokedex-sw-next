import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 50%;
    width: 95%;
    height: 100%;
    background: #fa7249;
    transform: translateX(-50%) skewX(-25deg);
  }

  &::after {
    content: url(/assets/rotom-dex.png);
    position: fixed;
    bottom: -100px;
    left: 10%;
    z-index: 1;
  }
`;

const SideBars = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background: #f4513c;
    transform: skewX(-25deg);
    z-index: 2;
  }
  &:after {
    content: "";
    position: fixed;
    border-right: 300px solid white;
    top: 0;
    right: -300px;
    width: 250px;
    height: 100%;
    background: #f4513c;
    transform: skewX(-25deg);
    z-index: 2;
    box-sizing: content-box;
  }
`;

export default function AppContainer(props) {
  return (
    <MainContainer>
      <SideBars>{props.children}</SideBars>
    </MainContainer>
  );
}

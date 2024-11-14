import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const StyledH1 = styled.h1`
  font-family: "DungGeunMo", sans-serif;
  font-size: 100px;
`;

const NotFound = () => {
  return (
    <StyledDiv>
      <StyledH1>Not Found!!</StyledH1>
    </StyledDiv>
  );
};

export default NotFound;

import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  margin: 50px;
  text-align: center;
`;

function HomePage() {
  return (
    <MainContainer>
      This is a homepage, please choose one of the animals above
    </MainContainer>
  );
}

export default HomePage;

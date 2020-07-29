import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import Header from "./Header/Header";
import HomePage from "./HomePage";
import RandomCatImage from "./Cats/RandomCatImage";
import RandomDogImage from './Dogs/RandomDogImage';
import "./App.css";
import RandomCatFact from "./Cats/RandomCatFact";

const MainContainer = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  display: flex;
`;

const Timer = styled.div``;

function App() {

  const [timeLeft, setTimeLeft] = React.useState(30);

  React.useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 500)
    } else {
      setTimeLeft(30)
    }
  }, [timeLeft]);

  return (
    <MainContainer>
      <Header />
      <Timer>New cat image will appear in {timeLeft} seconds</Timer>
      <Router>
        <HomePage path="/" timeLeft={timeLeft} />
        <RandomCatImage path="/randomCat" timeLeft={timeLeft} />
        <RandomDogImage path="/randomDog" timeLeft={timeLeft} />
        <RandomCatFact path="/randomFact" timeLeft={timeLeft} />
      </Router>
    </MainContainer>
  );
}

export default App;

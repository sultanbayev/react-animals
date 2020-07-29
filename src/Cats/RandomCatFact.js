import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Fact = styled.blockquote`
  width: 100%;
  font-family: 'Times New Roman', sans-serif;
  font-size: 25px;
`;

const Timer = styled.div``;

function RandomCatFact(props) {
  const [randomFact, setRandomFact] = React.useState(null)

  React.useEffect(() => {
      fetch('https://cat-fact.herokuapp.com/facts')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const facts = data.all;
        const randomFact = facts[Math.floor(Math.random() * facts.length)].text;
        setRandomFact(randomFact);
      });
  }, [])

  React.useEffect(() => {
    if (props.timeLeft <= 0) {
      fetch('https://cat-fact.herokuapp.com/facts')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const facts = data.all;
        const randomFact = facts[Math.floor(Math.random() * facts.length)].text;
        console.log(randomFact)
        setRandomFact(randomFact);
      });
    }
  }, [props.timeLeft])

  if (randomFact === null) return <div>Loading random fact...</div>

  return (
    <MainContainer>
      <Timer>New cat image will appear in {props.timeLeft} seconds</Timer>
      <Fact>{randomFact}</Fact>
    </MainContainer>
  );
}

export default RandomCatFact;

import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

const Timer = styled.div``;

function RandomCatImage(props) {
  const [catImageUrl, setCatImageUrl] = React.useState(null);

  React.useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCatImageUrl(data[0].url);
        });
  }, []);

  React.useEffect(() => {
    if (props.timeLeft <= 0) {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCatImageUrl(data[0].url);
        });
    }
  }, [props.timeLeft])
  
  if (catImageUrl === null) return <div> Loading another cat... </div>;

  return (
    <MainContainer>
      <Timer>New cat image will appear in {props.timeLeft} seconds</Timer>
      <Image src={catImageUrl} />
    </MainContainer>
  );
}

export default RandomCatImage;

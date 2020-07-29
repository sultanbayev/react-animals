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
  const [timeLeft, setTimeLeft] = React.useState(0);

  React.useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000)
    } else {
      fetch("https://api.thecatapi.com/v1/images/search")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setCatImageUrl(data[0].url);
          });
          setTimeLeft(30)
    }
  }, [catImageUrl, timeLeft]);
  
  if (catImageUrl == null) return <div> Loading another cat... </div>;

  return (
    <MainContainer>
      <Timer>New cat image will appear in {timeLeft} seconds</Timer>
      <Image src={catImageUrl} />
    </MainContainer>
  );
}

export default RandomCatImage;

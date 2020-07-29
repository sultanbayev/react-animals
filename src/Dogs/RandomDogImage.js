import React from 'react'
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

function RandomDogImage(props) {
    const [dogImageUrl, setDogImageUrl] = React.useState(null);

    React.useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setDogImageUrl(data.message)
          });
      }, []);


    if (dogImageUrl == null) return <div> Loading doge... </div>;

    return (
        <MainContainer>
          <Image src={dogImageUrl} />
        </MainContainer>
      );
}

export default RandomDogImage

// https://dog.ceo/dog-api/

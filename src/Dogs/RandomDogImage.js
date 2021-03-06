import React from 'react'
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

const Timer = styled.div``;

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

    React.useEffect(() => {
        if (props.timeLeft <= 0) {
            fetch("https://dog.ceo/api/breeds/image/random")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setDogImageUrl(data.message)
                });
        }
      }, [props.timeLeft, dogImageUrl]);


    if (dogImageUrl === null) return <div> Loading doge... </div>;

    return (
        <MainContainer>
            <Timer>New cat image will appear in {props.timeLeft} seconds</Timer>
            <Image src={dogImageUrl} />
        </MainContainer>
      );
}

export default RandomDogImage

// https://dog.ceo/dog-api/

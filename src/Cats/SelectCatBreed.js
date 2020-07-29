import React from 'react';
import styled from "styled-components";

const MainContainer = styled.div`
        display: flex;
        flex-direction: column;
    `;

const Image = styled.img`
    width: 100%;
`;

const Select = styled.select`
    margin: 20px 0;
`;

const Option = styled.option``;

function SelectCatBreed() {

    const [catBreedUrl, setCatBreedUrl] = React.useState(null);
    const [breeds, setBreeds] = React.useState(null);
    const [breed, setBreed] = React.useState(null);

    React.useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setBreeds(data.map((obj) => {
                return {
                    name: obj.name,
                    id: obj.id
                }
            }));
        });
    }, [])

    React.useEffect(() => {
        if (breed) {
            fetch('https://api.thecatapi.com/v1/images/search?breed_ids=' + breed )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCatBreedUrl(data[0].url);
            });
        }
    }, [breed])

    if (breeds === null) return <div>Loading...</div>

    return (
        <MainContainer>
            <Select onChange={(event) => setBreed(event.target.value)} value={ breed ? breed : ''}>
                {breeds.map((breed) => {
                        return <Option key={Math.random()} value={breed.id}>{breed.name}</Option>
                    }
                )}
            </Select>
            {catBreedUrl ? <Image src={catBreedUrl}/> : null}
        </MainContainer>
    );
}

export default SelectCatBreed;
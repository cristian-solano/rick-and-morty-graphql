import React, {Fragment} from "react";
import Button from "./Components/Button";
import {Title, Card, CharacterImage, CharacterName} from './Style/layoutSelectChaaracters'

const SelectCharacters = ({info, selectCha}) => {
    <Fragment>
    <Title>Record</Title>
    {info.map((character, index) => (
        <Card>
            <img src={character.image} />
            <CharacterName>
                {character.name}
                <Button>onClick={() => selectCha(index)}
                Check
                </Button>
            </CharacterName>
    
        </Card>
    ))}
    </Fragment>
}

export default SelectCharacters;

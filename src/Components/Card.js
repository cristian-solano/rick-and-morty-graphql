import  { Fragment } from "react";
import Button from "./Button";
import {Container, Data, Picture,  Header, HeaderId, HeaderName, Info, Space, Line, Empty} from "../Style/LayoutCard";

const Card = ({name, id, req, character, load}) => (
    <Container>
        <Data>
            {character ? (
                <Fragment>
                    <Picture basis="50">
                        <img src={character.image} alt={'Photo'}/>
                    </Picture>
                    <Picture basis="50">
                        <Header>
                            {name && <HeaderName>{name}</HeaderName>}
                            {id && <HeaderId>{id}</HeaderId>}
                        </Header>
                        <Info>
                            <Space>
                               <p>Status:</p>
                               {character.status || "unknown"} 
                            </Space>
                            <Line />
                            <Space>
                               <p>Species:</p>
                               {character.species || "unknown"} 
                            </Space>
                            <Line />
                            <Space>
                               <p>Type:</p>
                               {character.type || "unknown"} 
                            </Space>
                            <Line />
                            <Space>
                               <p>Gender:</p>
                               {character.gender || "unknown"} 
                            </Space>
                            <Line />
                            <Space>
                               <p>Origin:</p>
                               {character.origin.name || "unknown"} 
                            </Space>
                            <Line />
                            <Space>
                               <p>Location:</p>
                               {character.location.name || "unknown"} 
                            </Space>
                            <Line />
                            <Space>
                               <p>Created at:</p>
                               {new Date(character.created).toDateString || "unknown"} 
                            </Space>
                        </Info>
                    </Picture>
                </Fragment>
            ) : (
                <Empty>No se ha cargado ningun personaje</Empty>
            )}
        </Data>
        <Button
            onClick={req}
            disabled={load}
        >
            Generate
        </Button>
    </Container>

);

// export default Card

// const Card = ( { character } ) => {
//     return (
//       <div className="card w-25">
//         <img src={character.image} className="card-img-top" alt="character" />
//         <div className="card-body">
//           <h5 className="card-title, mb-0">{character.name}</h5>
//           <p className="card-text">
//             {character.status} - {character.species}
//           </p>
  
//           <h6 className="card-subtitle text-muted">Last known location</h6>
//           <p className="card-text">{character.location.name}</p>
//           <p className="card-text">{character.episode.name}</p>
//           <p className="card-text">{character.created}</p>
//         </div>
//       </div>
//     )
//   }
  
  export default Card
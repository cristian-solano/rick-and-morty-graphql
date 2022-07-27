import { gql } from "@apollo/client";


const GET_ALL_CHARACTERS = gql`
query getCharacter {
    characters {
      results {
        id
        name
        status
        image
        species
        gender
        episode { 
          name
        } 
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }`;




export default GET_ALL_CHARACTERS;
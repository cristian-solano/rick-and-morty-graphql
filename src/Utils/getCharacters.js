import { gql } from "@apollo/client";


const GET_CHARACTERS = gql`
    query getAllCharacters {
        characters {
          info {
            count
          }
        }
      }
    
      
`;




export default GET_CHARACTERS;
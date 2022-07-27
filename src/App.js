import { useQuery } from '@apollo/client'
import  GET_ALL_CHARACTERS  from './Utils/getAllCharacters'
import GET_CHARACTERS from './Utils/getCharacters'
import Card from './Components/Card'
import { useState } from 'react'
import SelectCharacters from './SelectCharacters'
import React from 'react'

const App = () => {
  
  

  
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);
  const { allCharacters } = useQuery(GET_CHARACTERS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>
  
  const randomId = Math.ceil(Math.random() * allCharacters);


    return (
      
    <>
      <header>
        <h1 className="text-center m-5">Rick and Morty GraphQL App</h1>
      </header>
      <div className="row">
        {data?.characters?.results.map(character =>
          <Card character={character} key={character.name} req={randomId}/>
        )}

        
      </div>
      
      
    </>

  )
  
}

export default App
     


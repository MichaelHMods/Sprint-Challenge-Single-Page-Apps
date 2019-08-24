import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';


export default function CharacterList() {
  const [chars, setChars] = useState(); 
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(res=>setChars(res.data.results))
      .catch(err=>console.log(err))
    }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    fetchData()
  }, []);
    
  
  return (
     
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {chars && chars.map((char, i)=> <CharacterCard key={i} char={chars}/> )}
      {/* {info.map((character, index) => <CharacterCard key= {index} person= {character}/>)} */}
    </section>
  );
}
// const fetchData = () => {
//   axios.get(`https://rickandmortyapi.com/api/character/`)
//   .then(response => {
//     console.log(response.data.results)
//     setInfo(response.data.results)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }
// fetchData()
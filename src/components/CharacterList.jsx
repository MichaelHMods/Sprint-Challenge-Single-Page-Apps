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
   
    fetchData()
  }, []);
    
  console.log(chars)
  return (
     
    <section className="character-list grid-view">
      <h2>Characters</h2>
     {chars && chars.map((char, i) => <CharacterCard char={char} key={i} /> )}
    </section>
  );
}
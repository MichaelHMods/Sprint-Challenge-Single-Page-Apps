import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function CharacterList() {
  const [info, setInfo] = useState();
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results)
        setInfo(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
    }
    fetchData()
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}

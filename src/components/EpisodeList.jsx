import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';


export default function EpisodeList() {
  const [epis, setEpis] = useState(); 
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://rickandmortyapi.com/api/episode/`)
      .then(res=>setEpis(res.data.results))
      .catch(err=>console.log(err))
    }
   
    fetchData()
  }, []);
    
  console.log(epis)
  return (
     
    <section className="episode-list grid-view">
      <h2>Episodes</h2>
     {epis && epis.map((epi, i) => <EpisodeCard epi={epi} key={i} /> )}
    </section>
  );
}
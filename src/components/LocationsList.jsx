import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';


export default function LocationList() {
  const [locs, setLocs] = useState(); 
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://rickandmortyapi.com/api/location/`)
      .then(res=>setLocs(res.data.results))
      .catch(err=>console.log(err))
    }
   
    fetchData()
  }, []);
    
  console.log(locs)
  return (
     
    <section className="location-list grid-view">
      <h2>Locations</h2>
     {locs && locs.map((loc, i) => <LocationCard loc={loc} key={i} /> )}
    </section>
  );
}
import React from "react";




const EpisodeCard = props => {
  let {created, dimension, id, name, residents, type, url} = props.epi
  return(
   <div className="EpisodeCard">
     <div className="card">
        <h4>Episode: {name} </h4>
        <h5>Type: {type} </h5>
    </div>
   </div>
  )
 
}
export default EpisodeCard;

// air_date: "December 2, 2013"
// characters: (19) ["https://rickandmortyapi.com/api/character/1", "https://rickandmortyapi.com/api/character/2", "https://rickandmortyapi.com/api/character/35", "https://rickandmortyapi.com/api/character/38", "https://rickandmortyapi.com/api/character/62", "https://rickandmortyapi.com/api/character/92", "https://rickandmortyapi.com/api/character/127", "https://rickandmortyapi.com/api/character/144", "https://rickandmortyapi.com/api/character/158", "https://rickandmortyapi.com/api/character/175", "https://rickandmortyapi.com/api/character/179", "https://rickandmortyapi.com/api/character/181", "https://rickandmortyapi.com/api/character/239", "https://rickandmortyapi.com/api/character/249", "https://rickandmortyapi.com/api/character/271", "https://rickandmortyapi.com/api/character/338", "https://rickandmortyapi.com/api/character/394", "https://rickandmortyapi.com/api/character/395", "https://rickandmortyapi.com/api/character/435"]
// created: "2017-11-10T12:56:33.798Z"
// episode: "S01E01"
// id: 1
// name: "Pilot"
// url: "https://rickandmortyapi.com/api/episode/1"
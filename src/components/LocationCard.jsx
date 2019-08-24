import React from "react";




const LocationCard = props => {
  let {created, dimension, id, name, residents, type, url} = props.loc
  return(
   <div className="LocationCard">
     <div className="card">
        <h4>Location: {name} </h4>
        <h5>Type: {type} </h5>
    </div>
   </div>
  )
 
}
export default LocationCard;

// created: "2017-11-10T12:42:04.162Z"
// dimension: "Dimension C-137"
// id: 1
// name: "Earth (C-137)"
// residents: (27) ["https://rickandmortyapi.com/api/location/38", "https://rickandmortyapi.com/api/location/45", "https://rickandmortyapi.com/api/location/71", "https://rickandmortyapi.com/api/location/82", "https://rickandmortyapi.com/api/location/83", "https://rickandmortyapi.com/api/location/92", "https://rickandmortyapi.com/api/location/112", "https://rickandmortyapi.com/api/location/114", "https://rickandmortyapi.com/api/location/116", "https://rickandmortyapi.com/api/location/117", "https://rickandmortyapi.com/api/location/120", "https://rickandmortyapi.com/api/location/127", "https://rickandmortyapi.com/api/location/155", "https://rickandmortyapi.com/api/location/169", "https://rickandmortyapi.com/api/location/175", "https://rickandmortyapi.com/api/location/179", "https://rickandmortyapi.com/api/location/186", "https://rickandmortyapi.com/api/location/201", "https://rickandmortyapi.com/api/location/216", "https://rickandmortyapi.com/api/location/239", "https://rickandmortyapi.com/api/location/271", "https://rickandmortyapi.com/api/location/302", "https://rickandmortyapi.com/api/location/303", "https://rickandmortyapi.com/api/location/338", "https://rickandmortyapi.com/api/location/343", "https://rickandmortyapi.com/api/location/356", "https://rickandmortyapi.com/api/location/394"]
// type: "Planet"
// url: "https://rickandmortyapi.com/api/location/1"
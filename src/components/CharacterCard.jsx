import React from "react";




const CharacterCard = props => {
  let {image, name, species, status, origin, location, episode, gender} = props.char
  return(
   <div className="CharacterCard">
     <img src={image} alt={`character: ${name}`}/>
     <h2>Name: {name}</h2>
     <p>Species: {species} Status: {status}</p>
     <p>Gender: {gender} </p>
     
     
   </div>
  )
 
}
export default CharacterCard;
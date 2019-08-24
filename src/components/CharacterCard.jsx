import React from "react";




const CharacterCard = props => {
  let {image, name, species, status, origin} =props.char
  return(
   <div className="CharacterCard">
     <img src={image} alt={`character: ${name}`}/>
     <h2>Name: {name}</h2>
     <p>Species: {species}</p>
     <p>Origin: {origin}</p>
   </div>
  )
 
}
export default CharacterCard;
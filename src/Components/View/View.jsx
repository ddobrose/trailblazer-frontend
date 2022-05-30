import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import './view.css'
// import { MDBIcon } from 'mdb-react-ui-kit';
function View() {
    const [park, setPark] = useState(null);
    let {id} = useParams()
    const key = "EL1Bl0NrfZIjxhIIUVPEsrnWNz5o0cWaaKhvyWa7"
    const url = `https://developer.nps.gov/api/v1/parks?q=${id}&limit=10&api_key=${key}`;
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
            console.log(res.data[0]);
            setPark(res.data[0]);
          })
          .catch(console.error);
      }, []);
  return (
<>
    
    {park && (
      <>
      <div className='fullName'>
          <h1>{park.fullName}</h1>
          
          {park.addresses[0].line1}<br></br>{park.addresses[0].city} |{park.addresses[0].stateCode}   | {park.addresses[0].postalCode}

<h1>Hours: </h1>
 <strong>Monday:</strong>  {park.operatingHours[0].standardHours.monday} 
<br></br>
  <strong>Tuesday:</strong> {park.operatingHours[0].standardHours.tuesday}
<br></br>
 <strong>Wednesday:</strong>  {park.operatingHours[0].standardHours.wednesday}
<br></br>
 <strong>Thursday:</strong>  {park.operatingHours[0].standardHours.thursday}
<br></br>
 <strong>Firday: </strong> {park.operatingHours[0].standardHours.friday}
<br></br>
 <strong>Saturday:</strong>  {park.operatingHours[0].standardHours.saturday}



          
          
          <img height="100%" width="100%" src={park.images[0].url} alt ='...'></img>
      </div>

      
      
      <div className='info'> <span><h1>{park.fullName}  Facts</h1></span></div>
     
    <div className='parkfacts'>
    
    <strong>States: </strong> {park.states}           
    <br></br>
    
    <strong>City: </strong> {park.addresses[0].city} 
    <br></br>
    
     <strong>Directions:</strong> {park.directionsInfo}
    </div>
    
    <div className='parkfacts2'>
    <strong><h1>Activities:</h1> </strong>
    <br></br>
    
    <button>{park.activities[0].name}</button>  | <button>{park.activities[1].name}</button>  
  <br></br>
   <button>{park.activities[2].name}</button>    | <button>{park.activities[3].name}</button>  
  <br></br>
    <button>{park.activities[4].name}</button>   |   <button>{park.activities[5].name}</button>
   <br></br>
   <br></br>
   </div>
<div className='box'>
<img className='pictures' height="35%" width="35%" src={park.images[3].url} alt ='...'></img>
<img className='picture2' height="35%" width="35%" src={park.images[2].url} alt ='...'></img> 

  </div>

<div className='text'>
<h1>{park.fullName} Description</h1>
{park.description} 
<br></br>
<br></br>
 

   </div>
      </>

    )} 

   
    
      
</>

  )
 
}

export default View


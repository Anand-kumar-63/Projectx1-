import React, { useEffect, useState } from 'react'

const Emojisuggestion = () => {

  const [emoji , setemoji] = useState();
  
  useEffect(()=>{
    fetchemoji();
  },[])

 const fetchemoji = async ()=>{
  const data = await fetch("https://emoji-api.com/categories?access_key=AIzaSyA4xc0wMOsLqmPX02S4f-a-Rt6qM42c0ZM")
  const josndata = await data.json();
  console.log(data);
 }
  return (
    <div></div>
  )
}

export default Emojisuggestion
import React, { useEffect, useState } from 'react'

const Emojisuggestion = () => {

  const [emoji , setemoji] = useState();
  
  useEffect(()=>{
    fetchemoji();
  },[])

 const fetchemoji = async ()=>{
  const data = await fetch("https://emoji-api.com/categories?access_key=38fc846f1c650b2474d05b6b30f171cfe688c5e9")
  const josndata = await data.json();
  console.log(data);
 }
  return (
    <div>Emojisuggestion</div>
  )
}

export default Emojisuggestion
// import React, {useState } from 'react'
// import VedioCard from './VedioCard' 
// // import youtube_api from  '../utils/constants'
// import data from '../utils/raw_data'

// const VedioContainer = () => {
//   const [vedios , setvedios] = useState([]);
//   // useEffect(()=>{
//   //   getVideo();
//   // },[]);

//   // const getVideo = async()=>{
//   //   const data = await fetch(youtube_api);
//   //   const vedio = await data.json();
//   //   setvedios(vedio.items);
//   // }
//   setvedios(data.items)
//   console.log(vedios)
//   return (
//     <div>
//       <VedioCard />
//       </div>
//   )
// }
// export default VedioContainer


import React, { useState, useEffect } from 'react';
import VedioCard from './VedioCard';
import data from '../utils/raw_data';
import {Link} from "react-router-dom"
const VedioContainer = () => {
  const [vedios, setvedios] = useState([]);
  useEffect(() => {
    // If data is an object with an "items" array, then use data.items instead.
    setvedios(data.items || data);
  }, []);
  // If there's no data yet, return a loading message or nothing.
  if (!vedios.length) {
    return <div>Loading...</div>;
  }
  return ( 
    <div className='flex flex-wrap w-[1320px] mt-2'>
    {vedios.map((vedio) => (
     <Link to={"/videopage?id="+vedio.id}>  <VedioCard key={vedio.id} info={vedio}  /></Link>
    ))}   
    </div>
  );
};

export default VedioContainer;

// when you pass info prop while the vedios variable is empty in first rendering so check it then return  
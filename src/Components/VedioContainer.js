import React, { useState, useEffect } from "react";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";
import youtube_api from "../utils/Constants"; 

const VedioContainer = () => {
  const [vedios, setvedios] = useState([]);
  const [videoID,setvideoID] = useState("");

  useEffect(() => {
    API_call();
  }, []);
  
  const API_call = async () => {
    const data = await fetch(youtube_api);
    const videos = await data.json();
    setvideoID(videos.items.map((video)=>video?.snippet?.resourceId?.videoId).join(","))
    console.log(videoID); 
   }
   useEffect(() => {
    if (videoID) {
      API_CALL1();
    }
  }, [videoID]); // Runs only when `videoID` is updated   
// to get vedios with statistics 
  const API_CALL1 = async () => {
    const stat = await fetch( `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoID}&key=AIzaSyCw9eOmRziBvp5ALYMHFkMIx1eRs04nbPM`)
    const Videostatics = await stat.json();
    console.log(Videostatics.items);
    setvedios(Videostatics.items)
  }

  if (!vedios.length) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-3 px-4 flex flex-wrap">
      {vedios.map((vedio) => (
        <Link key={vedio.id} to={"/videopage?id=" + vedio.id}>
          <VedioCard info={vedio} />
        </Link>
      ))}
    </div>
  );
};
export default VedioContainer;


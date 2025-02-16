import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SuggestionVideoCard from "./SuggestionVideoCard";
const Suggestion = () => {

  const [suggestionVideo, setsuggestionVideo] = useState([]);
  const [tagString, settagString] = useState("");
  const [videoId , setvideoId] = useState([])
  
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const api_key="AIzaSyCw9eOmRziBvp5ALYMHFkMIx1eRs04nbPM"
  const VideoById_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${api_key}`;

  useEffect(() => {
  if(id) { tags_api_call()}
  }, [id]);

      const tags_api_call = async () => {
      const response = await fetch(VideoById_URL);
      const jsondata = await response.json();
      const tags = jsondata.items[0]?.snippet?.tags || []; 
      console.log(tags);
      if (tags.length > 0) {
        const cleanTags = tags.map(tag => tag.replace("#", ""));
        const tagStr = cleanTags.join("%7C");
        // console.log(tagStr);
        settagString(tagStr);

  };}

  useEffect(() => {
    if (tagString) {
      videos_api_call();
    }
  }, [tagString]); 

  const videos_api_call = async () => {
    const VideosByTags_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${tagString}&key=${api_key}`;
      const response = await fetch(VideosByTags_URL);
      const jsondata = await response.json();
      const videoid = (jsondata.items?.map(video=>(video.id?.videoId)).join(","))
      // console.log(videoid);
      setvideoId(videoid);
  };


  useEffect(()=>{
    if(videoId){
    get_statisticsdata_api()}
  },[videoId])

 const get_statisticsdata_api = async()=>{
  const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${api_key}`);
  const jsondata = await data.json();
  console.log(jsondata.items);
  setsuggestionVideo(jsondata.items);
 }
  return (
    <div>
      {suggestionVideo.map((video)=>
      <Link key = {video.id } to={`/videopage?id=`+ video.id}>
        <SuggestionVideoCard info={video}/>
      </Link>
      )}
    </div>
  );
};

export default Suggestion;

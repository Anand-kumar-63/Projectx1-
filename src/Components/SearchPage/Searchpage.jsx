import React from "react";
import { useState, useEffect } from "react";
import { useAsyncValue, useSearchParams } from "react-router-dom";
// import SearchCard from "./SearchCard";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import { api_key } from "../../utils/Constants";
const Searchpage = () => {
  const [Searchvideo, setSearchvideo] = useState([]);
  const [videoIdList, setvideoIdList] = useState("");
  const [nextpagetoken, setnextpagetoken] = useState(null);
  const [prevpagetoken, setprevpagetoken] = useState(null);
  const [channelidlist , setchannelidlist] = useState([])
  const [channeldata , setchanneldata] = useState([])

  const [SearchParam] = useSearchParams();
  const query = SearchParam.get("q");

  useEffect(() => {
    if (query) {
      Query_videos_url();
    }
  }, [query]);

  const Query_videos_url = async (pageToken = "") => {
    const VideosByQuery_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}&pageToken=${pageToken}`;
    const response = await fetch(VideosByQuery_URL);
    const jsondata = await response.json();
    // console.log(jsondata);

    setnextpagetoken(jsondata.nextPageToken || null);
    setprevpagetoken(jsondata.prevPageToken || null);

    // Used .filter(Boolean) to remove undefined values in videoIds.
    // Ensured API fetch results are properly validated before setting state
    const videoid = jsondata.items
      ?.map((video) => video.id?.videoId)
      .filter(Boolean)
      .join(",");
    // console.log(videoid);  
    setvideoIdList(videoid);
  };

  useEffect(() => {
    if (videoIdList) {
      get_statisticsdata_api();
    }
  }, [videoIdList]);

  const get_statisticsdata_api = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIdList}&key=${api_key}`
    );
    const jsondata = await data.json();
    console.log(jsondata.items);
    setSearchvideo(jsondata.items);
    // to get the channel ids 
    const channelid = jsondata.items.map((video)=> video?.snippet?.channelId)
    setchannelidlist(channelid)
    console.log(channelidlist)
    {channelidlist && get_channel_profile()}
  };

  const get_channel_profile = async()=>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelidlist}&key=${api_key}`)
    const jsondata = await data.json();
    console.log(jsondata.items);  
    setchanneldata(jsondata.items);
  }


  return (
    <div>
     {channeldata && Searchvideo.map((video) => (
        <Link key={video.id} to={`/videopage?id=` + video.id}>
          <SearchCard info={video} channeldata = {channeldata}/>
        </Link>
      ))}
      <div className="pagination-buttons">
        {prevpagetoken && (
          <button onClick={() => Query_videos_url(prevpagetoken)}>
            Previous
          </button>
        )}
        {nextpagetoken && (
          <button onClick={() => Query_videos_url(nextpagetoken)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Searchpage;

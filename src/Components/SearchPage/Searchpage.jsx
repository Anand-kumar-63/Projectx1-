import React from "react";
import { useState, useEffect } from "react";
import { useAsyncValue, useSearchParams } from "react-router-dom";
// import SearchCard from "./SearchCard";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import { api_key } from "../../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { closemenu } from "../../utils/Menuslice";
const Searchpage = () => {
  const [Searchvideo, setSearchvideo] = useState([]);
  const [videoIdList, setvideoIdList] = useState("");
  const [nextpagetoken, setnextpagetoken] = useState(null);
  const [prevpagetoken, setprevpagetoken] = useState(null);
  const [channelidlist , setchannelidlist] = useState([])
  const [channeldata , setchanneldata] = useState([])

  const ismenuopen = useSelector(state => state.sidebar.istogglemenu);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closemenu());
  },[])
  
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
    console.log(jsondata);

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
    <div className={`${ismenuopen?"opacity-95 translate-x-[270px] duration-300 w-[1200px]":"opacity-100  translate-x-[100px] duration-300 ease-in-out"}`}>
     {channeldata && Searchvideo.map((video) => (
        <Link key={video.id} to={`/videopage?id=` + video.id}>
          <SearchCard info={video} channeldata = {channeldata}/>
        </Link>
      ))}
     {channeldata && <div className="pagination-buttons flex justify-center mb-2">
        {prevpagetoken && (
          <button  className="px-4 py-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-2xl shadow-md transition duration-300 ml-4" onClick={() => Query_videos_url(prevpagetoken)}>
            Previous
          </button>
        )}
        {nextpagetoken && (
          <button  className="px-4 py-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-2xl shadow-md transition-all duration-300 ml-4" onClick={() => Query_videos_url(nextpagetoken)}>
            Next
          </button>
        )}
      </div>}
    </div>
  );
};

export default Searchpage;

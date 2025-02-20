import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import Button from "../Button";
import VedioCard from "../Videoplayer/VedioCard";
import { api_key } from "../../utils/Constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closemenu, openmenu } from "../../utils/Menuslice";

const tabs = ["Home", "Videos", "Shorts", "Playlists", "Posts"];

const ChannelPage = () => {
  const [channelData, setChannelData] = useState(null);
  const [videos, setVideos] = useState([]);
  const [videoCount, setVideoCount] = useState(0);
  const [videoIds, setVideoIds] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Home");

  const [searchParams] = useSearchParams();
  const channelId = searchParams.get("id");

  const ismenuopen = useSelector((state)=>state.sidebar.istogglemenu);
  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(closemenu())
  },[])
  

  useEffect(() => {
    if (channelId) {
      fetchChannelData();
      fetchChannelVideos();
    }
  }, [channelId]);

  const fetchChannelData = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${api_key}`
      );
      const data = await response.json();
      setChannelData(data.items[0]);
      setVideoCount(data.items[0]?.statistics?.videoCount || 0);
    } catch (error) {
      console.error("Error fetching channel data:", error);
    }
  };

  const fetchChannelVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${api_key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
      );
      const data = await response.json();

      const ids = data.items
        .map((video) => video.id?.videoId)
        .filter((id) => id)
        .join(",");

      setVideoIds(ids);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    if (videoIds.length > 0) {
      fetchVideoDetails();
    }
  }, [videoIds]);

  const fetchVideoDetails = async () => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${api_key}`
      );
      const jsonData = await data.json();
      setVideos(jsonData.items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  if (!channelData)
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading...
      </div>
    );

  return (
    <div className="text-black max-w-screen-lg mx-auto">

      {channelData.brandingSettings?.image?.bannerExternalUrl && (
        <div className="w-full h-48 md:h-60 bg-gray-800">
          <img
            src={channelData.brandingSettings.image.bannerExternalUrl}
            alt="Channel Banner"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Channel Info Section */}
      <div className="p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Channel Profile Image */}
        <img
          src={channelData.snippet?.thumbnails?.high?.url}
          alt="Channel Avatar"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full shadow-lg"
        />

        {/* Channel Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{channelData.snippet?.title}</h1>
          <p className="text-black mt-2">
            {channelData.snippet?.localized?.description}
          </p>

          {/* Stats Section */}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center gap-2">
              <Icon icon="mdi-account-group" width={24} height={24} />
              <span className="text-lg">
                {parseInt(channelData.statistics?.subscriberCount).toLocaleString()} Subscribers
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Icon icon="mdi-video" width={24} height={24} />
              <span className="text-lg">
                {parseInt(videoCount).toLocaleString()} Videos
              </span>
            </div>

            <Button name="Subscribe" />
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-4 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 text-lg text-black font-semibold ${
              activeTab === tab ? " border-red-500 text-red-400" : "text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 h-[1000px]">
        {activeTab === "Home" && <div className="text-black">🏠 Welcome to the Channel!</div>}
        {activeTab === "Videos" && (
          <>
            <h2 className="text-2xl font-semibold">Latest Videos</h2>
            {loading ? (
              <div className="text-center text-gray-400 mt-4">Fetching videos...</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                {videos.map((video) => (
                  <Link to={`/videopage`+`?id=`+`${video.id}`}>                  <VedioCard key={video.id} info={video} />
                </Link>

                ))}
              </div>
            )}
          </>
        )}
        {activeTab === "Shorts" && <div className="text-gray-800">🎥 Shorts Coming Soon...</div>}
        {activeTab === "Playlists" && <div className="text-gray-800">📂 No Playlists Available</div>}
        {activeTab === "Posts" && <div className="text-gray-800">📝 No Posts Yet</div>}
      </div>
    </div>
  );
};

export default ChannelPage;

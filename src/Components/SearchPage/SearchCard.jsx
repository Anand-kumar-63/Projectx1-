import React, { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SearchCard = ({ info, channeldata }) => {
  // console.log(channeld)
const ismenuopen = useSelector(state => state.sidebar.istogglemenu)

  const [channelimage, setchannelimage] = useState(null);
  const [timestamp , settimestamp] = useState(null)
  const[ des , setdes] = useState(null)
  const [title , settitle ] = useState(null);
  useEffect(() => {
    const matchchannel = channeldata.find(
      (channel) => info.snippet?.channelId == channel.id
    );
    if (matchchannel) {
      setchannelimage(matchchannel.snippet?.thumbnails?.high?.url);
      settimestamp(matchchannel.snippet?.publishedAt)
      setdes(matchchannel.snippet?.description)
      settitle(matchchannel.snippet?.title)      
    }
  }, [info?.snippet?.channeld]);
console.log(title)
  // to get the year 
    const year = new Date(timestamp).getFullYear();
    const currentyear  = new Date().getFullYear();
    const yearago = currentyear - year;

  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, localized, thumbnails } = snippet;
  const thumbnailUrl = thumbnails?.high?.url;
  return (
    <div className={`flex text-xl shadow-lg rounded-sm ${ismenuopen?"w-[1200px] min-w-[400px]":"w-[1400px] min-w-[700px]"} h-[350px] bg-white mx-4 my-2 hover:scale-[1.002] hover:transition-all duration-200`}>
      <img
        className="rounded-lg w-[500px] h-[322px]  hover:rounded-none"
        alt="video thumbnail"
        src={thumbnailUrl}
      />
      <div className="ml-4 mt-4 object-contain">
        <ul>
          <li>{snippet.title}</li>
          <li className="flex text-sm">{statistics.viewCount / 1000000}m views . 
           <div >
          {` ${yearago} year ago`}
          </div>
          </li>
        </ul>
        {/* Channel Image */}
        {channelimage && (
          <div>
          <div className="flex gap-2">
          <Link to={"/Channel?id="}><img
            className="w-10 h-10 rounded-full mb-2"
            src={channelimage}
            alt="Channel"
          /></Link>
          <div className="text-sm">
           {title}
          </div> 
          </div>

          <div className="bg-gray-200 text-sm overflow-hidden h-[40px] w-[700px]">
           {des}
          </div>
         
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchCard;

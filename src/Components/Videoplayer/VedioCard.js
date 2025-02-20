import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const VedioCard = ({ info }) => {
  // console.log(info);

  const ismenuopen = useSelector((state)=> state.sidebar.istogglemenu)

  const { snippet , statistics } = info;
  const { channelTitle , localized , thumbnails } = snippet;
  const thumbnailUrl = thumbnails?.medium?.url;
  return (
    <div className={`text-xs shadow-lg rounded-xl ${!ismenuopen?"w-[390px] h-[280px]":"w-[350px] h-[290px] mx-4"} h-[300px]  bg-gray-800 mx-2 my-2 hover:scale-[1.002] hover:transition-all duration-200`}>
      <img className='rounded-lg w-[393px] h-[222px] hover:rounded-none' alt="video thumbnail" src={thumbnailUrl} />
      <ul>
        <li>{channelTitle}</li>
        <li>{snippet.title}</li>
        <li>{statistics.viewCount/1000000}m views</li>
      </ul>
    </div>
  );
};  
export default VedioCard;



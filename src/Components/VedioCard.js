import React from 'react';

const VedioCard = ({ info }) => {
  console.log(info);
  const { snippet , statistics } = info;
  const { channelTitle , localized , thumbnails } = snippet;
  const thumbnailUrl = thumbnails?.medium?.url;
  return (
    <div className='text-xs shadow-lg rounded-sm w-[300px] bg-gray-100 p-2 mx-2 my-2 hover:scale-110 hover:transition-all duration-200'>
      <img className='rounded-t-sm' alt="video thumbnail" src={thumbnailUrl} />
      <ul>
        <li>{channelTitle}</li>
        <li>{localized.title}</li>
        <li>{statistics.viewCount/1000000}m views</li>
      </ul>
    </div>
  );
};  
export default VedioCard;

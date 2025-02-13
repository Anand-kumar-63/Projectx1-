import React from 'react';

const VedioCard = ({ info }) => {
  console.log(info);
  const { snippet , statistics } = info;
  const { channelTitle , localized , thumbnails } = snippet;
  const thumbnailUrl = thumbnails?.medium?.url;
  return (
    <div className='text-xs shadow-lg rounded-sm w-[394px] h-[300px]  bg-white mx-4 my-2 hover:scale-[1.002] hover:transition-all duration-200'>
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



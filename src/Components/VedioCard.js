import React from 'react';

const VedioCard = ({ info }) => {
  console.log(info);
  const { snippet } = info;
  const { channelTitle , localized , thumbnails } = snippet;
  const {title} = localized
  const thumbnailUrl = thumbnails?.high?.url;
  return (
    <div className='video-card text-sm w-[250px]'>
      <img alt="video thumbnail" src={thumbnailUrl} />
      <ul>
        <li>{channelTitle}</li>
        <li>{title}</li>
      </ul>
    </div>
  );
};

export default VedioCard;

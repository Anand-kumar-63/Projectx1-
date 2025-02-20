import React from "react";

const SuggestionVideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, localized, thumbnails } = snippet;
  const thumbnailUrl = thumbnails?.medium?.url;

  const Fixedthenumber = (num) => {
    if (num<1000) return num ;
    if (num >= 1000) return ((num/1000).toFixed(1) + "K")
    if (num >= 10000000)  return ((num/1000000).toFixed(0) + "M")
  }
  return (
    <div className="text-xs rounded-sm w-[430px] h-[120px] flex gap-2 bg-white mx-4 my-2 hover:scale-[1.002] hover:transition-all duration-200">
      <img
        className="rounded-lg w-auto h-[110px] hover:rounded-none"
        alt="video thumbnail"
        src={thumbnailUrl}
      />
      <ul className="text-[14px]">
        <li>{channelTitle}</li>
        <li>{snippet.title}</li>
        <li className="mt-1">{Fixedthenumber(statistics.viewCount)} Views</li>
      </ul>
    </div>
  );
};

export default SuggestionVideoCard;

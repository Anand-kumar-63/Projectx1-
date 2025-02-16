import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMpurify from "dompurify";
const Description = () => {
  const formatNumber = (num) => {
    if (!num) return "0";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(0) + "K"; 
        return num; 
  };
  const [videodata, setvideodata] = useState([]);
  const [showFull, setShowFull] = useState(false);
  

  const [SearchParams] = useSearchParams();
  const id = SearchParams.get("id"); 

  useEffect(() => {
   if(id) 
    {getdata();}
  }, [id]);

  // to get the id
  // to get data from id
  const getdata = async () => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=AIzaSyCw9eOmRziBvp5ALYMHFkMIx1eRs04nbPM`
      );
      const stat = await data.json();
      // console.log(stat.items[0]);
      setvideodata(stat.items[0]);
    } catch (err) {
      console.error("ERROR", err);
    }
  };
  const { snippet, statistics } = videodata;

  // console.log(snippet);

  function MusicPromo({ message }) {
    return (
      <div className="p-4 bg-gray-200 rounded-md">
        <p dangerouslySetInnerHTML={{ __html: { message } }} />
      </div>
    );
  }

  return (
    <div className="bg-gray-300 flex flex-col items-end rounded-lg p-4">
      <div className={`mt-5 overflow-hidden ${!showFull ? "h-[100px]" : ""}`}>
        <div>{formatNumber(statistics?.viewCount)}</div>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMpurify.sanitize(snippet?.description || ""),
          }}
        />
      </div>
      <button
        className="w-24 rounded-sm h-8 bg-slate-300"
        onClick={() => setShowFull(!showFull)}
      >
        Show {showFull ? "Less" : "More"}
      </button>
    </div>
  );
};

export default Description;

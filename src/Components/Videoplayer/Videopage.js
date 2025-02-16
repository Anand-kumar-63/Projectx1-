import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "../../utils/Menuslice";
import YoutubeVideo from "../Iframe";
import Button from "../Button";
import { useSearchParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import Comments from "../Comments/Comments";
import Description from "../Description/Description";
import Suggestion from "./Suggestion";

const Videopage = () => {
  // to get the params from the url of the page we use searchParams
  const buttons = ["All", "React", "Web"];
  const [videodata, setvideodata] = useState([]);
  const dispatch = useDispatch();
  const btnname = "subscribe";
  //  dispatch the closemenu action inside the use effect
  useEffect(() => {
    dispatch(closemenu());
  });
  const [SearchParams] = useSearchParams();
  const id = SearchParams.get("id");

  useEffect(() => {
    if(id){
    getdata();}
  }, [id]);

  const getdata = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=AIzaSyCw9eOmRziBvp5ALYMHFkMIx1eRs04nbPM`
    );
    const stat = await data.json();
    // console.log(stat.items[0]);
    setvideodata(stat.items[0]);
  };
  const { snippet, statistics } = videodata;

  // vedioplayer btns
  const btns = ["share", "download"];

  // function for formating the numbers::
  const formatNumber = (num) => {
    if (!num) return "0"; // Handle undefined/null values
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M"; // Convert to M (millions)
    if (num >= 1_000) return (num / 1_000).toFixed(0) + "K"; // Convert to K (thousands)
    return num; // If less than 1000, return as is
  };
  return (
    <div className="flex flex-row">
      {/* /video section of the video */}
      <div className="m-4 ml-[120px] w-[800px]">
        <div className="h-[480px] w-[800px] flex items-center justify-center bg-black  rounded-xl">
          <YoutubeVideo videoId={id} />
        </div>

        <div className="font-body font-bold mt-3">
          <div className="text-2xl">{snippet?.localized?.title}</div>
          <div className="flex justify-between">
            <div className="text-lg font-mono flex items-center gap-2">
              <Icon
                icon="hugeicons:circle"
                width="36"
                height="36"
                className="text-2xl"
              />
              <div className="flex items-center">
                {snippet?.channelTitle}
                <Icon icon="mdi-tick-circle" width="14" height="14"></Icon>
              </div>
              {<Button name={btnname}></Button>}
            </div>

            <div className="flex items-center">
              <div className="flex gap-0.5">
                <button className="w-22 p-1 px-2 flex bg-gray-200 rounded-l-full gap-1 hover:bg-gray-300">
                  <Icon
                    icon="stash:thumb-up-light"
                    width={24}
                    height={24}
                  ></Icon>
                  <div>{formatNumber(statistics?.likeCount)}</div>
                </button>
                <button className="w-12 rounded-r-full flex justify-center items-center bg-gray-200 hover:bg-gray-300">
                  <Icon
                    icon="stash:thumb-down-light"
                    width={24}
                    height={24}
                  ></Icon>
                </button>
              </div>
              {btns.map((name, index) => (
                <li className="list-none" key={index}>
                  <Button name={name}></Button>
                </li>
              ))}
              <button className="rounded-full bg-gray-100">
                <Icon icon="ph:dots-three-circle" width="38" height="38"></Icon>
              </button>
            </div>
          </div>
        </div>

        <Description />
        <div>
          <Comments />
        </div>
      </div>

      {/* suggestion section of the videopage  */}
      <div className="mt-2 flex flex-col">
        <div>
          <ul className="flex mt-4 px-4">
            {buttons.map((name, index) => (
              <li key={index}>
                <Button name={name} />
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <Suggestion /></div>
      </div>
    </div>
  );
};

export default Videopage;

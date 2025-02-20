import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import DOMpurify from "dompurify";
import Replysection from "./Replysection";
const Comment = ({ comment }) => {
  const [repliesOpen, setRepliesOpen] = useState(false);
  const [Reportbtn, showReportbtn] = useState(false);
  const { snippet } = comment;
  const [writereply, setwritereply] = useState(false);
  function MusicPromo({ message }) {
    return (
      <div className="p-4 bg-gray-200 rounded-md">
        <p dangerouslySetInnerHTML={{ __html: { message } }} />
      </div>
    );
  }

  //comment section of the vedios
  return (
    <div key={comment.id} className="mb-4 relative">
      {Reportbtn && (
        <button className="flex gap-1 duration-200 absolute z-10 -right-1.5 top-1.5  px-4 p-2 hover:bg-gray-500 bg-gray-400 rounded-xl mt-16">
          <Icon
            icon="material-symbols:flag-outline-rounded"
            width="24"
            height="24"
          />
          Report
        </button>
      )}

      <div className="flex gap-2 relative">
        <div className="w-12 h-auto">
          <Link
            to={`/Channel?id=${snippet?.topLevelComment?.snippet?.authorChannelId?.value}`}
          >
            <img
              className="rounded-full w-12 h-12 object-cover flex-none"
              style={{ minWidth: "48px", minHeight: "48px" }}
              alt="Profile"
              src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
            />
          </Link>
        </div>
        <div>
          <div className="select-none font-semibold">
            {snippet?.topLevelComment?.snippet?.authorDisplayName}
          </div>
          <div className="flex items-center w-[600px] gap-2 bg-gray-300 rounded-md p-2 tracking-tighter leading-tight">
            <p
              dangerouslySetInnerHTML={{
                __html: DOMpurify.sanitize(
                  snippet?.topLevelComment?.snippet?.textDisplay
                ),
              }}
            />
            <button
              onClick={() => showReportbtn(!Reportbtn)}
              style={{ minWidth: "36px", minHeight: "36px" }}
              className="rounded-full flex justify-center items-center  bg-gray-5 absolute right-1 h-8 ml-2 hover:bg-gray-400"
            >
              <Icon icon="ph:dots-three-vertical-bold" width="20" height="24" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center ml-[50px] gap-2 select-none cursor-pointer">
        <div className="flex gap-1 w-auto justify-center rounded-lg items-center h-[30px]">
          <div className="flex p-1 w-auto rounded-md bg-gray-300 hover:bg-gray-400">
            <Icon icon="stash:thumb-up-light" width={24} height={24} />
            {snippet?.topLevelComment?.snippet?.likeCount}
          </div>
          <Icon
            className="bg-gray-300 hover:bg-gray-400 rounded-md"
            icon="stash:thumb-down-light"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col">
          <button
            onClick={() => setwritereply(!writereply)}
            className="h-7 w-auto px-3 bg-gray-300 rounded-2xl hover:bg-gray-400"
          >
            Reply
          </button>
        </div>
      </div>
      {writereply && <Replysection />}

      {/* reply section of the commments */}
      <div className={`ml-12 rounded-lg`}>
        {comment.replies?.comments?.length > 0 && (
          <button
            className="px-4 py-2 mt-1 rounded-full gap-1 duration-300 hover:bg-gray-400 flex items-center"
            onClick={() => setRepliesOpen(!repliesOpen)}
          >
            <Icon
              icon={`${
                repliesOpen
                  ? "material-symbols:keyboard-arrow-up-rounded"
                  : "material-symbols:keyboard-arrow-down-rounded"
              }`}
              className="size-6"
            />
            <span>{comment.replies.comments.length} replies</span>
          </button>
        )}

        {repliesOpen &&
          comment.replies?.comments.map((reply) => (
            <div key={reply.id} className="mb-4 mt-3 relative">
              {Reportbtn && (
                <button className="flex gap-1 duration-200 absolute z-10 -right-1.5 top-1.5  px-4 p-2 hover:bg-gray-500 bg-gray-400 rounded-xl mt-16">
                  <Icon
                    icon="material-symbols:flag-outline-rounded"
                    width="24"
                    height="24"
                  />
                  Report
                </button>
              )}

              <div className="flex gap-2 relative">
                <div className="w-12 h-auto">
                  <Link
                    to={`/Channel?id=${reply.snippet?.authorChannelId?.value}`}
                  >
                    <img
                      className="rounded-full w-12 h-12 object-cover flex-none"
                      style={{ minWidth: "48px", minHeight: "48px" }}
                      alt="Profile"
                      src={reply.snippet?.authorProfileImageUrl}
                    />
                  </Link>
                </div>
                <div>
                  <div className="select-none font-semibold">
                    {reply.snippet?.authorDisplayName}
                  </div>
                  <div className="flex items-center gap-2 bg-gray-300 rounded-md p-2 tracking-tighter leading-tight">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: reply.snippet?.textDisplay,
                      }}
                    />

                    <button
                      onClick={() => showReportbtn(!Reportbtn)}
                      style={{ minWidth: "36px", minHeight: "36px" }}
                      className="rounded-full flex justify-center items-center  bg-gray-5 absolute right-1 h-8 ml-2 hover:bg-gray-400"
                    >
                      <Icon
                        icon="ph:dots-three-vertical-bold"
                        width="20"
                        height="24"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center ml-[50px] gap-2 select-none cursor-pointer">
                <div className="flex gap-1 w-auto justify-center rounded-lg items-center h-[30px]">
                  <div className="flex p-1 w-auto rounded-md bg-gray-300 hover:bg-gray-400">
                    <Icon icon="stash:thumb-up-light" width={24} height={24} />
                    {reply.snippet?.likeCount}
                  </div>
                  <Icon
                    className="bg-gray-300 hover:bg-gray-400 rounded-md"
                    icon="stash:thumb-down-light"
                    width={28}
                    height={28}
                  />
                </div>
                <div>
                  <button
                    // onClick={() => setwritereply(!writereply)}
                    className="h-7 w-auto px-3 bg-gray-300 rounded-2xl hover:bg-gray-400"
                  >
                    Reply
                  </button>
                </div>

                {/* {writereply && <Replysection />} */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comment;

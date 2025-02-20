import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import { api_key } from "../../utils/Constants";
const Comments = () => {


  const apikey = api_key;
  // to get the id
  const [comments, setComments] = useState([]);
  const [SearchParams] = useSearchParams();
  const id = SearchParams.get("id");
  const COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${apikey}`;

  useEffect(() => {
    if(id){
    fetchComments();}
  }, [id]);

  const fetchComments = async () => {
    try {
      const response = await fetch(COMMENTS_API);
      const data = await response.json();
      // console.log(data.items);
      setComments(data.items || []);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  return (
    <div className="h-auto my-4 rounded-md bg-gray-300 p-2">
      {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </div>
  );
};

export default Comments;

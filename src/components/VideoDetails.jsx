// src/components/VideoDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import SuggestedVideos from "./SuggestedVideo";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data?.items?.[0]));
  }, [id]);

  if (!videoDetail) return <p className="p-4">Loading...</p>;

  const { snippet, statistics } = videoDetail;

  return (
    <div className="p-4">
      <div className="relative w-full" style={{paddingTop: "56.25%"}}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${id}`}
          title={snippet.title}
          frameBorder="0"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-xl"
        />
      </div>
      <h1 className="text-xl font-bold mb-2">{snippet.title}</h1>
      <p className="text-gray-600 mb-2">{snippet.channelTitle}</p>
      <p className="text-sm text-gray-700">{snippet.description}</p>
      <div className="mt-4 text-sm text-gray-500">
        {Number(statistics.viewCount).toLocaleString()} views •{" "}
        {Number(statistics.likeCount).toLocaleString()} likes
      </div>
      <div className="w-full md:w-1/3">
    <h2 className="text-lg font-bold mb-4">Suggested Videos</h2>
    <SuggestedVideos videoId={id} />
  </div>
    </div>
  );
};

export default VideoDetail;

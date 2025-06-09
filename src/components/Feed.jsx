
import Loader from "./Loader";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoCard from "./VideoCard";

const Feed = ({ category }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setVideos([]); // Clear old videos
    setLoading(true)
    fetchFromAPI(`search?part=snippet&q=${category}&maxResults=20`)
      .then((data) => {
        console.log("Feed videos:", data?.items);
        setVideos(data?.items || [])
        setLoading(false);
      });
  }, [category]);
  if (loading) return <Loader />;
  return (
    <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videos.length === 0 ? (
        <p className="text-gray-500">No videos found.</p>
      ) : (
        videos.map((item, idx) =>
          item.id?.videoId ? <VideoCard key={idx} video={item} /> : null
        )
      )}
    </div>
  );
};

export default Feed;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SuggestedVideos = ({ videoId }) => {
  const [videos, setVideos] = useState([]); // Always start with an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!videoId) return;

    setLoading(true);

    fetch(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&part=snippet&maxResults=10&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.items)) {
          setVideos(data.items);
        } else {
          setVideos([]); // fallback if items is missing
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching suggested videos:", err);
        setVideos([]);
        setLoading(false);
      });
  }, [videoId]);

  if (loading) return <p className="text-sm text-gray-500">Loading suggestions...</p>;

  // 👇 This check is what prevents .map() from failing
  if (!Array.isArray(videos) || videos.length === 0) {
    return <p className="text-sm text-red-500">No suggestions found.</p>;
  }

  return (
    <div className="space-y-4">
      {videos.map((video) => {
        const { id, snippet } = video;
        const vidId = id?.videoId || id;

        return (
          <Link
            key={vidId}
            to={`/video/${vidId}`}
            className="flex gap-3 hover:bg-gray-100 p-2 rounded-lg transition"
          >
            <img
              src={snippet?.thumbnails?.medium?.url}
              alt={snippet?.title}
              className="w-32 h-20 object-cover rounded"
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-sm font-medium line-clamp-2">{snippet?.title}</h3>
              <p className="text-xs text-gray-600">{snippet?.channelTitle}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SuggestedVideos;

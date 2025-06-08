import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

// const dummySearchResults = [
//   {
//     title: "How to use Tailwind CSS",
//     channel: "Web Dev Simplified",
//     thumbnail: "https://i.ytimg.com/vi/dFgzHOX84xQ/hqdefault.jpg",
//   },
//   {
//     title: "React Router v6 Tutorial",
//     channel: "The Net Ninja",
//     thumbnail: "https://i.ytimg.com/vi/59IXY5IDrBA/hqdefault.jpg",
//   },
// ];

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
   useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}&maxResults=20`)
      .then((data) => setVideos(data.items));
   },[searchTerm]);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Results for <span className="text-blue-500">"{searchTerm}"</span>
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videos?.map((item, idx) =>
          item.id.videoId ? <VideoCard key={idx} video={item} /> : null
        )}
      </div>
    </div>
  );
};

export default SearchResults;

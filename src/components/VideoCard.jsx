// import React from "react";
// import { Link } from "react-router-dom";
// const VideoCard=({video})=>{
//     const {id,snippet}=video;
//     const videoId=id.videoId || id;
//     return(
//         <>
//         <Link to={`/video/${videoId}`} className="block"
//         <div className="w-full">
//         <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} className="w-full rounded-xl mb-2 object-cover aspect-video" />
//         <h3 className="text-sm font-semibold line-clamp-2">{snippet?.title}</h3>
//         <p className="text-gray-600 text-sm">{snippet?.channelTitle}</p>
//         </div>
//         </Link>
//         </>
//     )
// }
// export default VideoCard;
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;
  const videoId = id?.videoId || id; // Sometimes id is string in /videos

  return (
    <Link to={`/video/${videoId}`} className="block">
      <div className="w-full">
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className="w-full rounded-xl mb-2 object-cover aspect-video"
        />
        <h3 className="text-sm font-semibold line-clamp-2">{snippet?.title}</h3>
        <p className="text-gray-600 text-sm">{snippet?.channelTitle}</p>
      </div>
    </Link>
  );
};

export default VideoCard;

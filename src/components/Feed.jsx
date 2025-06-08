// import React, { useEffect, useState } from "react";
// import VideoCard from "./VideoCard";
// import { fetchFromAPI } from "../utils/fetchFromAPI";

// // const dummyVideos = [
// //   {
// //     title: "React Tutorial for Beginners",
// //     channel: "CodeWithAsif",
// //     thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
// //   },
// //   {
// //     title: "Build Netflix Clone with React",
// //     channel: "Dev Ed",
// //     thumbnail: "https://i.ytimg.com/vi/xP3cxbDUtrc/hqdefault.jpg",
// //   },
// //   {
// //     title: "Top 10 JavaScript Tricks",
// //     channel: "Traversy Media",
// //     thumbnail: "https://i.ytimg.com/vi/Bv_5Zv5c-Ts/hqdefault.jpg",
// //   },
// //   {
// //     title: "Top 10 JavaScript Tricks",
// //     channel: "Traversy Media",
// //     thumbnail: "https://i.ytimg.com/vi/Bv_5Zv5c-Ts/hqdefault.jpg",
// //   },
// //   {
// //     title: "Top 10 JavaScript Tricks",
// //     channel: "Traversy Media",
// //     thumbnail: "https://i.ytimg.com/vi/Bv_5Zv5c-Ts/hqdefault.jpg",
// //   },
// //   {
// //     title: "Top 10 JavaScript Tricks",
// //     channel: "Traversy Media",
// //     thumbnail: "https://i.ytimg.com/vi/Bv_5Zv5c-Ts/hqdefault.jpg",
// //   },
// //   {
// //     title: "Top 10 JavaScript Tricks",
// //     channel: "Traversy Media",
// //     thumbnail: "https://i.ytimg.com/vi/Bv_5Zv5c-Ts/hqdefault.jpg",
// //   },
// //   {
// //     title: "Top 10 JavaScript Tricks",
// //     channel: "Traversy Media",
// //     thumbnail: "https://i.ytimg.com/vi/Bv_5Zv5c-Ts/hqdefault.jpg",
// //   },
// //   {
// //     title: "Top 10 JavaScript Tricks",
// //     channel: "Traversy Media",
// //     thumbnail: "https://i.ytimg.com/vi/Bv_5Zv5c-Ts/hqdefault.jpg",
// //   },
// //   // add more if you want
// // ];

// const Feed = ({ category }) => {
//     const [videos,setVideos]=useState([])
//     useEffect(()=>{
//         setVideos([]);
//         fetchFromAPI(`search?part=snippet&q=${category}&maxResults=20`)
//         .then((data)=> {
//             console.log("Feed videos:",data?.items);
//             setVideos(data?.items || []);
//         });
//     },[category]);
//   return (
//     <div className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
//       {videos.length=== 0 ?}(
//         <p>No Videos Found!</p>
//       ):
      
//       ({videos?.map((item, idx) => (
//         item.id?.videoId ? <VideoCard key={idx} video={item} /> :null)
//       )}
//     </div>
//   );
//       };

// export default Feed;

import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideoCard from "./VideoCard";

const Feed = ({ category }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([]); // Clear old videos

    fetchFromAPI(`search?part=snippet&q=${category}&maxResults=20`)
      .then((data) => {
        console.log("Feed videos:", data?.items);
        setVideos(data?.items || []);
      });
  }, [category]);

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

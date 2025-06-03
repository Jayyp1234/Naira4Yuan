import { Youtube } from "@/data";
import { YouTubeIcon } from "@/data/Icons";
import { Play } from "lucide-react";
import React, { useState } from "react";

// export default function Iframe({ srcLink = "" }) {
//   return (
//     <>
//       <div className="relative h-full overflow-hidden rounded-2xl">
//         <div
//           className="absolute inset-0 z-10 flex items-center justify-center bg-[#01393000] cursor-pointer"
//         >
//           <img src={Youtube} alt="Play" className="z-20 w-20 h-20" />
//         </div>
//         <iframe
//           className="w-full h-full border-0"
//           src={srcLink}
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen>
//         </iframe>
//       </div >
//     </>
//   );
// }

export default function Iframe({ srcLink = "" }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube video ID from various YouTube URL formats
  const getYouTubeVideoId = (url) => {
    if (!url) return null;

    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/,
      /youtube\.com\/embed\/([^&\n?#]+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  // Get thumbnail URL from video ID
  const getThumbnailUrl = (videoId) => {
    if (!videoId) return null;
    // Using maxresdefault for highest quality, fallback to hqdefault if needed
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const videoId = getYouTubeVideoId(srcLink);
  const thumbnailUrl = getThumbnailUrl(videoId);

  return (
    <div className="relative h-full min-h-[280px] overflow-hidden bg-gray-900 rounded-2xl">
      {!isPlaying && thumbnailUrl && (
        <div
          className="absolute inset-0 z-10 cursor-pointer group"
          onClick={handlePlayClick}
        >
          {/* Thumbnail Image */}
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="object-cover w-full h-full"
            onError={(e) => {
              // Fallback to hqdefault if maxresdefault fails
              e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center transition-colors bg-black/30 group-hover:bg-black/50">
            <YouTubeIcon className="w-20 h-20 text-white" />
          </div>
        </div>
      )}

      {!isPlaying && !thumbnailUrl && srcLink && (
        // Fallback for non-YouTube videos or invalid URLs
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-gray-800 cursor-pointer"
          onClick={handlePlayClick}
        >
          <div className="text-center">
            <Play className="w-20 h-20 mx-auto mb-2 text-white" />
            <p className="text-sm text-white">Click to play video</p>
          </div>
        </div>
      )}

      <iframe
        className="w-full h-full border-0"
        src={isPlaying ? srcLink : ""}
        title="Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

// export default function Iframe({ srcLink = "" }) {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayClick = () => {
//     setIsPlaying(true);
//   };

//   return (
//     <div className="relative h-full min-h-[240px] overflow-hidden rounded-2xl">
//       {!isPlaying && srcLink && (
//         <div
//           className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-black/50"
//           onClick={handlePlayClick}
//         >
//           <YouTubeIcon className="w-20 h-20 text-white" />
//         </div>
//       )}

//       <iframe
//         className="w-full h-full border-0"
//         src={isPlaying ? srcLink : ""}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         allowFullScreen
//       />
//     </div>
//   );
// }

// export default function Iframe({ srcLink = "", thumbnail = "" }) {
//   const [showIframe, setShowIframe] = useState(false);

//   if (!srcLink) {
//     return (
//       <div className="flex items-center justify-center h-full text-sm text-gray-500 border border-gray-200 rounded-2xl bg-gray-50">
//         No content available
//       </div>
//     );
//   }

//   return (
//     <div className="relative h-full min-h-[240px] overflow-hidden rounded-2xl">
//       {!showIframe && (
//         <div
//           className="absolute inset-0 z-10 flex items-center justify-center bg-[#01393000] cursor-pointer"
//           onClick={() => setShowIframe(true)}
//         >
//           <img src={Youtube} alt="Play" className="z-20 w-20 h-20" />
//         </div>
//       )}

//       {!showIframe ? (
//         <img
//           src={thumbnail}
//           alt="Video preview"
//           className="object-cover w-full h-full"
//         />
//       ) : (
//         <iframe
//             className="w-full h-full border-0"
//             src={srcLink}
//             title="YouTube video player"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         />
//       )}
//     </div>
//   );
// }
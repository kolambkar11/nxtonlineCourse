import React from "react";

// Define the interface for videoUrl
interface IVideoUrl {
  banner: {
    url: string;
  };
  chapter: {
    video: {
      url: string;
    };
  }[];
}

interface VideoplayerProps {
  videoUrl: IVideoUrl;
}

const Videoplayer: React.FC<VideoplayerProps> = ({ videoUrl }) => {
  return (
    <div>
      <video
        width={1000}
        height={250}
        controls
        className="rounded-sm"
        poster={videoUrl.banner.url}
      >
        {videoUrl.chapter.length > 0 && (
          <source src={videoUrl.chapter[0].video.url} type="video/mp4" />
        )}
      </video>
    </div>
  );
};

export default Videoplayer;

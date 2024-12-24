import React from "react";
const Videoplayer = ({ videoUrl }: any) => {
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

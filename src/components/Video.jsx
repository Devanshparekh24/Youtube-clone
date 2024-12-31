import React from "react";
import { Link } from "react-router-dom";

function Video({ video }) {
  console.log(video);

  return (
    <Link to={`/video/id:${video?.videoId}`}>
      <div>
        <div>
          <img src={video?.thumbnails[0]?.url} alt="" />
        </div>
      </div>
    </Link>
  );
}

export default Video;

import React from "react";
import Sidebar from "./Sidebar";
import { useAuth } from "../contexts/AuthProvider";
import Video from "./Video";

function Home() {
  const { data } = useAuth();
  console.log(data);

  return (
    <>
      <div className="flex ">
        <Sidebar />
      </div>
      <div className="flex-1 ">
        {data.length > 0 &&
          data.map((item) => <Video key={item.id} video={item?.videoId} />)}
      </div>
    </>
  );
}

export default Home;

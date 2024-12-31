import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineCompass,
  AiFillLike,
  AiFillClockCircle,
} from "react-icons/ai";
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdOutlineExpandMore,
  MdOutlineExpandLess,
} from "react-icons/md";
import { BsCollectionPlay, BsNewspaper } from "react-icons/bs";
import {
  IoGameControllerOutline,
  IoMusicalNotesOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { HiFire } from "react-icons/hi";

const YoutubeSidebar = () => {
  const [showMore, setShowMore] = useState(false);

  const mainLinks = [
    { icon: AiFillHome, text: "Home" },
    { icon: AiOutlineCompass, text: "Explore" },
    { icon: BsCollectionPlay, text: "Shorts" },
    { icon: MdSubscriptions, text: "Subscriptions" },
  ];

  const libraryLinks = [
    { icon: MdHistory, text: "History" },
    { icon: AiFillClockCircle, text: "Watch Later" },
    { icon: AiFillLike, text: "Liked Videos" },
    { icon: MdVideoLibrary, text: "Library" },
  ];

  const exploreLinks = [
    { icon: HiFire, text: "Trending" },
    { icon: IoMusicalNotesOutline, text: "Music" },
    { icon: BiMoviePlay, text: "Movies" },
    { icon: IoGameControllerOutline, text: "Gaming" },
    { icon: BsNewspaper, text: "News" },
    { icon: IoTrophyOutline, text: "Sports" },
  ];

  const renderLinks = (links) => {
    return links.map((link, index) => (
      <button
        key={index}
        className="flex items-center gap-4 p-3 w-full hover:bg-gray-100 rounded-lg transition-colors"
      >
        <link.icon className="w-6 h-6" />
        <span className="text-sm">{link.text}</span>
      </button>
    ));
  };

  return (
    <div className=" w-64 mt-1  bg-white border-r border-gray-200 p-2 flex flex-col h-[calc(100vh-10px)] overflow-y-scroll over ">
      {/* Main Navigation */}
      <div className="mb-4">{renderLinks(mainLinks)}</div>

      {/* Library Section */}
      <div className="mb-4">
        <div className="px-3 py-2 text-sm font-semibold text-gray-500">
          Library
        </div>
        {renderLinks(libraryLinks)}
      </div>

      {/* Explore Section */}
      <div className="mb-4">
        <div className="px-3 py-2 text-sm font-semibold text-gray-500">
          Explore
        </div>
        {showMore ? (
          <>
            {renderLinks(exploreLinks)}
            <button
              onClick={() => setShowMore(false)}
              className="flex items-center gap-4 p-3 w-full hover:bg-gray-100 rounded-lg transition-colors"
            >
              <MdOutlineExpandLess className="w-6 h-6" />
              <span className="text-sm">Show Less</span>
            </button>
          </>
        ) : (
          <>
            {renderLinks(exploreLinks.slice(0, 3))}
            <button
              onClick={() => setShowMore(true)}
              className="flex items-center gap-4 p-3 w-full hover:bg-gray-100 rounded-lg transition-colors"
            >
              <MdOutlineExpandMore className="w-6 h-6" />
              <span className="text-sm">Show More</span>
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto px-3 py-4 text-xs text-gray-500">
        <p>About Press Copyright</p>
        <p>Contact us Creators</p>
        <p>Terms Privacy Policy & Safety</p>
        <p className="mt-4">© 2024 Google LLC</p>
      </div>
    </div>
  );
};

export default YoutubeSidebar;

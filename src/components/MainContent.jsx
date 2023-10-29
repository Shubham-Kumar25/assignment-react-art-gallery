import React from "react";
import Sidebar from "./Sidebar";
import ArtistSection from "./ArtistSection";
import PostData from "./PostData";
import Carousel from "./Carousel";

const MainContent = () => {
  return (
    <div className="flex items-start justify-center gap-x-7">
      {/* Sidebar and Footer */}
      <div className="flex flex-col gap-y-4">
        <Sidebar />
        <div className="flex justify-between w-64">
          <p className="text-[11px] text-gray-500">© 2023 LogoName</p>
          <p className="text-[11px] text-gray-500">
            Developed by Shubham Kumar
          </p>
        </div>
      </div>

      {/* PostData and Carousel */}
      <div className="flex flex-col gap-y-7">
        <PostData />
        <Carousel />
      </div>

      {/* ArtistSection and Legal Links */}
      <div className="flex flex-col gap-y-4">
        <ArtistSection />
        <div className="flex justify-between w-64">
          <a href="/" className="text-xs text-gray-500">
            Privacy
          </a>
          <a href="/" className="text-xs text-gray-500">
            Terms of Service
          </a>
          <a href="/" className="text-xs text-gray-500">
            Cookie Notice
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

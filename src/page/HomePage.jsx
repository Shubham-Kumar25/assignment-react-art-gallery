import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-40 py-10 gap-y-7">
      <Header />
      <MainContent />
    </div>
  );
};

export default HomePage;

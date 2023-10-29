import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import SellerButton from "./SellerButton";

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-x-7">
      <Logo />
      <SearchBox />
      <SellerButton />
    </div>
  );
};

export default Header;

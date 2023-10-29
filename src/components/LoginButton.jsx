import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login">
      <div className="w-24 h-12 text-base font-semibold rounded-lg bg-[#4fa99f] flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform">
        Login
      </div>
    </Link>
  );
};

export default LoginButton;
